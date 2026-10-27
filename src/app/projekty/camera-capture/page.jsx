import Image from 'next/image'
import { PhotoGallery, Zoomable } from '@/components/PhotoGallery'
import { SparkleIcon } from '@/components/SparkleIcon'
import { ProjectLayout } from '@/components/ProjectLayout'
import { Badge, Badges } from '@/components/Badge'
import { CoverImage } from '@/components/Article'
import { ProjectTitle } from '@/components/ProjectTitle'
import cover from '@/images/camera-capture.jpg'
import raw1 from '@/images/camera-capture-1-raw.jpg'
import final1 from '@/images/camera-capture-1.jpg'
import raw2 from '@/images/camera-capture-2-raw.jpg'
import final2 from '@/images/camera-capture-2.jpg'
import raw3 from '@/images/camera-capture-3-raw.jpg'
import final3 from '@/images/camera-capture-3.jpg'
import appSessions from '@/images/camera-capture-app-sessions.jpg'
import appSession from '@/images/camera-capture-app-session.jpg'
import appReview from '@/images/camera-capture-app-review.jpg'
import cameraCaptureLogo from '@/images/camera-capture-logo.png'

const gallery = [
  { image: raw1, alt: 'Surowe zdjęcie produktu prosto z aparatu' },
  { image: final1, alt: 'Gotowe zdjęcie katalogowe z białym tłem i logo' },
  {
    image: raw2,
    alt: 'Surowe zdjęcie produktu prosto z aparatu, drugie ujęcie',
  },
  { image: final2, alt: 'Gotowe zdjęcie katalogowe, drugie ujęcie' },
  { image: raw3, alt: 'Surowe zdjęcie produktu pod kątem' },
  { image: final3, alt: 'Gotowe zdjęcie katalogowe w kadrze trzy czwarte' },
]

const screens = [
  {
    image: appSessions,
    alt: 'Ekran startowy aplikacji: lista sesji zdjęciowych pogrupowana po dniach',
    caption: 'Lista sesji',
  },
  {
    image: appSession,
    alt: 'Sesja zdjęciowa: podgląd na żywo z aparatu z siatką i panelem ustawień',
    caption: 'Sesja',
  },
  {
    image: appReview,
    alt: 'Podgląd gotowego zdjęcia katalogowego w aplikacji',
    caption: 'Podgląd',
  },
]

export const metadata = {
  title: 'Camera Capture - automatyzacja fotografii produktowej',
  description:
    'Aplikacja desktopowa w Pythonie do zautomatyzowanej fotografii produktowej: podgląd na żywo z aparatu Canon, lokalne usuwanie tła przez AI, kadrowanie i logo - gotowe zdjęcie katalogowe w 7 sekund.',
}

export default function Page() {
  return (
    <ProjectLayout title="Camera Capture" date="2026-07-31">
      <CoverImage
        image={cover}
        alt="Stanowisko do zdjęć produktowych: aparat Canon na ramieniu i laptop z uruchomioną aplikacją"
        priority
      />

      <ProjectTitle
        logo={cameraCaptureLogo}
        href="https://github.com/Xeross99/camera-capture"
        tagline={<>Aplikacja do automatycznej fotografii produktowej</>}
      >
        Camera Capture
      </ProjectTitle>

      <Badges>
        <Badge tech="python" />
        <Badge tech="macos" />
        <Badge tech="windows" />
      </Badges>

      <p>
        Aplikacja desktopowa do automatyzacji fotografii produktowej dla sklepu
        internetowego Trixbrix. Na ekranie widać podgląd na żywo z&nbsp;aparatu
        Canon EOS M50, a&nbsp;jedno wciśnięcie ENTER uruchamia cały cykl: aparat
        robi zdjęcie, AI lokalnie usuwa tło, produkt zostaje wyśrodkowany,
        w&nbsp;rogu pojawia się logo sklepu, a&nbsp;gotowy plik 3000×3000 ląduje
        na dysku i&nbsp;w&nbsp;panelu sklepu. Cały cykl trwa około siedmiu
        sekund.{' '}
        <a
          href="https://github.com/Xeross99/camera-capture"
          target="_blank"
          rel="noreferrer"
        >
          Zobacz repo na GitHubie
        </a>
      </p>

      <h3>
        <SparkleIcon /> Jakie problemy rozwiązuje?
      </h3>

      <ul>
        <li>
          Każdy nowy produkt w&nbsp;sklepie potrzebuje zdjęć katalogowych -
          białe tło, wykadrowanie, logo. Ręczna obróbka partii produktów
          w&nbsp;Photoshopie zajmowała godziny, teraz to kwestia sekund
        </li>
        <li>
          Podgląd na żywo z&nbsp;siatką i&nbsp;kontrolą tła - fotograf widzi
          kadr przed zrobieniem zdjęcia, bez zaglądania w&nbsp;ekranik aparatu
        </li>
        <li>
          Usuwanie tła działa w&nbsp;całości lokalnie na CPU - bez GPU, bez
          płatnych chmurowych API, zdjęcia nie opuszczają komputera
        </li>
        <li>
          Spójny format każdego zdjęcia: wyśrodkowany produkt, stały margines,
          wymiar 3000×3000
        </li>
        <li>
          Surowe zdjęcie z&nbsp;aparatu zapisuje się obok przetworzonego - jeśli
          automat się pomyli, oryginał czeka na dysku
        </li>
        <li>
          Sesje zdjęciowe pobierane z&nbsp;panelu sklepu - wystarczy wpisać
          numer produktu, a&nbsp;zdjęcia zrobione wcześniej (nawet na innym
          komputerze) pojawiają się w&nbsp;aplikacji
        </li>
        <li>
          Upload prosto do panelu sklepu - galeria produktu aktualizuje się na
          żywo podczas sesji zdjęciowej
        </li>
        <li>
          Działa na macOS i&nbsp;Windows - na Windowsie jako gotowy plik .exe
        </li>
      </ul>

      <h3>
        <SparkleIcon /> Jak wygląda aplikacja?
      </h3>

      <p>
        Ekran startowy pokazuje wszystkie sesje zdjęciowe pogrupowane po dniach,
        z&nbsp;najnowszym zdjęciem jako okładką. Wewnątrz sesji jest podgląd na
        żywo z&nbsp;siatką, kompensacja ekspozycji i&nbsp;przełączniki obróbki,
        a&nbsp;na dole taśma ze zrobionymi zdjęciami. Spacja otwiera podgląd
        gotowego pliku na cały ekran. Kliknij zrzut, żeby go powiększyć.
      </p>

      <PhotoGallery>
        <div className="not-prose grid gap-y-6">
          {screens.map((screen) => (
            <figure key={screen.caption} className="my-0">
              <Zoomable
                image={screen.image}
                className="relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900"
              >
                <Image
                  src={screen.image}
                  alt={screen.alt}
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 38rem, 92vw"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/20 ring-inset dark:ring-white/15" />
              </Zoomable>
              <figcaption className="mt-2 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
                {screen.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </PhotoGallery>

      <h3>
        <SparkleIcon /> Zobacz w&nbsp;akcji
      </h3>

      <p>
        Po lewej surowe zdjęcie prosto z&nbsp;matrycy aparatu, po prawej to, co
        aplikacja zapisuje na dysku: 3000×3000, białe tło, wyśrodkowany produkt,
        logo. Trzy ujęcia z&nbsp;jednej sesji, która trwała około 20 sekund.
        Kliknij zdjęcie, żeby je powiększyć.
      </p>

      <PhotoGallery>
        <div className="not-prose grid grid-cols-2 gap-x-4 gap-y-3">
          <p className="my-0 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
            Przed
          </p>
          <p className="my-0 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
            Po
          </p>
          {gallery.map((photo) => (
            <Zoomable
              key={photo.alt}
              image={photo.image}
              className="relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900"
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 18rem, 45vw"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/20 ring-inset dark:ring-white/15" />
            </Zoomable>
          ))}
        </div>
      </PhotoGallery>

      <h3>
        <SparkleIcon /> Technologie
      </h3>

      <ul>
        <li>Python 3.12 - cały pipeline</li>
        <li>
          python-gphoto2 (macOS) i&nbsp;Canon EDSDK przez ctypes (Windows) -
          sterowanie aparatem, podgląd na żywo i&nbsp;pobieranie zdjęć przez USB
        </li>
        <li>
          pywebview - natywne okno systemowe z&nbsp;interfejsem w&nbsp;czystym
          HTML, CSS i&nbsp;JavaScripcie, bez Electrona i&nbsp;frameworków
        </li>
        <li>
          Wbudowany serwer HTTP z&nbsp;biblioteki standardowej - strumieniuje
          podgląd z&nbsp;aparatu jako MJPEG i&nbsp;obsługuje akcje interfejsu
        </li>
        <li>
          rembg (model u2netp) + onnxruntime - lokalne usuwanie tła przez AI
        </li>
        <li>
          Pillow, numpy i&nbsp;scipy - maski, kadrowanie, wyostrzanie,
          nakładanie logo
        </li>
        <li>
          requests + python-dotenv - upload do towarzyszącej aplikacji Rails
        </li>
      </ul>

      <h3>
        <SparkleIcon /> Jak wyglądała praca nad projektem?
      </h3>

      <p>
        Punktem wyjścia był konkretny, powtarzalny problem: każda partia nowych
        produktów w&nbsp;sklepie oznaczała sesję zdjęciową i&nbsp;długą, ręczną
        obróbkę w&nbsp;Photoshopie. Chciałem, żeby cała pętla - zdjęcie,
        obróbka, zapis - sprowadzała się do jednego klawisza. Pierwsza wersja
        działała w&nbsp;terminalu i&nbsp;przez kilka miesięcy w&nbsp;zupełności
        wystarczała.
      </p>

      <p>
        Najciekawszą częścią okazało się dopracowanie masek z&nbsp;modelu AI.
        Surowa maska łapała drobne artefakty - pyłki, krawędzie tła - więc
        filtruję je po powierzchni. Osobnym wyzwaniem były cienie prześwitujące
        przez otwory w&nbsp;produkcie: te rozjaśniam do bieli, ale sam produkt
        zostawiam nietknięty. Wyostrzanie działa selektywnie tylko na produkcie,
        nigdy na tle - dzięki temu wokół krawędzi nie pojawia się jasna obwódka,
        która zdradzałaby, że tło było wycinane.
      </p>

      <p>
        Pipeline pracuje na pełnej rozdzielczości matrycy (24 Mpix)
        w&nbsp;jednym przebiegu, z&nbsp;jednym finalnym skalowaniem,
        i&nbsp;działa w&nbsp;całości offline. Dodałem też integrację
        z&nbsp;aplikacją Rails obsługującą katalog sklepu: zaraz po naciśnięciu
        migawki narzędzie zgłasza nowe zdjęcie do panelu sklepu (od razu pojawia
        się tam miejsce na nie), a&nbsp;po zakończeniu obróbki wysyła gotowy
        plik przez API - podgląd sesji w&nbsp;sklepie aktualizuje się na żywo.
      </p>

      <p>
        Kolejnym krokiem była aplikacja okienkowa. Z&nbsp;terminala nie było
        widać kadru, więc trzeba było zaglądać w&nbsp;ekranik aparatu,
        a&nbsp;narzędzia miały używać też osoby, które na co dzień nie pracują
        w&nbsp;konsoli. Zamiast ciężkiego frameworka postawiłem na natywne okno
        systemowe z&nbsp;interfejsem w&nbsp;zwykłym HTML: aparat, obróbka
        i&nbsp;ramię z&nbsp;aparatem pracują w&nbsp;wątkach Pythona,
        a&nbsp;interfejs jest po prostu stroną, którą w&nbsp;razie potrzeby
        można otworzyć nawet w&nbsp;przeglądarce. Przy okazji aplikacja dostała
        wersję na Windows, gdzie z&nbsp;aparatem rozmawia bezpośrednio przez
        oficjalne SDK Canona.
      </p>
    </ProjectLayout>
  )
}

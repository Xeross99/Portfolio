import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { SparkleIcon } from '@/components/SparkleIcon'
import { ProjectLayout } from '@/components/ProjectLayout'
import { Badge, Badges } from '@/components/Badge'
import { CoverImage } from '@/components/Article'
import cover from '@/images/camera-capture.jpg'
import raw1 from '@/images/camera-capture-1-raw.jpg'
import final1 from '@/images/camera-capture-1.jpg'
import raw2 from '@/images/camera-capture-2-raw.jpg'
import final2 from '@/images/camera-capture-2.jpg'
import raw3 from '@/images/camera-capture-3-raw.jpg'
import final3 from '@/images/camera-capture-3.jpg'

const gallery = [
  { image: raw1, alt: 'Surowe zdjęcie produktu prosto z aparatu' },
  { image: final1, alt: 'Gotowe zdjęcie katalogowe z białym tłem i logo' },
  { image: raw2, alt: 'Surowe zdjęcie produktu prosto z aparatu, drugie ujęcie' },
  { image: final2, alt: 'Gotowe zdjęcie katalogowe, drugie ujęcie' },
  { image: raw3, alt: 'Surowe zdjęcie produktu pod kątem' },
  { image: final3, alt: 'Gotowe zdjęcie katalogowe w kadrze trzy czwarte' },
]

export const metadata = {
  title: 'Camera Capture - automatyzacja fotografii produktowej',
  description:
    'Narzędzie w Pythonie do zautomatyzowanej fotografii produktowej: sterowanie aparatem Canon, lokalne usuwanie tła przez AI, kadrowanie i logo - gotowe zdjęcie katalogowe w 7 sekund.',
}

export default function Page() {
  return (
    <ProjectLayout title="Camera Capture" date="2026-07-31">
      <CoverImage
        image={cover}
        alt="Stanowisko do zdjęć produktowych: aparat Canon na statywie i laptop z uruchomionym narzędziem"
        priority
      />

      <h2>Camera Capture</h2>

      <Badges>
        <Badge tech="python" />
      </Badges>

      <p>
        Narzędzie do automatyzacji fotografii produktowej dla sklepu internetowego Trixbrix. Jedno
        wciśnięcie ENTER w&nbsp;terminalu: aparat Canon EOS M50 robi zdjęcie, AI lokalnie usuwa tło,
        produkt zostaje wyśrodkowany, w&nbsp;rogu pojawia się logo sklepu, a&nbsp;gotowy plik
        3000×3000 ląduje na dysku. Cały cykl trwa około siedmiu sekund - między zdjęciami wystarczy
        obrócić produkt na stoliku obrotowym.{' '}
        <a href="https://github.com/Xeross99/camera-capture" target="_blank" rel="noreferrer">
          Zobacz repo na GitHubie
        </a>
      </p>

      <h3>
        <SparkleIcon /> Jakie problemy rozwiązuje?
      </h3>

      <ul>
        <li>
          Każdy nowy produkt w&nbsp;sklepie potrzebuje zdjęć katalogowych - białe tło, wykadrowanie,
          logo. Ręczna obróbka partii produktów w&nbsp;Photoshopie zajmowała godziny, teraz to
          kwestia sekund
        </li>
        <li>
          Usuwanie tła działa w&nbsp;całości lokalnie na CPU - bez GPU, bez płatnych chmurowych API,
          zdjęcia nie opuszczają komputera
        </li>
        <li>Spójny format każdego zdjęcia: wyśrodkowany produkt, stały margines, wymiar 3000×3000</li>
        <li>
          Surowe zdjęcie z&nbsp;aparatu zapisuje się obok przetworzonego - jeśli automat się pomyli,
          oryginał czeka na dysku
        </li>
        <li>
          Opcjonalny upload prosto do panelu sklepu - galeria produktu aktualizuje się na żywo
          podczas sesji zdjęciowej
        </li>
      </ul>

      <h3>
        <SparkleIcon /> Zobacz w&nbsp;akcji
      </h3>

      <p>
        Po lewej surowe zdjęcie prosto z&nbsp;matrycy aparatu, po prawej to, co narzędzie zapisuje
        na dysku: 3000×3000, białe tło, wyśrodkowany produkt, logo. Trzy ujęcia z&nbsp;jednej
        sesji, która trwała około 20 sekund. Kliknij zdjęcie, żeby je powiększyć.
      </p>

      <div className="not-prose grid grid-cols-2 gap-x-4 gap-y-3">
        <p className="my-0 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
          Przed
        </p>
        <p className="my-0 text-center text-sm font-medium text-gray-500 dark:text-gray-400">Po</p>
        {gallery.map((photo) => (
          <div
            key={photo.alt}
            className="overflow-hidden rounded-xl bg-gray-50 ring-1 ring-gray-900/10 ring-inset dark:bg-gray-900 dark:ring-white/10"
          >
            <Zoom zoomMargin={16}>
              <Image
                src={photo.image}
                alt={photo.alt}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 18rem, 45vw"
              />
            </Zoom>
          </div>
        ))}
      </div>

      <h3>
        <SparkleIcon /> Technologie
      </h3>

      <ul>
        <li>Python 3.12 - cały pipeline</li>
        <li>python-gphoto2 - sterowanie aparatem Canon i&nbsp;pobieranie zdjęć przez USB</li>
        <li>rembg (model u2netp) + onnxruntime - lokalne usuwanie tła przez AI</li>
        <li>Pillow, numpy i&nbsp;scipy - maski, kadrowanie, wyostrzanie, nakładanie logo</li>
        <li>rich - interaktywny interfejs w&nbsp;terminalu</li>
        <li>requests + python-dotenv - opcjonalny upload do towarzyszącej aplikacji Rails</li>
      </ul>

      <h3>
        <SparkleIcon /> Jak wyglądała praca nad projektem?
      </h3>

      <p>
        Punktem wyjścia był konkretny, powtarzalny problem: każda partia nowych produktów
        w&nbsp;sklepie oznaczała sesję zdjęciową i&nbsp;długą, ręczną obróbkę w&nbsp;Photoshopie.
        Chciałem, żeby cała pętla - zdjęcie, obróbka, zapis - sprowadzała się do jednego klawisza.
      </p>

      <p>
        Najciekawszą częścią okazało się dopracowanie masek z&nbsp;modelu AI. Surowa maska łapała
        drobne artefakty - pyłki, krawędzie tła - więc filtruję je po powierzchni. Osobnym
        wyzwaniem były cienie prześwitujące przez otwory w&nbsp;produkcie: te rozjaśniam do bieli,
        ale sam produkt zostawiam nietknięty. Wyostrzanie działa selektywnie tylko na produkcie,
        nigdy na tle - dzięki temu wokół krawędzi nie pojawia się jasna obwódka, która zdradzałaby,
        że tło było wycinane.
      </p>

      <p>
        Pipeline pracuje na pełnej rozdzielczości matrycy (24 Mpix) w&nbsp;jednym przebiegu,
        z&nbsp;jednym finalnym skalowaniem, i&nbsp;działa w&nbsp;całości offline. Na koniec dodałem
        integrację z&nbsp;aplikacją Rails obsługującą katalog sklepu: zaraz po naciśnięciu migawki
        narzędzie zgłasza nowe zdjęcie do panelu sklepu (od razu pojawia się tam miejsce na nie),
        a&nbsp;po zakończeniu obróbki wysyła gotowy plik przez API - podgląd sesji w&nbsp;sklepie
        aktualizuje się na żywo.
      </p>
    </ProjectLayout>
  )
}

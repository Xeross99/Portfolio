import { Layout } from '@/components/Layout'
import { Article, CoverImage } from '@/components/Article'
import { Badge, Badges } from '@/components/Badge'
import { PhoneFrame } from '@/components/PhoneFrame'
import { ProjectLink } from '@/components/ProjectLink'
import { SparkleIcon } from '@/components/SparkleIcon'
import cameraCapture from '@/images/camera-capture.jpg'
import gigCoordinatorScreen from '@/images/gig-coordinator.png'
import trixbrix from '@/images/trixbrix.png'
import rokita from '@/images/rokita.png'
import magda from '@/images/magda.png'
import zdrowoAktywni from '@/images/zdrowoaktywni.png'
import pixelPicture from '@/images/pixelpicture.png'

export default function Page() {
  return (
    <Layout>
      <Article id="camera-capture" date="2026-07-31" type="app">
        <CoverImage
          image={cameraCapture}
          alt="Stanowisko do zdjęć produktowych: aparat Canon na ramieniu i laptop z uruchomioną aplikacją"
        />

        <h2>
          <a href="#camera-capture">Camera Capture</a>
        </h2>

        <Badges>
          <Badge tech="python" />
        </Badges>

        <p>
          Aplikacja desktopowa do automatyzacji fotografii produktowej dla
          sklepu internetowego. Na ekranie podgląd na żywo z&nbsp;aparatu Canon,
          a&nbsp;jedno wciśnięcie ENTER uruchamia cały cykl: zdjęcie, AI
          lokalnie usuwa tło, produkt zostaje wyśrodkowany, w&nbsp;rogu pojawia
          się logo sklepu, a&nbsp;gotowy plik 3000×3000 ląduje na dysku
          i&nbsp;w&nbsp;panelu sklepu. Cały cykl trwa około siedmiu sekund.
        </p>

        <h3>
          <SparkleIcon /> Jakie problemy rozwiązuje?
        </h3>

        <ul>
          <li>
            Zdjęcia katalogowe bez ręcznej obróbki w&nbsp;Photoshopie - godziny
            pracy zamienione na sekundy
          </li>
          <li>
            Podgląd na żywo z&nbsp;siatką - kadr widać przed zrobieniem zdjęcia
          </li>
          <li>
            Usuwanie tła działa lokalnie na CPU - bez płatnych chmurowych API
          </li>
          <li>
            Spójny format każdego zdjęcia: białe tło, wyśrodkowany produkt, logo
          </li>
          <li>
            Sesje i&nbsp;zdjęcia synchronizowane z&nbsp;panelem sklepu - galeria
            produktu aktualizuje się na żywo
          </li>
          <li>Działa na macOS i&nbsp;Windows</li>
        </ul>

        <ProjectLink href="/projekty/camera-capture" />
      </Article>

      <Article id="chicken-catchers" date="2026-05-10" type="app">
        <PhoneFrame
          image={gigCoordinatorScreen}
          alt="Aplikacja Chicken catchers na telefonie"
          className="mx-auto w-full max-w-[18rem]"
        />

        <h2>
          <a href="#chicken-catchers">Chicken catchers</a>
        </h2>

        <Badges>
          <Badge tech="rails" />
          <Badge tech="ruby" />
          <Badge tech="tailwind" />
          <Badge tech="expo" />
          <Badge tech="android" />
        </Badges>

        <p>
          Aplikacja do koordynowania jednorazowych zleceń w&nbsp;zespole.
          Organizator publikuje wydarzenie, pracownicy zapisują się jednym
          kliknięciem, a&nbsp;system sam pilnuje limitu miejsc, listy rezerwowej
          i&nbsp;pierwszeństwa zapisów - koniec z&nbsp;chaosem na grupowych
          czatach. Działa w&nbsp;przeglądarce jako PWA, a&nbsp;wersja mobilna
          zbudowana w&nbsp;Expo przechodzi testy w&nbsp;Google Play.
        </p>

        <h3>
          <SparkleIcon /> Jakie problemy rozwiązuje?
        </h3>

        <ul>
          <li>
            Koniec z&nbsp;kombinowaniem na grupowych czatach kto się zapisał,
            a&nbsp;kto nie
          </li>
          <li>
            Aplikacja sama informuje, gdy zwolni się miejsce - bez
            przeklikiwania
          </li>
          <li>
            Do wyboru: PWA w&nbsp;przeglądarce albo aplikacja mobilna
            z&nbsp;Google Play (na razie w&nbsp;wersji testowej)
          </li>
          <li>Logowanie kodem z&nbsp;maila zamiast wymyślania hasła</li>
        </ul>

        <ProjectLink href="/projekty/gig-coordinator" />
      </Article>

      <Article id="trixbrix" date="2026-03-24" type="sklep">
        <CoverImage image={trixbrix} alt="Sklep internetowy Trixbrix" />

        <h2>
          <a href="#trixbrix">Trixbrix</a>
        </h2>

        <Badges>
          <Badge tech="rails" />
          <Badge tech="ruby" />
          <Badge tech="tailwind" />
        </Badges>

        <p>
          Sklep internetowy dla producenta zaawansowanych torów kolejkowych
          kompatybilnych z&nbsp;LEGO, sprzedającego klientom na całym świecie.
          Setki produktów - tory, automatyka, gotowe zestawy i&nbsp;akcesoria -
          w&nbsp;sklepie, który musi działać szybko i&nbsp;sprzedawać
          w&nbsp;wielu walutach.
        </p>

        <h3>
          <SparkleIcon /> Jakie problemy rozwiązuje?
        </h3>

        <ul>
          <li>Wygodna nawigacja po dużym katalogu produktów</li>
          <li>
            Wyszukiwarka, która podpowiada jeszcze przed wpisaniem całej nazwy
          </li>
          <li>Obsługa wielu walut, bo klienci są z&nbsp;różnych krajów</li>
          <li>Cały sklep działa szybko nawet przy dużej liczbie produktów</li>
        </ul>

        <ProjectLink href="/projekty/trixbrix" />
      </Article>

      <Article id="pomoc-drogowa" date="2026-03-14" type="www">
        <CoverImage
          image={rokita}
          alt="Strona internetowa firmy pomocy drogowej"
        />

        <h2>
          <a href="#pomoc-drogowa">Pomoc drogowa i&nbsp;mechanika</a>
        </h2>

        <Badges>
          <Badge tech="nextjs" />
          <Badge tech="tailwind" />
        </Badges>

        <p>
          Strona internetowa dla firmy świadczącej pomoc drogową. Kierowca
          w&nbsp;nagłej sytuacji musi w&nbsp;kilka sekund znaleźć numer telefonu
          - najczęściej z&nbsp;komórki, nierzadko na słabym zasięgu. Dlatego
          strona jest błyskawiczna, zaprojektowana mobile-first
          i&nbsp;zoptymalizowana pod lokalne wyniki Google.
        </p>

        <h3>
          <SparkleIcon /> Jakie problemy rozwiązuje?
        </h3>

        <ul>
          <li>Numer telefonu widoczny od razu - bez szukania</li>
          <li>Ładuje się błyskawicznie, nawet na słabym zasięgu</li>
          <li>Mapa pokazuje zasięg działania firmy</li>
          <li>
            Strona pojawia się w&nbsp;Google, gdy ktoś szuka pomocy
            w&nbsp;okolicy
          </li>
        </ul>

        <ProjectLink href="/projekty/pomoc-drogowa" />
      </Article>

      <Article id="gabinet-psychologiczny" date="2025-07-31" type="www">
        <CoverImage
          image={magda}
          alt="Strona internetowa gabinetu psychologiczno-seksuologicznego"
        />

        <h2>
          <a href="#gabinet-psychologiczny">
            Gabinet psychologiczno-seksuologiczny
          </a>
        </h2>

        <Badges>
          <Badge tech="nextjs" />
          <Badge tech="tailwind" />
        </Badges>

        <p>
          Strona internetowa gabinetu psychologiczno-seksuologicznego. Projekt
          graficzny przygotował designer klientki, a&nbsp;moim zadaniem było
          wiernie przenieść go do szybkiej, działającej strony
          z&nbsp;formularzem zapisów i&nbsp;sekcją artykułów budujących zaufanie
          pacjentów.
        </p>

        <h3>
          <SparkleIcon /> Jakie problemy rozwiązuje?
        </h3>

        <ul>
          <li>
            Pacjenci zapisują się przez formularz, a&nbsp;klientka dostaje
            wszystkie zgłoszenia w&nbsp;jednym miejscu
          </li>
          <li>
            Sekcja z&nbsp;artykułami edukacyjnymi buduje zaufanie nowych
            odwiedzających
          </li>
          <li>Strona dokładnie oddaje projekt graficzny od designera</li>
        </ul>

        <ProjectLink href="/projekty/gabinet-psychologiczny" />
      </Article>

      <Article id="zdrowo-aktywni" date="2024-12-30" type="www">
        <CoverImage image={zdrowoAktywni} alt="Portal Zdrowo Aktywni" />

        <h2>
          <a href="#zdrowo-aktywni">Zdrowo Aktywni</a>
        </h2>

        <Badges>
          <Badge tech="nextjs" />
          <Badge tech="tailwind" />
        </Badges>

        <p>
          Portal o&nbsp;zdrowym stylu życia z&nbsp;blogiem, strefą współpracy
          dla firm i&nbsp;stroną kontaktową. Zaprojektowany tak, żeby czytelnicy
          łatwo trafiali do artykułów, a&nbsp;potencjalni partnerzy od razu
          wiedzieli, jak nawiązać współpracę.
        </p>

        <h3>
          <SparkleIcon /> Co jest na stronie?
        </h3>

        <ul>
          <li>Blog z&nbsp;artykułami o&nbsp;zdrowiu i&nbsp;aktywności</li>
          <li>Sekcja dla firm, które chcą nawiązać współpracę</li>
          <li>Strona kontaktowa</li>
        </ul>

        <ProjectLink href="/projekty/zdrowo-aktywni" />
      </Article>

      <Article id="pixel-picture" date="2023-07-01" type="sklep">
        <CoverImage
          image={pixelPicture}
          alt="Sklep internetowy Pixel Picture"
        />

        <h2>
          <a href="#pixel-picture">Pixel Picture</a>
        </h2>

        <Badges>
          <Badge tech="rails" />
          <Badge tech="ruby" />
          <Badge tech="tailwind" />
        </Badges>

        <p>
          Sklep internetowy z&nbsp;pełnym procesem zakupowym. Klient przegląda
          produkty, składa zamówienia i&nbsp;śledzi ich status,
          a&nbsp;właściciel sam prowadzi sklep z&nbsp;prostego panelu
          administracyjnego - bez pomocy programisty.
        </p>

        <h3>
          <SparkleIcon /> Jakie problemy rozwiązuje?
        </h3>

        <ul>
          <li>
            Cały proces zakupowy w&nbsp;jednym miejscu - od koszyka po historię
            zamówień
          </li>
          <li>
            Konto użytkownika z&nbsp;możliwością śledzenia statusu zamówienia
          </li>
          <li>
            Panel administracyjny, w&nbsp;którym łatwo dodać nowe produkty
            i&nbsp;zarządzać sklepem
          </li>
        </ul>

        <ProjectLink href="/projekty/pixel-picture" />
      </Article>
    </Layout>
  )
}

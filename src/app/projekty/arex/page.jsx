import { SparkleIcon } from '@/components/SparkleIcon'
import { ProjectLayout } from '@/components/ProjectLayout'
import { Badge, Badges } from '@/components/Badge'
import { ProjectTitle } from '@/components/ProjectTitle'
import { CoverImage } from '@/components/Article'
import arex from '@/images/arex.png'
import arexLogo from '@/images/arex-logo.png'

export const metadata = {
  title: 'PHU Arex - strona składu kruszyw i kostki brukowej',
  description:
    'Strona internetowa składu kruszyw i kostki brukowej PHU Arex z Pawłowic w Next.js - oferta w podstronach, galeria zdjęć z placu, widoczny telefon i lokalne SEO.',
}

export default function Page() {
  return (
    <ProjectLayout title="PHU Arex" date="2026-10-21">
      <CoverImage
        image={arex}
        alt="Strona internetowa składu kruszyw i kostki brukowej PHU Arex"
        priority
      />

      <ProjectTitle
        logo={arexLogo}
        href="https://arexbruk.pl"
        tagline={
          <>Strona składu kruszyw i&nbsp;kostki brukowej z&nbsp;Pawłowic</>
        }
      >
        PHU Arex
      </ProjectTitle>

      <Badges>
        <Badge tech="nextjs" />
        <Badge tech="tailwind" />
      </Badges>

      <p>
        Strona internetowa dla składu kruszyw i&nbsp;kostki brukowej
        z&nbsp;Pawłowic, który oferuje też roboty ziemne, układanie kostki
        i&nbsp;wynajem sprzętu z&nbsp;operatorem. Klient w&nbsp;jednym miejscu
        sprawdza, co jest na placu, jakim sprzętem dysponuje firma i&nbsp;dokąd
        dowozi materiał - a&nbsp;potem dzwoni jednym kliknięciem.{' '}
        <a href="https://arexbruk.pl" target="_blank" rel="noreferrer">
          Zobacz arexbruk.pl
        </a>
      </p>

      <h3>
        <SparkleIcon /> Jakie problemy rozwiązuje?
      </h3>

      <ul>
        <li>
          Cała oferta uporządkowana w&nbsp;podstronach: kruszywa, kostka,
          ceramika, kanalizacja, usługi i&nbsp;sprzęt
        </li>
        <li>
          Prawdziwe zdjęcia z&nbsp;placu i&nbsp;realizacji, powiększane jednym
          kliknięciem
        </li>
        <li>Numer telefonu i&nbsp;godziny otwarcia widoczne od razu</li>
        <li>
          Strona pojawia się w&nbsp;Google, gdy ktoś szuka kruszywa lub kostki
          w&nbsp;okolicy
        </li>
        <li>
          Szybko działa na telefonie, także na budowie przy słabym zasięgu
        </li>
      </ul>

      <h3>
        <SparkleIcon /> Technologie
      </h3>

      <ul>
        <li>Next.js - cała strona, wygenerowana jako statyczne pliki</li>
        <li>Tailwind CSS - wygląd i&nbsp;responsywność</li>
        <li>Motion - animacje i&nbsp;powiększanie zdjęć w&nbsp;galerii</li>
        <li>Zdjęcia w&nbsp;formacie WebP w&nbsp;kilku rozmiarach</li>
        <li>
          Dane strukturalne dla Google i&nbsp;optymalizacja pod lokalne SEO
        </li>
      </ul>

      <h3>
        <SparkleIcon /> Jak wyglądała praca nad projektem?
      </h3>

      <p>
        Firma ma bardzo szeroką ofertę - od ponad 20 rodzajów kruszyw, przez
        kostkę, ceramikę i&nbsp;kanalizację, po koparki, walce i&nbsp;wywrotki.
        Najwięcej pracy wymagało takie uporządkowanie tego asortymentu, żeby
        klient szybko trafił do tego, czego szuka. Każda grupa produktów dostała
        własną podstronę z&nbsp;kafelkami i&nbsp;zdjęciami.
      </p>

      <p>
        Zamiast zdjęć ze stocków strona pokazuje prawdziwy plac, sprzęt
        i&nbsp;wykonane podjazdy. Zdjęcia od klienta wybrałem, przyciąłem
        i&nbsp;przygotowałem tak, żeby ładowały się szybko także na telefonie.
        Treści i&nbsp;dane firmy ułożyłem pod lokalne wyszukiwania,
        a&nbsp;stronę przygotowałem do działania na zwykłym hostingu klienta.
      </p>
    </ProjectLayout>
  )
}

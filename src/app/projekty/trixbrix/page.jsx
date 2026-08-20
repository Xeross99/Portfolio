import { SparkleIcon } from '@/components/SparkleIcon'
import { ProjectLayout } from '@/components/ProjectLayout'
import { Badge, Badges } from '@/components/Badge'
import { CoverImage } from '@/components/Article'
import trixbrix from '@/images/trixbrix.png'

export const metadata = {
  title: 'Trixbrix - sklep internetowy z torami kompatybilnymi z LEGO',
  description:
    'Sklep internetowy w Ruby on Rails dla producenta torów kolejkowych kompatybilnych z LEGO - setki produktów, sprzedaż w wielu walutach i wyszukiwarka z podpowiedziami.',
}

export default function Page() {
  return (
    <ProjectLayout title="Trixbrix" date="2026-03-24">
      <CoverImage image={trixbrix} alt="Sklep internetowy Trixbrix" priority />

      <h2>Trixbrix</h2>

      <Badges>
        <Badge tech="rails" />
        <Badge tech="ruby" />
        <Badge tech="tailwind" />
      </Badges>

      <p>
        Sklep internetowy dla producenta zaawansowanych torów kolejkowych kompatybilnych
        z&nbsp;LEGO, sprzedającego klientom na całym świecie. Setki produktów - tory, automatyka,
        gotowe zestawy i&nbsp;akcesoria - w&nbsp;sklepie, który musi działać szybko
        i&nbsp;sprzedawać w&nbsp;wielu walutach.{' '}
        <a href="https://shop.trixbrix.eu" target="_blank" rel="noreferrer">
          Zobacz shop.trixbrix.eu
        </a>
      </p>

      <h3>
        <SparkleIcon /> Jakie problemy rozwiązuje?
      </h3>

      <ul>
        <li>Wygodna nawigacja po dużym katalogu produktów</li>
        <li>Wyszukiwarka, która podpowiada jeszcze przed wpisaniem całej nazwy</li>
        <li>Obsługa wielu walut, bo klienci są z&nbsp;różnych krajów</li>
        <li>Cały sklep działa szybko nawet przy dużej liczbie produktów</li>
      </ul>

      <h3>
        <SparkleIcon /> Technologie
      </h3>

      <ul>
        <li>Ruby on Rails - cały backend i&nbsp;logika sklepu</li>
        <li>Tailwind CSS - wygląd strony</li>
        <li>Hotwire - interaktywne elementy bez ciężkiego JavaScriptu</li>
      </ul>

      <h3>
        <SparkleIcon /> Jak wyglądała praca nad projektem?
      </h3>

      <p>
        Największym wyzwaniem była skala katalogu - przy setkach produktów nawigacja
        i&nbsp;wyszukiwarka muszą odpowiadać natychmiast. Dopracowałem podział na kategorie
        i&nbsp;dodałem wyszukiwarkę z&nbsp;podpowiedziami, która prowadzi klienta do właściwego
        produktu, zanim skończy wpisywać jego nazwę.
      </p>

      <p>
        Sklep sprzedaje klientom z&nbsp;całego świata, więc drugim ważnym tematem była obsługa
        wielu walut. Interfejs oparłem na Hotwire - strona reaguje jak aplikacja, ale bez ciężkiego
        JavaScriptu po stronie przeglądarki, co przekłada się na szybkie ładowanie nawet przy dużym
        katalogu produktów.
      </p>
    </ProjectLayout>
  )
}

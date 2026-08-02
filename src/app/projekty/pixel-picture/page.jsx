import { SparkleIcon } from '@/components/SparkleIcon'
import { ProjectLayout } from '@/components/ProjectLayout'
import { Badge, Badges } from '@/components/Badge'
import { CoverImage } from '@/components/Article'
import pixelPicture from '@/images/pixelpicture.png'

export const metadata = {
  title: 'Pixel Picture - sklep internetowy w Ruby on Rails',
  description:
    'Sklep internetowy w Ruby on Rails - koszyk, zamówienia, konta użytkowników ze śledzeniem statusu i panel administracyjny.',
}

export default function Page() {
  return (
    <ProjectLayout title="Pixel Picture" date="2023-07-01">
      <CoverImage image={pixelPicture} alt="Sklep internetowy Pixel Picture" priority />

      <h2>Pixel Picture</h2>

      <Badges>
        <Badge tech="rails" />
        <Badge tech="ruby" />
        <Badge tech="tailwind" />
      </Badges>

      <p>
        Sklep internetowy z&nbsp;pełnym procesem zakupowym. Klient przegląda produkty, składa
        zamówienia i&nbsp;śledzi ich status, a&nbsp;właściciel sam prowadzi sklep z&nbsp;prostego
        panelu administracyjnego - bez pomocy programisty.{' '}
        <a href="https://pixelpicture.eu" target="_blank" rel="noreferrer">
          Zobacz pixelpicture.eu
        </a>
      </p>

      <h3>
        <SparkleIcon /> Jakie problemy rozwiązuje?
      </h3>

      <ul>
        <li>Cały proces zakupowy w&nbsp;jednym miejscu - od koszyka po historię zamówień</li>
        <li>Konto użytkownika z&nbsp;możliwością śledzenia statusu zamówienia</li>
        <li>Panel administracyjny, w&nbsp;którym łatwo dodać nowe produkty i&nbsp;zarządzać sklepem</li>
      </ul>

      <h3>
        <SparkleIcon /> Technologie
      </h3>

      <ul>
        <li>Ruby on Rails - cały backend</li>
        <li>Tailwind CSS - wygląd strony</li>
        <li>SQLite - baza danych</li>
        <li>Stimulus.js - interaktywne elementy na froncie</li>
        <li>Kamal - deploy na serwer</li>
      </ul>

      <h3>
        <SparkleIcon /> Jak wyglądała praca nad projektem?
      </h3>

      <p>
        To projekt, w&nbsp;którym odpowiadałem za każdą warstwę aplikacji. Zaprojektowałem bazę
        danych i&nbsp;logikę zamówień, zbudowałem koszyk oraz konta użytkowników ze śledzeniem
        statusu zamówienia, a&nbsp;interaktywne elementy frontendu oparłem na Stimulusie.
      </p>

      <p>
        Osobnym kawałkiem pracy był panel administracyjny - właściciel sklepu sam dodaje produkty
        i&nbsp;obsługuje zamówienia, bez pomocy programisty. Całość wdrożyłem na serwer za pomocą
        Kamala, dzięki czemu kolejne wersje sklepu trafiają na produkcję jednym poleceniem.
      </p>
    </ProjectLayout>
  )
}

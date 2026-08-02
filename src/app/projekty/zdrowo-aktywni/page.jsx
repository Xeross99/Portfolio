import { SparkleIcon } from '@/components/SparkleIcon'
import { ProjectLayout } from '@/components/ProjectLayout'
import { Badge, Badges } from '@/components/Badge'
import { CoverImage } from '@/components/Article'
import zdrowoAktywni from '@/images/zdrowoaktywni.png'

export const metadata = {
  title: 'Zdrowo Aktywni - portal o zdrowym stylu życia',
  description:
    'Portal o zdrowym stylu życia w Next.js - blog z artykułami, strefa współpracy dla firm i strona kontaktowa.',
}

export default function Page() {
  return (
    <ProjectLayout title="Zdrowo Aktywni" date="2024-12-30">
      <CoverImage image={zdrowoAktywni} alt="Portal Zdrowo Aktywni" priority />

      <h2>Zdrowo Aktywni</h2>

      <Badges>
        <Badge tech="nextjs" />
        <Badge tech="tailwind" />
      </Badges>

      <p>
        Portal o&nbsp;zdrowym stylu życia z&nbsp;blogiem, strefą współpracy dla firm i&nbsp;stroną
        kontaktową. Zaprojektowany tak, żeby czytelnicy łatwo trafiali do artykułów,
        a&nbsp;potencjalni partnerzy od razu wiedzieli, jak nawiązać współpracę.{' '}
        <a href="https://zdrowo-aktywni.pl" target="_blank" rel="noreferrer">
          Zobacz zdrowo-aktywni.pl
        </a>
      </p>

      <h3>
        <SparkleIcon /> Co jest na stronie?
      </h3>

      <ul>
        <li>Blog z&nbsp;artykułami o&nbsp;zdrowiu i&nbsp;aktywności</li>
        <li>Sekcja dla firm, które chcą nawiązać współpracę</li>
        <li>Strona kontaktowa</li>
      </ul>

      <h3>
        <SparkleIcon /> Technologie
      </h3>

      <ul>
        <li>Next.js - cała strona</li>
        <li>Tailwind CSS - wygląd</li>
      </ul>

      <h3>
        <SparkleIcon /> Jak wyglądała praca nad projektem?
      </h3>

      <p>
        Najważniejsi na tej stronie są czytelnicy bloga, więc postawiłem na czytelny układ
        artykułów, prostą nawigację i&nbsp;szybkie ładowanie - tak, żeby nic nie stało między
        czytelnikiem a&nbsp;treścią.
      </p>

      <p>
        Osobno zaprojektowana strefa współpracy prowadzi firmy zainteresowane wspólnymi projektami
        prosto do kontaktu. Dzięki temu jedna strona pracuje jednocześnie na dwie grupy odbiorców:
        czytelników i&nbsp;partnerów biznesowych.
      </p>
    </ProjectLayout>
  )
}

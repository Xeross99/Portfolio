import { SparkleIcon } from '@/components/SparkleIcon'
import { ProjectLayout } from '@/components/ProjectLayout'
import { Badge, Badges } from '@/components/Badge'
import { CoverImage } from '@/components/Article'
import { ProjectTitle } from '@/components/ProjectTitle'
import magda from '@/images/magda.png'
import magdaLogo from '@/images/magda-logo.png'

export const metadata = {
  title: 'Gabinet psychologiczno-seksuologiczny - strona z zapisami online',
  description:
    'Strona internetowa gabinetu psychologicznego w Next.js - wierne odwzorowanie projektu graficznego, formularz zapisów i sekcja artykułów edukacyjnych.',
}

export default function Page() {
  return (
    <ProjectLayout title="Gabinet psychologiczno-seksuologiczny" date="2025-07-31">
      <CoverImage image={magda} alt="Strona internetowa gabinetu psychologiczno-seksuologicznego" priority />

      <ProjectTitle
        logo={magdaLogo}
        href="https://magdalenakuznik.pl"
        tagline={<>Strona gabinetu psychologa i&nbsp;seksuologa</>}
      >
        Gabinet psychologiczno-seksuologiczny
      </ProjectTitle>

      <Badges>
        <Badge tech="nextjs" />
        <Badge tech="tailwind" />
      </Badges>

      <p>
        Strona internetowa gabinetu psychologiczno-seksuologicznego. Projekt graficzny przygotował
        designer klientki, a&nbsp;moim zadaniem było wiernie przenieść go do szybkiej, działającej
        strony z&nbsp;formularzem zapisów i&nbsp;sekcją artykułów budujących zaufanie pacjentów.{' '}
        <a href="https://magdalenakuznik.pl" target="_blank" rel="noreferrer">
          Zobacz magdalenakuznik.pl
        </a>
      </p>

      <h3>
        <SparkleIcon /> Jakie problemy rozwiązuje?
      </h3>

      <ul>
        <li>
          Pacjenci zapisują się przez formularz, a&nbsp;klientka dostaje wszystkie zgłoszenia
          w&nbsp;jednym miejscu
        </li>
        <li>Sekcja z&nbsp;artykułami edukacyjnymi buduje zaufanie nowych odwiedzających</li>
        <li>Strona dokładnie oddaje projekt graficzny od designera</li>
      </ul>

      <h3>
        <SparkleIcon /> Technologie
      </h3>

      <ul>
        <li>Next.js - cała strona</li>
        <li>Tailwind CSS - wygląd</li>
        <li>Google Sheets - formularz zapisów wysyła dane prosto do arkusza klientki</li>
        <li>Vercel - hosting</li>
      </ul>

      <h3>
        <SparkleIcon /> Jak wyglądała praca nad projektem?
      </h3>

      <p>
        Dostałem od klientki gotowy projekt graficzny i&nbsp;moim zadaniem było odwzorować go co do
        piksela - tak, żeby efekt końcowy wyglądał dokładnie jak wizja designera, a&nbsp;przy tym
        działał szybko na każdym urządzeniu.
      </p>

      <p>
        Formularz zapisów zbudowałem tak, żeby zgłoszenia pacjentów trafiały prosto do arkusza
        Google klientki - bez dodatkowych systemów, logowania i&nbsp;abonamentów. Do tego doszła
        sekcja artykułów edukacyjnych, dzięki której klientka buduje zaufanie osób odwiedzających
        stronę po raz pierwszy.
      </p>
    </ProjectLayout>
  )
}

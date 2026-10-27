import { SparkleIcon } from '@/components/SparkleIcon'
import { ProjectLayout } from '@/components/ProjectLayout'
import { Badge, Badges } from '@/components/Badge'
import { CoverImage } from '@/components/Article'
import { ProjectTitle } from '@/components/ProjectTitle'
import rokita from '@/images/rokita.png'
import rokitaLogo from '@/images/rokita-logo.png'

export const metadata = {
  title: 'Pomoc drogowa i mechanika - szybka strona mobile-first',
  description:
    'Strona internetowa firmy pomocy drogowej w Next.js - błyskawiczne ładowanie na telefonie, widoczny numer telefonu, mapa zasięgu i lokalne SEO.',
}

export default function Page() {
  return (
    <ProjectLayout title="Pomoc drogowa i mechanika" date="2026-03-14">
      <CoverImage image={rokita} alt="Strona internetowa firmy pomocy drogowej" priority />

      <ProjectTitle
        logo={rokitaLogo}
        href="https://rokita-pomocdrogowa24.pl"
        tagline={<>Strona pomocy drogowej i&nbsp;warsztatu mechanicznego</>}
      >
        Pomoc drogowa i&nbsp;mechanika
      </ProjectTitle>

      <Badges>
        <Badge tech="nextjs" />
        <Badge tech="tailwind" />
      </Badges>

      <p>
        Strona internetowa dla firmy świadczącej pomoc drogową. Kierowca w&nbsp;nagłej sytuacji
        musi w&nbsp;kilka sekund znaleźć numer telefonu - najczęściej z&nbsp;komórki, nierzadko na
        słabym zasięgu. Dlatego strona jest błyskawiczna, zaprojektowana mobile-first
        i&nbsp;zoptymalizowana pod lokalne wyniki Google.{' '}
        <a href="https://rokita-pomocdrogowa24.pl" target="_blank" rel="noreferrer">
          Zobacz rokita-pomocdrogowa24.pl
        </a>
      </p>

      <h3>
        <SparkleIcon /> Jakie problemy rozwiązuje?
      </h3>

      <ul>
        <li>Numer telefonu widoczny od razu - bez szukania</li>
        <li>Ładuje się błyskawicznie, nawet na słabym zasięgu</li>
        <li>Mapa pokazuje zasięg działania firmy</li>
        <li>Strona pojawia się w&nbsp;Google, gdy ktoś szuka pomocy w&nbsp;okolicy</li>
      </ul>

      <h3>
        <SparkleIcon /> Technologie
      </h3>

      <ul>
        <li>Next.js - cała strona</li>
        <li>Tailwind CSS - wygląd i&nbsp;responsywność</li>
        <li>Mapa Google - lokalizacja firmy</li>
        <li>Optymalizacja pod lokalne SEO</li>
      </ul>

      <h3>
        <SparkleIcon /> Jak wyglądała praca nad projektem?
      </h3>

      <p>
        Punktem wyjścia był konkretny scenariusz: kierowca stoi na poboczu z&nbsp;telefonem
        w&nbsp;ręce i&nbsp;potrzebuje pomocy natychmiast. Dlatego numer telefonu jest widoczny od
        razu po wejściu jako klikalny przycisk, a&nbsp;strona ładuje się błyskawicznie nawet na
        słabym zasięgu - bez zbędnych skryptów i&nbsp;ciężkich grafik.
      </p>

      <p>
        Drugą częścią pracy było lokalne SEO. Uporządkowałem strukturę treści, opisy usług
        i&nbsp;dane firmy tak, żeby strona pojawiała się w&nbsp;Google, gdy ktoś szuka pomocy
        drogowej w&nbsp;okolicy, a&nbsp;osadzona mapa od razu pokazuje zasięg działania firmy.
      </p>
    </ProjectLayout>
  )
}

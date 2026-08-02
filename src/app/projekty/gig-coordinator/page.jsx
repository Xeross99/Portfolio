import { SparkleIcon } from '@/components/SparkleIcon'
import { ProjectLayout } from '@/components/ProjectLayout'
import { Badge, Badges } from '@/components/Badge'
import { PhoneFrame } from '@/components/PhoneFrame'
import gigCoordinatorScreen from '@/images/gig-coordinator.png'

export const metadata = {
  title: 'Chicken catchers - aplikacja do koordynacji zleceń',
  description:
    'Aplikacja do koordynowania jednorazowych zleceń w zespole - PWA w Ruby on Rails i wersja mobilna w Expo. Zapisy jednym kliknięciem, lista rezerwowa, priorytety i powiadomienia push.',
}

export default function Page() {
  return (
    <ProjectLayout title="Chicken catchers" date="2026-05-10">
      <PhoneFrame
        image={gigCoordinatorScreen}
        alt="Aplikacja Chicken catchers na telefonie"
        className="mx-auto w-full max-w-[18rem]"
        priority
      />

      <h2>Chicken catchers</h2>

      <Badges>
        <Badge tech="rails" />
        <Badge tech="ruby" />
        <Badge tech="tailwind" />
        <Badge tech="expo" />
        <Badge tech="android" />
      </Badges>

      <p>
        Aplikacja do koordynowania jednorazowych zleceń w&nbsp;zespole. Organizator publikuje
        wydarzenie, pracownicy zapisują się jednym kliknięciem, a&nbsp;system sam pilnuje limitu
        miejsc, listy rezerwowej i&nbsp;pierwszeństwa zapisów - koniec z&nbsp;chaosem na grupowych
        czatach. Działa w&nbsp;przeglądarce jako PWA, a&nbsp;wersja mobilna zbudowana w&nbsp;Expo
        przechodzi testy w&nbsp;Google Play.
      </p>

      <h3>
        <SparkleIcon /> Jakie problemy rozwiązuje?
      </h3>

      <ul>
        <li>Koniec z&nbsp;kombinowaniem na grupowych czatach kto się zapisał, a&nbsp;kto nie</li>
        <li>Aplikacja sama informuje, gdy zwolni się miejsce - bez przeklikiwania</li>
        <li>
          Do wyboru: PWA w&nbsp;przeglądarce albo aplikacja mobilna z&nbsp;Google Play (na razie
          w&nbsp;wersji testowej)
        </li>
        <li>Logowanie kodem z&nbsp;maila zamiast wymyślania hasła</li>
        <li>Najwyższe rangi dostają godzinowe pierwszeństwo, zanim slot pójdzie dalej</li>
      </ul>

      <h3>
        <SparkleIcon /> Technologie
      </h3>

      <ul>
        <li>Ruby on Rails 8.1 - backend</li>
        <li>Hotwire (Turbo, Stimulus) - interaktywny frontend bez frameworka JavaScript</li>
        <li>Tailwind CSS v4 - wygląd</li>
        <li>SQLite z&nbsp;Solid Queue / Cache / Cable - baza, kolejka zadań, cache, websockety</li>
        <li>Web Push API - powiadomienia push na telefonie</li>
        <li>PWA z&nbsp;service workerem - instalowalna aplikacja, działa offline</li>
        <li>Expo (React Native) - wersja mobilna, w&nbsp;Google Play jako zamknięta wersja testowa</li>
        <li>Kamal - deploy na własny serwer</li>
      </ul>

      <h3>
        <SparkleIcon /> Jak wyglądała praca nad projektem?
      </h3>

      <p>
        Projekt zaczął się od konkretnego problemu - koordynacja jednorazowych zleceń
        w&nbsp;grupie ludzi, gdzie liczy się szybkość zapisu i&nbsp;sprawiedliwy podział miejsc.
        Cały interfejs zaprojektowałem pod telefon, bo realnie wszyscy używają tego z&nbsp;komórki
        w&nbsp;drodze.
      </p>

      <p>
        Jednym z&nbsp;większych wyzwań było logowanie. Pierwsza wersja używała magic-linków
        z&nbsp;maila, ale kliknięty link otwierał systemową przeglądarkę zamiast zainstalowanej
        aplikacji - przez co użytkownik logował się „nie tam, gdzie trzeba” i&nbsp;sesja się
        gubiła. Wymieniłem to na 5-cyfrowy kod, który użytkownik wpisuje ręcznie w&nbsp;aplikacji -
        sesja zostaje tam, gdzie powinna.
      </p>

      <p>
        Drugim ciekawym kawałkiem była logika zapisów. Liczba miejsc musi się zgadzać nawet wtedy,
        gdy kilka osób kliknie „zapisz” w&nbsp;tej samej sekundzie. Rozwiązałem to blokadami
        w&nbsp;bazie danych, a&nbsp;system priorytetowych zaproszeń dla wyższych rang ma godzinny
        deadline - jeśli ktoś nie odpowie, slot wraca do puli i&nbsp;mogą go zająć inni.
      </p>

      <p>
        Równolegle z&nbsp;wersją webową powstała aplikacja mobilna w&nbsp;Expo (React Native),
        korzystająca z&nbsp;tego samego backendu. Jest już w&nbsp;Google Play jako zamknięta wersja
        testowa i&nbsp;przechodzi testy z&nbsp;prawdziwymi użytkownikami przed publicznym wydaniem.
      </p>
    </ProjectLayout>
  )
}

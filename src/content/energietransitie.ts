import type { Island } from '../types';

// Peildatum cijfers/beleid: juni 2026 (geverifieerd via Rijksoverheid, PBL, CBS,
// Netbeheer Nederland, Milieu Centraal). Beleid verandert jaarlijks — herijk bij update.
export const energietransitie: Island = {
  id: 'energietransitie',
  title: 'Energietransitie NL',
  blurb: 'Van het gas af, zon & wind, en het volle stroomnet — hoe het echt zit.',
  icon: '⚡',
  color: '#14b8a6',
  pos: { x: 50, y: 28 },
  topics: [
    {
      id: 'basis',
      title: 'De basis',
      orbs: [
        {
          id: 'e-1',
          title: 'Waarom de transitie? De klimaatdoelen',
          body:
            'De energietransitie is de omschakeling van fossiele brandstoffen (aardgas, olie, kolen) naar duurzame energie, om de uitstoot van broeikasgassen — en daarmee de opwarming van de aarde — te beperken. In Nederland is dit wettelijk vastgelegd in de **Klimaatwet**.\n\nDe doelen: **minstens 55% minder broeikasgassen in 2030** ten opzichte van 1990, en **klimaatneutraal in 2050** (netto geen uitstoot meer). Het kabinet hanteert daarnaast een streven van 90% reductie in 2040 als tussenstap, maar dat is (peildatum 2026) nog geen vaststaand wettelijk doel.\n\nEerlijk is eerlijk: volgens de Klimaat- en Energieverkenning 2025 van het PBL gaat Nederland het **2030-doel vrijwel zeker niet halen** — de kans is kleiner dan 5%. Met huidig en voorgenomen beleid komt de reductie rond 2030 uit op zo\'n 47 tot bijna 55%, en wordt de 55% naar verwachting pas rond 2035 bereikt. De richting is duidelijk, het tempo is de uitdaging.',
          glossary: [
            { term: 'Klimaatwet', def: 'Nederlandse wet met de klimaatdoelen: 55% minder in 2030, klimaatneutraal in 2050.' },
            { term: 'Klimaatneutraal', def: 'Netto geen broeikasgasuitstoot meer (wat resteert wordt gecompenseerd/vastgelegd).' },
          ],
          priming: 'Denk je dat Nederland zijn klimaatdoel voor 2030 op tijd haalt?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is het wettelijke broeikasgasdoel voor 2030 (t.o.v. 1990)?',
              options: ['25% minder', 'Minstens 55% minder', '100% minder', '10% minder'],
              correct: 1,
              explain: 'De Klimaatwet: minstens 55% reductie in 2030, klimaatneutraal in 2050.',
            },
            {
              type: 'truefalse',
              prompt: 'Volgens het PBL haalt Nederland het 2030-doel vrijwel zeker niet op tijd.',
              answer: true,
              explain: 'De KEV 2025 schat de kans <5%; de 55% wordt eerder rond 2035 bereikt.',
            },
          ],
          summary: [
            'Klimaatwet: ≥55% minder broeikasgas in 2030, klimaatneutraal in 2050.',
            '2040-doel (90%) is een streven, nog geen vaststaande wet.',
            'PBL: 2030-doel wordt vrijwel zeker niet gehaald (~47-55%, pas ~2035 op niveau).',
          ],
          sources: [
            { label: 'Rijksoverheid — Klimaatverandering beperken', url: 'https://www.rijksoverheid.nl/themas/klimaat-milieu-en-natuur/klimaatverandering/klimaatverandering-beperken' },
            { label: 'PBL/RIVM — KEV 2025', url: 'https://www.rivm.nl/nieuws/klimaat-en-energieverkenning-2025-kans-op-halen-klimaatdoel-2030-heel-erg-klein' },
          ],
        },
        {
          id: 'e-2',
          title: 'Van het aardgas af',
          body:
            'Nederland warmt zijn huizen al decennia vooral met **aardgas** — onze grootste bron van CO2 in de gebouwde omgeving, en sinds Groningen ook politiek beladen. De transitie wil daar vanaf. Sinds **1 juli 2018** krijgen nieuwbouwwoningen daarom standaard **geen gasaansluiting** meer.\n\nVoor de miljoenen bestaande woningen geldt een **wijkgerichte aanpak**: de gemeente bepaalt per wijk wat het beste alternatief is. In dichtbebouwd gebied is dat vaak een **warmtenet** (restwarmte van industrie of een centrale bron), elders **all-electric** met een warmtepomp. Het gaat stap voor stap; niemand hoeft van de ene op de andere dag van het gas af.\n\nDe gouden volgorde is: **isoleren eerst**. Een goed geïsoleerd huis heeft veel minder warmte nodig, waardoor een warmtepomp of lagere temperatuur überhaupt werkt en je energierekening daalt. Pas daarna zijn de duurzame warmtebronnen logisch. "Eerst de schil, dan de installatie" is de vuistregel die je overal terughoort.',
          glossary: [
            { term: 'Wijkgerichte aanpak', def: 'Gemeenten bepalen per wijk het alternatief voor aardgas (warmtenet of all-electric).' },
            { term: 'Warmtenet', def: 'Leidingnet dat (rest)warmte naar woningen brengt; vaak in dichtbebouwd gebied.' },
            { term: 'Isoleren eerst', def: 'Eerst de woning isoleren ("de schil"), daarna pas de warmte-installatie.' },
          ],
          priming: 'Wat zou je het eerst aanpakken als je je huis van het gas af wilt halen?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is de slimste eerste stap bij verduurzamen van een woning?',
              options: ['Meteen een warmtepomp kopen', 'Isoleren ("de schil")', 'Zonnepanelen', 'Een grotere cv-ketel'],
              correct: 1,
              explain: 'Isoleren eerst: minder warmtevraag maakt alle vervolgstappen effectiever.',
            },
            {
              type: 'truefalse',
              prompt: 'Nieuwbouwwoningen krijgen sinds 2018 standaard geen gasaansluiting meer.',
              answer: true,
              explain: 'Sinds 1 juli 2018; bestaande wijken volgen via de wijkgerichte aanpak.',
            },
          ],
          summary: [
            'Aardgas eruit: nieuwbouw zonder gas sinds 1 juli 2018.',
            'Bestaande wijken: wijkgerichte aanpak (warmtenet of all-electric).',
            'Volgorde: eerst isoleren, dan duurzame warmtebron.',
          ],
          sources: [
            { label: 'Rijksoverheid — Duurzame warmtebronnen', url: 'https://www.rijksoverheid.nl/onderwerpen/duurzame-energie/duurzame-warmtebronnen' },
            { label: 'RVO — Aardgasvrij', url: 'https://www.rvo.nl/onderwerpen/aardgasvrij' },
          ],
        },
        {
          id: 'e-3',
          title: 'Zon & wind',
          body:
            'Duurzame elektriciteit komt in Nederland vooral van **zon en wind**. De groei gaat hard: eind 2024 stond er ruim **25 gigawatt aan zonnevermogen** en bijna **12 gigawatt wind** opgesteld, met wind op zee als snelste groeier.\n\nEen belangrijk onderscheid dat vaak verward wordt: het aandeel hernieuwbaar in de **totale energie** (inclusief warmte en verkeer) is iets anders dan in alleen **elektriciteit**. In 2024 kwam **19,8% van alle energie** uit hernieuwbare bronnen — maar van de **elektriciteit** was al **ongeveer de helft** duurzaam. Stroom vergroenen lukt dus sneller dan warmte en transport.\n\nZon en wind hebben één eigenschap die alles bepaalt: ze zijn **weersafhankelijk**. Op een zonnige, winderige dag is er stroom in overvloed; \'s avonds bij windstilte juist weinig. Die schommeling — en niet zozeer de hoeveelheid — is de grote uitdaging van de transitie. Het verklaart waarom netcongestie en opslag (de volgende orbs) zo belangrijk zijn geworden.',
          glossary: [
            { term: 'Gigawatt (GW)', def: 'Maat voor opgesteld vermogen; eind 2024 ~25 GW zon en ~12 GW wind in NL.' },
            { term: 'Aandeel hernieuwbaar', def: '2024: ~20% van álle energie, maar ~50% van de elektriciteit.' },
            { term: 'Weersafhankelijk', def: 'Zon/wind leveren wisselend; die schommeling is dé uitdaging.' },
          ],
          priming: 'Wat is lastiger aan zon en wind: de hoeveelheid energie, of iets anders?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat klopt over hernieuwbare energie in Nederland (2024)?',
              options: [
                '~50% van alle energie is hernieuwbaar',
                '~20% van alle energie, maar ~50% van de elektriciteit',
                'Bijna alles is al hernieuwbaar',
                'Vrijwel niets is hernieuwbaar',
              ],
              correct: 1,
              explain: 'Onderscheid: ~20% van de totale energie, ~50% van de elektriciteit.',
            },
            {
              type: 'truefalse',
              prompt: 'De grootste uitdaging van zon en wind is hun weersafhankelijke schommeling.',
              answer: true,
              explain: 'Niet de hoeveelheid maar de wisselvalligheid maakt opslag en net cruciaal.',
            },
          ],
          summary: [
            'Eind 2024: ~25 GW zon en ~12 GW wind; wind op zee groeit het hardst.',
            '2024: ~20% van alle energie hernieuwbaar, ~50% van de elektriciteit.',
            'Zon/wind zijn weersafhankelijk — die schommeling is de kernuitdaging.',
          ],
          sources: [
            { label: 'CBS — Hernieuwbare energie 2024 (~20%)', url: 'https://www.cbs.nl/nl-nl/nieuws/2025/23/energieverbruik-uit-hernieuwbare-bronnen-stijgt-naar-20-procent' },
            { label: 'CBS — Helft elektriciteit hernieuwbaar', url: 'https://www.cbs.nl/nl-nl/nieuws/2025/11/helft-elektriciteitsproductie-uit-hernieuwbare-bronnen' },
          ],
        },
      ],
    },
    {
      id: 'praktisch',
      title: 'Praktijk & knelpunten',
      orbs: [
        {
          id: 'e-4',
          title: 'Je huis verduurzamen',
          body:
            'Verduurzamen begint, zoals gezegd, met **isoleren**: dak, muren, glas en kieren. Daarna pas de warmte-installatie, meestal een **(hybride) warmtepomp**. Hiervoor bestaat de **ISDE-subsidie** (via RVO), die globaal zo\'n 30% van de kosten dekt voor warmtepompen, zonneboilers en isolatie. Let op: de eerder aangekondigde **verplichting** om vanaf 2026 bij cv-vervanging hybride te gaan, is **geschrapt** — je mag gewoon nog een cv-ketel plaatsen.\n\nVoor zonnepanelen is er één grote verandering om te kennen: de **salderingsregeling stopt in één keer per 1 januari 2027**. Tot die tijd mag je je opgewekte stroom nog volledig wegstrepen tegen je verbruik. Vanaf 2027 krijg je voor teruggeleverde stroom een **terugleververgoeding** van je leverancier (tot 2030 minstens 50% van het kale leveringstarief). Zonnepanelen blijven rendabel, maar het wordt aantrekkelijker om je stroom **zelf direct te gebruiken**.\n\nVuistregel voor de meeste huishoudens: isoleren is bijna altijd de slimste eerste investering, zonnepanelen blijven de moeite waard, en kijk goed naar actuele subsidies via RVO voordat je beslist.',
          glossary: [
            { term: 'ISDE', def: 'Subsidie (via RVO) voor warmtepomp, zonneboiler en isolatie; globaal ~30% van de kosten.' },
            { term: 'Saldering stopt 2027', def: 'Vanaf 1-1-2027 geen wegstrepen meer; wel een terugleververgoeding (tot 2030 ≥50% kaal tarief).' },
            { term: 'Hybride warmtepomp', def: 'Warmtepomp naast een cv-ketel; de verplichting hiertoe per 2026 is geschrapt.' },
          ],
          priming: 'Verandert er iets aan of zonnepanelen nog lonen — en wanneer?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat gebeurt er met de salderingsregeling?',
              options: [
                'Hij wordt geleidelijk afgebouwd tot 2031',
                'Hij stopt in één keer per 1 januari 2027',
                'Hij blijft ongewijzigd',
                'Hij is al afgeschaft',
              ],
              correct: 1,
              explain: 'Geen geleidelijke afbouw: harde stop per 1-1-2027, daarna een terugleververgoeding.',
            },
            {
              type: 'truefalse',
              prompt: 'De verplichting om vanaf 2026 bij cv-vervanging een (hybride) warmtepomp te nemen, is geschrapt.',
              answer: true,
              explain: 'Die verplichting bestaat niet; ISDE-subsidie voor warmtepompen blijft wel.',
            },
          ],
          summary: [
            'Isoleren eerst; daarna (hybride) warmtepomp met ISDE-subsidie (~30%, via RVO).',
            'Warmtepomp-verplichting per 2026 is geschrapt.',
            'Saldering stopt per 1-1-2027; daarna terugleververgoeding — eigen verbruik wordt aantrekkelijker.',
          ],
          sources: [
            { label: 'Rijksoverheid — Salderingsregeling stopt in 2027', url: 'https://www.rijksoverheid.nl/themas/klimaat-milieu-en-natuur/energie-thuis/salderingsregeling' },
            { label: 'RVO — ISDE', url: 'https://www.rvo.nl/subsidies-financiering/isde' },
          ],
        },
        {
          id: 'e-5',
          title: 'Netcongestie: het volle stroomnet',
          body:
            'De grootste rem op de transitie is op dit moment niet de hoeveelheid groene stroom, maar het **stroomnet** zelf. In een groot deel van Nederland zit het net zo goed als **vol**: er is geen ruimte meer om extra elektriciteit te transporteren. Dit heet **netcongestie**.\n\nDe gevolgen zijn concreet. Inmiddels staan zo\'n **15.000 grootverbruikers** (bedrijven, laadpleinen, nieuwe woonwijken) op een **wachtlijst** voor een zwaardere aansluiting, met wachttijden die per regio oplopen tot 5 à 10 jaar. En **vanaf 1 juli 2026** kunnen ook kleinverbruikers (huishoudens) op zo\'n wachtlijst komen. Het raakt dus iedereen.\n\nDe oorzaak is dat vraag én aanbod tegelijk hard groeien: elektrische auto\'s, warmtepompen en elektrificerende industrie trekken meer stroom, terwijl zon en wind juist veel terugleveren — en dat alles veroorzaakt **pieken** die het net niet aankan. Netuitbreiding kost tijd en mensen; netbeheerders investeren tot 2030 samen ruim **100 miljard euro** in verzwaring. Tot die tijd is slimmer omgaan met de pieken (volgende orb) noodzaak.',
          glossary: [
            { term: 'Netcongestie', def: 'Het stroomnet zit vol; er is geen transportruimte meer voor extra elektriciteit.' },
            { term: 'Wachtlijst', def: '~15.000 grootverbruikers wachten op aansluiting; vanaf 1 juli 2026 ook kleinverbruikers.' },
          ],
          priming: 'Wat is op dit moment de grootste rem op de energietransitie, denk je?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is de kern van netcongestie?',
              options: [
                'Er is te weinig groene stroom',
                'Het stroomnet zit vol; geen ruimte om stroom te transporteren',
                'Stroom is te duur',
                'Te weinig zonnepanelen',
              ],
              correct: 1,
              explain: 'Het transportnet is vol — vraag én aanbod groeien sneller dan de netuitbreiding.',
            },
            {
              type: 'truefalse',
              prompt: 'Vanaf 1 juli 2026 kunnen ook huishoudens (kleinverbruikers) op een wachtlijst komen.',
              answer: true,
              explain: 'Netcongestie raakt niet alleen grootverbruikers meer.',
            },
          ],
          summary: [
            'Netcongestie: het stroomnet zit vol, geen transportruimte over.',
            '~15.000 grootverbruikers op wachtlijst; vanaf 1-7-2026 ook kleinverbruikers.',
            'Oorzaak: vraag + aanbod groeien sneller dan netuitbreiding (~€100 mld tot 2030).',
          ],
          sources: [
            { label: 'Rijksoverheid — Maatregelen tegen netcongestie', url: 'https://www.rijksoverheid.nl/themas/klimaat-milieu-en-natuur/duurzame-energie/kabinet-neemt-maatregelen-tegen-vol-elektriciteitsnet-netcongestie' },
            { label: 'Netbeheer Nederland — nieuwe werkwijze stroomaanvragen', url: 'https://www.netbeheernederland.nl/artikelen/nieuws/zo-werkt-het-nieuwe-werkwijze-voor-stroomaanvragen-vanaf-1-juli' },
          ],
        },
        {
          id: 'e-6',
          title: 'Flexibiliteit & opslag',
          body:
            'Als de pieken het probleem zijn, dan is **flexibiliteit** de oplossing: stroom gebruiken wanneer hij er is, en opslaan voor wanneer hij er niet is. Daar draait de volgende fase van de transitie om.\n\nEen zichtbaar voorbeeld is het **dynamische energiecontract**, waarbij de prijs per uur meebeweegt met vraag en aanbod. Op zonnige, winderige momenten is stroom spotgoedkoop — soms zelfs **negatieve prijzen** (sinds 2024 op tientallen uren per jaar, en toenemend), waarbij je betaald krijgt om te verbruiken óf juist moet betalen om terug te leveren. Slim je auto laden of wasmachine draaien op die momenten loont dan. Veel leveranciers rekenen sinds 2024-2025 ook **terugleverkosten** voor zonnepaneelbezitters; de toezichthouder ACM heeft geoordeeld dat dat mag.\n\nOpslag — van **thuisbatterijen** tot grote buurtbatterijen — kan pieken opvangen, maar let op: voor een gemiddeld huishouden is een thuisbatterij (peildatum 2026) vaak **nog niet rendabel**; de besparing weegt meestal niet op tegen de aanschaf. Dat kan snel veranderen. De kern: de transitie gaat steeds minder over méér opwekken, en steeds meer over **slim afstemmen** van vraag, aanbod en opslag.',
          glossary: [
            { term: 'Dynamisch contract', def: 'Energieprijs per uur; goedkoop bij veel zon/wind, duur bij schaarste.' },
            { term: 'Negatieve prijzen', def: 'Bij overschot kan de stroomprijs onder nul zakken (sinds 2024, toenemend).' },
            { term: 'Thuisbatterij', def: 'Slaat stroom op; voor een gemiddeld huishouden (2026) vaak nog niet rendabel.' },
          ],
          priming: 'Als er soms te veel en soms te weinig stroom is — wat is dan de slimste oplossing?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Waar draait de volgende fase van de transitie vooral om?',
              options: [
                'Steeds méér opwekken',
                'Vraag, aanbod en opslag slim op elkaar afstemmen',
                'Terug naar gas',
                'Minder stroom gebruiken en verder niets',
              ],
              correct: 1,
              explain: 'Flexibiliteit: gebruiken/opslaan wanneer er stroom is — niet alleen meer opwekken.',
            },
            {
              type: 'truefalse',
              prompt: 'Een thuisbatterij is voor een gemiddeld huishouden (2026) vaak nog niet rendabel.',
              answer: true,
              explain: 'Volgens Milieu Centraal weegt de besparing meestal nog niet op tegen de aanschaf.',
            },
          ],
          summary: [
            'Flexibiliteit: stroom gebruiken/opslaan wanneer hij er is.',
            'Dynamische contracten + negatieve prijzen belonen slim verbruik; let op terugleverkosten.',
            'Thuisbatterij is voor de gemiddelde woning (2026) vaak nog niet rendabel.',
          ],
          sources: [
            { label: 'Milieu Centraal — Zonnestroom als saldering stopt', url: 'https://www.milieucentraal.nl/energie-besparen/zonnepanelen/zonnestroom-als-de-saldering-stopt-dit-moet-je-weten/' },
            { label: 'ACM — Energierekening & terugleverkosten', url: 'https://www.acm.nl/nl/onderwerpen/energie/stroom-en-gas/energierekening' },
          ],
        },
      ],
    },
  ],
};

import type { Island } from '../types';

export const vaderschap: Island = {
  id: 'vaderschap',
  title: 'Vaderschap & baby',
  blurb: 'De eerste weken met je dochter — praktisch én mentaal.',
  icon: '👶',
  color: '#38bdf8',
  pos: { x: 70, y: 26 },
  topics: [
    {
      id: 'eerste-weken',
      title: 'Eerste weken',
      orbs: [
        {
          id: 'v-e-1',
          title: 'Slaap van een pasgeborene',
          body:
            'Een pasgeborene slaapt veel — zo\'n 14 tot 17 uur per etmaal — maar in **korte brokken** van twee tot vier uur, dag en nacht door elkaar. Dat komt doordat een baby nog geen **dag-nachtritme** heeft; dat ontwikkelt zich geleidelijk, meestal vanaf zo\'n zes tot acht weken, en is bij veel baby\'s pas rond drie maanden echt duidelijk.\n\nBaby\'s hebben ook veel **actieve slaap** (lichte slaap met bewegende oogjes, schokjes, geluidjes). Dat ziet er onrustig uit, maar het is normaal — niet meteen oppakken loont, vaak zakken ze vanzelf weer weg. Pas oppakken als ze echt wakker worden en honger of ongemak signaleren.\n\nVoor jou en Do betekent dit: reken níét op een hele nacht door, maar op een ritme van voeden-verschonen-slapen rond de klok. De truc is meebewegen met die cycli in plaats van ertegen vechten. Slaap als de baby slaapt, ook overdag. Het wordt beter — het ongestructureerde begin is tijdelijk en hoort erbij.',
          glossary: [
            { term: 'Dag-nachtritme', def: 'Het onderscheid tussen wakker overdag en slapen \'s nachts; ontwikkelt zich pas na weken.' },
            { term: 'Actieve slaap', def: 'Lichte slaapfase met bewegingen en geluidjes; normaal, niet meteen ingrijpen.' },
          ],
          priming: 'Waarom zou een pasgeborene \'s nachts net zo vaak wakker worden als overdag?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wanneer ontwikkelt een baby grofweg een dag-nachtritme?',
              options: ['Vanaf de geboorte', 'Rond 6-8 weken', 'Pas na een jaar', 'Nooit vanzelf'],
              correct: 1,
              explain: 'De eerste weken slaapt een baby rond de klok; het ritme komt meestal rond 6-8 weken.',
            },
            {
              type: 'truefalse',
              prompt: 'Geluidjes en bewegingen tijdens de slaap betekenen altijd dat de baby wakker is.',
              answer: false,
              explain: 'Dat is actieve (lichte) slaap; vaak zakken ze vanzelf weer weg.',
            },
          ],
          summary: [
            'Pasgeborenen slapen veel, maar in korte brokken dag én nacht.',
            'Dag-nachtritme komt geleidelijk op gang, meestal vanaf 6-8 weken.',
            'Beweeg mee met de cycli; slaap als de baby slaapt.',
          ],
          sources: [
            { label: 'Stichting Wiegedood / JGZ-richtlijn', url: 'https://www.jgzrichtlijnen.nl/richtlijn/jgz-richtlijn-preventie-wiegendood/' },
          ],
        },
        {
          id: 'v-e-2',
          title: 'Voeding-basics',
          body:
            'Of het nu borst- of flesvoeding is: een pasgeborene eet **op verzoek (on demand)**, vaak 8 tot 12 keer per etmaal. De maag is piepklein, dus kleine beetjes en vaak. Honger-signalen komen vóór het huilen: smakken, aan de vuist zuigen, het hoofdje zoekend draaien (**rooting**). Reageren op die vroege signalen maakt voeden rustiger dan wachten tot het gillen begint.\n\nNa de voeding komt een **boertje**: even rechtop tegen je schouder en zacht op de rug, om ingeslikte lucht eruit te laten. Een beetje teruggeven (spugen) is normaal zolang de baby groeit en plast.\n\nAls vader kun je volop meedoen, ook bij borstvoeding: flesjes met afgekolfde melk geven, verschonen, boeren, en de nachtvoeding delen. Dat geeft Do rust én bouwt jouw band met je dochter. Houd losjes bij hoeveel natte luiers er zijn (zo\'n 6+ per dag na de eerste week) — dat is een simpel teken dat ze genoeg binnenkrijgt.',
          glossary: [
            { term: 'On demand', def: 'Voeden op verzoek, op signaal van de baby, niet op een vast schema.' },
            { term: 'Rooting', def: 'Zoekreflex: hoofdje draaien en zoeken naar de tepel/speen.' },
            { term: 'Boertje', def: 'Ingeslikte lucht eruit laten door rechtop te houden en op de rug te tikken.' },
          ],
          priming: 'Welke signalen geeft een baby vóór het echte huilen begint?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is een vroeg hongersignaal?',
              options: ['Hard huilen', 'Aan de vuist zuigen / rooting', 'In slaap vallen', 'Strekken en wegduwen'],
              correct: 1,
              explain: 'Smakken, vuist zuigen en rooting komen vóór het huilen; daarop reageren maakt voeden rustiger.',
            },
            {
              type: 'whyhow',
              prompt: 'Hoe kun jij als vader actief meedoen met de voeding, ook als Do borstvoeding geeft?',
              model: 'Afgekolfde melk in een flesje geven, nachtvoedingen delen, verschonen en boeren, en zorgen dat Do kan rusten. Zo neem je taken over én bouw je je eigen band met je dochter.',
            },
          ],
          summary: [
            'Pasgeborenen eten on demand, klein en vaak (8-12x/dag).',
            'Reageer op vroege signalen (rooting) vóór het huilen.',
            'Boertje na de voeding; ~6 natte luiers/dag (na de eerste week) = teken van genoeg.',
            'Als vader kun je volop meedoen, ook bij borstvoeding (fles afgekolfde melk pas als borstvoeding goed loopt).',
          ],
          sources: [
            { label: 'Voedingscentrum — hoeveel borstvoeding', url: 'https://www.voedingscentrum.nl/nl/zwanger-en-kind/borstvoeding-en-flesvoeding/borstvoeding-geven/hoeveel-borstvoeding-heeft-mijn-baby-nodig-.aspx' },
          ],
        },
        {
          id: 'v-e-3',
          title: 'Veilig slapen',
          body:
            'De belangrijkste afspraak rond babyslaap is simpel en levensreddend: leg je baby **op de rug** te slapen, op een stevig matras, in een **leeg bedje**. Geen kussen, dekbed, knuffels of hoofd-/bedbeschermers (bumpers) — die verhogen het risico op verstikking en wiegendood. Leg de baby met de voetjes tegen het voeteneind, zodat hij niet onder de dekens schuift.\n\nHoud de slaapkamer rond de **15-18 °C** en kleed de baby niet te warm aan; **oververhitting** is een risicofactor. Een trappelzak in plaats van losse dekens houdt de baby warm zonder gevaar. Zorg voor een **rookvrije** omgeving — en niet roken tijdens de zwangerschap is net zo belangrijk, want dat is een sterke zelfstandige risicofactor.\n\nDe eerste maanden slaapt de baby het veiligst in een **eigen bedje op jullie kamer** (room-sharing). De Nederlandse richtlijn houdt minstens **vier maanden** aan, en tot zes maanden als er gerookt wordt; de Amerikaanse AAP adviseert minimaal zes maanden. Deel níét hetzelfde bed (bed-sharing), zeker niet als een ouder rookt, alcohol of medicatie heeft gehad of erg moe is. Val ook nooit met de baby in slaap op de bank of een fauteuil — dat is extra gevaarlijk.\n\nTwee dingen verlagen het risico juist: **borstvoeding** en een **fopspeen** tijdens het slapen (bied de speen bij borstvoeding pas aan als die goed op gang is). Samengevat: rug, leeg bedje, 15-18 °C en niet te warm, rookvrij, eigen bedje op de kamer — dat dekt het grootste deel van de veiligheid af.',
          glossary: [
            { term: 'Rugligging', def: 'Op de rug te slapen leggen — de veiligste houding tegen wiegendood.' },
            { term: 'Trappelzak', def: 'Slaapzak voor baby\'s; warm zonder losse dekens.' },
            { term: 'Room-sharing', def: 'Baby in eigen bedje op de ouderkamer (NL: min. 4 mnd); veiliger dan samen in één bed.' },
            { term: 'Beschermende factoren', def: 'Borstvoeding en een fopspeen tijdens slapen verlagen het wiegendoodrisico.' },
          ],
          priming: 'Wat hoort er volgens jou wél en niet thuis in het bedje van een pasgeborene?',
          questions: [
            {
              type: 'mcq',
              prompt: 'In welke houding leg je een baby het veiligst te slapen?',
              options: ['Op de buik', 'Op de zij', 'Op de rug', 'Maakt niet uit'],
              correct: 2,
              explain: 'Rugligging verlaagt het risico op wiegendood het meest.',
            },
            {
              type: 'mcq',
              prompt: 'Wat verlaagt het risico op wiegendood juist?',
              options: [
                'Een knuffel in bed',
                'Borstvoeding en een fopspeen tijdens het slapen',
                'Een warm dekbed',
                'Samen in één bed slapen',
              ],
              correct: 1,
              explain: 'Borstvoeding en een fopspeen tijdens slapen zijn beschermende factoren; losse spullen en bed-sharing juist niet.',
            },
            {
              type: 'ordering',
              prompt: 'Welke horen bij veilig slapen? Zet ze op volgorde van bedje naar kamer:',
              items: [
                'Baby op de rug',
                'Leeg bedje, stevig matras',
                'Trappelzak i.p.v. losse dekens',
                'Eigen bedje op de ouderkamer',
              ],
              explain: 'Rug → leeg bedje → trappelzak → eigen bedje op de kamer. Plus: 15-18 °C, niet te warm en rookvrij.',
            },
          ],
          summary: [
            'Op de rug, leeg bedje, stevig matras — geen kussens, dekbed of knuffels.',
            'Slaapkamer 15-18 °C, niet te warm; trappelzak; rookvrij (ook niet roken in de zwangerschap).',
            'Eerste maanden eigen bedje op jullie kamer (NL min. 4 mnd); geen bed-sharing.',
            'Borstvoeding en een fopspeen tijdens slapen verlagen het risico.',
          ],
          sources: [
            { label: 'JGZ-richtlijn Preventie Wiegendood (NCJ)', url: 'https://www.jgzrichtlijnen.nl/richtlijn/jgz-richtlijn-preventie-wiegendood/' },
            { label: 'Stichting Wiegedood — Veilig slapen', url: 'https://www.jgzrichtlijnen.nl/richtlijn/jgz-richtlijn-preventie-wiegendood/5-bijlagen/5-4-rubriek-veilig-slapen-van-de-stichting-wiegedood/' },
            { label: 'AAP 2022 — Safe Sleep', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/' },
          ],
        },
        {
          id: 'v-e-4',
          title: 'Huilen lezen & troosten',
          body:
            'Huilen is de enige taal die een baby heeft. Meestal is er een concrete oorzaak: **honger, een volle luier, te warm of te koud, vermoeidheid, of behoefte aan nabijheid**. Loop in je hoofd een kort lijstje langs en je lost het vaak op. Soms huilt een baby zonder duidelijke reden — dat hoort erbij en zegt niets over jou als ouder.\n\nEen handig kader is de **5 S\'en** van Harvey Karp, die de baarmoeder nabootsen: *Swaddle* (inbakeren), *Side/stomach* (op de zij in je armen), *Shush* (sssht-geluid of witte ruis), *Swing* (zacht wiegen) en *Suck* (zuigen, bv. speen). Vaak werkt een combinatie. Let op: de zij-/buikhouding is **alléén** een troosthouding terwijl je de wakkere baby vasthoudt — **slapen doet je baby altijd op de rug**. En als je inbakert: houd zijn heupjes en beentjes vrij (i.v.m. heupdysplasie) en stop met inbakeren zodra hij zich begint om te draaien.\n\nBelangrijk voor jou: een huilende baby kan stress geven, en dat is normaal. Word je het te veel, leg de baby dan veilig op de rug in bed, loop even weg om te ademen, en kom terug. Nooit schudden. Door rustig te blijven troost je effectiever — baby\'s voelen jouw spanning. Troosten is geen "verwennen": in de eerste maanden kun je een baby niet te veel aandacht geven.',
          glossary: [
            { term: '5 S\'en', def: 'Swaddle, Side, Shush, Swing, Suck — troosttechnieken die de baarmoeder nabootsen.' },
            { term: 'Inbakeren', def: 'In een doek wikkelen voor rust; houd heupjes/beentjes vrij en leg altijd op de rug. Stop zodra de baby zich gaat omdraaien.' },
            { term: 'Witte ruis', def: 'Egaal achtergrondgeluid (sssht, ventilator) dat kalmeert.' },
          ],
          priming: 'Je dochter huilt en je weet niet waarom. Welk kort rijtje loop je af?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat doe je als het huilen je te veel wordt?',
              options: [
                'Stevig schudden om te stoppen',
                'Baby veilig neerleggen en even weglopen om te kalmeren',
                'Harder terugpraten',
                'Negeren tot het stopt',
              ],
              correct: 1,
              explain: 'Leg de baby veilig op de rug, neem even afstand om te ademen, kom terug. Nooit schudden.',
            },
            {
              type: 'matching',
              prompt: 'Koppel elke "S" aan wat je doet:',
              pairs: [
                { left: 'Swaddle', right: 'Inbakeren in een doek' },
                { left: 'Shush', right: 'Sssht / witte ruis' },
                { left: 'Swing', right: 'Zacht wiegen' },
                { left: 'Suck', right: 'Laten zuigen (speen)' },
              ],
              explain: 'De 5 S\'en bootsen de baarmoeder na; vaak werkt een combinatie.',
            },
          ],
          summary: [
            'Check eerst: honger, luier, temperatuur, moe, nabijheid.',
            'De 5 S\'en troosten effectief; zij-/buikhouding alleen wakker op de arm — slapen op de rug.',
            'Inbakeren: heupjes vrij, op de rug, stoppen bij omrollen.',
            'Te veel? Veilig op de rug neerleggen, ademen, terugkomen. Nooit schudden.',
          ],
          sources: [
            { label: 'NJi — Shakenbabysyndroom', url: 'https://www.nji.nl/kindermishandeling/shakenbabysyndroom' },
            { label: 'Happiest Baby — de 5 S\'en (Harvey Karp)', url: 'https://www.happiestbaby.com/blogs/baby/the-5-s-s-for-soothing-babies' },
            { label: 'JGZ-richtlijn Heupdysplasie (inbakeren)', url: 'https://www.jgzrichtlijnen.nl/richtlijn/heupdysplasie/' },
          ],
        },
        {
          id: 'v-e-5',
          title: 'Verschonen & huidverzorging',
          body:
            'Het **navelstompje** vraagt weinig: houd het vooral schoon en **droog**. Schoonmaken hoeft meestal niet; is het nodig (vies of plakkerig), gebruik dan een gaasje met lauw water — **geen zeep, geen alcohol** — en dep het daarna goed droog. Vouw de bovenrand van de luier naar binnen zodat de navel aan de lucht blijft; zo droogt het sneller in. Het stompje valt er vanzelf af, meestal na ongeveer **5 tot 14 dagen**. Neem contact op met de verloskundige, kraamverzorgende of huisarts bij roodheid en zwelling rond de navel, pus of een vieze/stinkende afscheiding, of als je baby zich ziek voelt of koorts heeft.\n\nVerschoon de **luier** vaak en houd de billetjes schoon en droog. Bij meisjes veeg je van voor naar achter, om darmbacteriën weg van de plasbuis te houden.\n\nBij **luieruitslag** (rode billetjes): verschoon vaak en laat de billen regelmatig even bloot drogen aan de lucht. Maak schoon met lauw water — geen zeep of geparfumeerde doekjes — en smeer daarna een beschermlaag **zinkzalf of zinkolie**. Ga naar de huisarts als de uitslag erger wordt en je kind veel huilt, of als je rode bultjes of blaasjes met witte puntjes ziet; dat kan wijzen op een schimmelinfectie.',
          glossary: [
            { term: 'Navelstompje', def: 'Schoon en droog houden; geen zeep/alcohol; valt af na ~5-14 dagen.' },
            { term: 'Zinkzalf/zinkolie', def: 'Beschermlaag tegen luieruitslag, op schone droge billen.' },
            { term: 'Tekenen van infectie', def: 'Roodheid, zwelling, pus/stinkende afscheiding, koorts → contact opnemen.' },
          ],
          priming: 'Wat zou je wél en niet gebruiken om het navelstompje schoon te maken?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Hoe verzorg je het navelstompje?',
              options: [
                'Ontsmetten met alcohol',
                'Schoon en droog houden; zo nodig lauw water, geen zeep/alcohol',
                'Insmeren met zalf en afdekken',
                'Dagelijks met zeep wassen',
              ],
              correct: 1,
              explain: 'Vooral droog houden; schoonmaken alleen indien nodig met lauw water — geen zeep of alcohol.',
            },
            {
              type: 'truefalse',
              prompt: 'Bij luieruitslag helpen: vaak verschonen, laten luchten en zinkzalf.',
              answer: true,
              explain: 'Droog houden, lucht en een beschermlaag zinkzalf; geen zeep of geparfumeerde doekjes.',
            },
          ],
          summary: [
            'Navel: schoon en droog, geen zeep/alcohol; valt af na ~5-14 dagen.',
            'Alarm bij navel: roodheid, zwelling, pus/stinkend, koorts → contact.',
            'Luieruitslag: vaak verschonen, luchten, zinkzalf; arts bij verergering of blaasjes (schimmel).',
          ],
          sources: [
            { label: 'Thuisarts — luieruitslag', url: 'https://www.thuisarts.nl/luieruitslag/mijn-kind-heeft-luier-uitslag' },
            { label: 'JGZ — navel van je baby verzorgen', url: 'https://www.jeugdengezinutrecht.nl/pagina/baby/verzorging-baby/de-navel-van-je-baby-verzorgen/908796' },
          ],
        },
        {
          id: 'v-e-6',
          title: 'Wanneer bel je de (huis)arts?',
          body:
            'Eén regel om te onthouden boven alles: **een baby jonger dan 3 maanden met koorts (38 °C of hoger, rectaal gemeten) → bel direct de huisarts of de huisartsenspoedpost**, ook als je baby er verder niet heel ziek uitziet. Bij zulke jonge baby\'s kan koorts wijzen op een ernstige infectie. Rectaal (in de billen) meten is bij deze leeftijd de betrouwbare methode.\n\nLet ook op **uitdroging**: minder natte luiers, droge mond, suf of slap, een ingevallen fontanel (zachte plek op het hoofd) en huilen zonder tranen. Neem direct contact op als je baby **minder dan de helft drinkt**, **langer dan 12 uur geen natte luier** heeft, of suf wordt.\n\nMaak onderscheid tussen spoed en zeer dringend. **Bel 112** als je baby: stopt met ademen of niet wakker te krijgen is; blauw, grauw of grijs ziet (vooral lippen); of vlekjes heeft die **niet wegdrukken** als je er een glas tegenaan drukt (de glastest — mogelijk meningokokken). **Bel direct de huisarts/spoedpost** bij: ontroostbaar of juist heel afwezig huilen, veel minder drinken, snel of kreunend ademen (huid trekt in bij hals/ribben), suf zijn, of koorts bij een baby onder de 3 maanden. En altijd: **vertrouw op je gevoel** — twijfel je over een jonge baby, bel dan, liever één keer te veel dan te weinig.',
          glossary: [
            { term: 'Koorts <3 mnd', def: 'Baby jonger dan 3 maanden + 38 °C of hoger (rectaal) → direct (huis)arts bellen.' },
            { term: 'Glastest', def: 'Vlekjes die niet wegdrukken onder een glas → 112 (mogelijk meningokokken).' },
            { term: 'Uitdroging-drempel', def: 'Minder dan de helft drinken of >12 u geen natte luier → direct contact.' },
          ],
          priming: 'Welk signaal bij een hele jonge baby zou jou meteen naar de telefoon laten grijpen?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Je baby is 6 weken en heeft 38,2 °C koorts. Wat doe je?',
              options: [
                'Afwachten tot morgen',
                'Direct de huisarts of spoedpost bellen',
                'Een paracetamol geven en aankijken',
                'Alleen bellen bij 40 °C',
              ],
              correct: 1,
              explain: 'Onder de 3 maanden is koorts (≥38 °C) altijd reden om direct te bellen.',
            },
            {
              type: 'mcq',
              prompt: 'Welk signaal vraagt om 112 (en niet "gewoon" de huisarts)?',
              options: [
                'Veel minder drinken dan normaal',
                'Vlekjes die niet wegdrukken bij de glastest',
                'Een volle luier',
                'Af en toe spugen',
              ],
              correct: 1,
              explain: 'Niet-wegdrukbare vlekjes (mogelijk meningokokken), stoppen met ademen, niet wekbaar of blauw/grauw → 112.',
            },
          ],
          summary: [
            'Baby <3 mnd + koorts (≥38 °C rectaal) → direct (huis)arts bellen.',
            'Uitdroging: <helft drinken of >12 u geen natte luier → direct contact.',
            '112 bij: niet ademen/niet wekbaar, blauw-grauw, of vlekjes die niet wegdrukken.',
            'Bij twijfel over een jonge baby: altijd bellen — vertrouw op je gevoel.',
          ],
          sources: [
            { label: 'Thuisarts — mijn kind heeft koorts', url: 'https://www.thuisarts.nl/kind-met-koorts/mijn-kind-heeft-koorts' },
            { label: 'Thuisarts — mijn kind is ziek, waar op letten', url: 'https://www.thuisarts.nl/ziek-kind/mijn-kind-is-ziek-waar-moet-ik-op-letten' },
            { label: 'NHS — seriously ill baby/toddler', url: 'https://www.nhs.uk/baby/health/is-your-baby-or-toddler-seriously-ill/' },
          ],
        },
      ],
    },
    {
      id: 'mentaal',
      title: 'Mentale voorbereiding',
      orbs: [
        {
          id: 'v-m-1',
          title: 'Een team worden met Do',
          body:
            'De grootste voorspeller van een soepele kraamtijd is niet techniek maar **teamwork**. Een pasgeborene betekent een berg onzichtbaar werk — voeden, verschonen, troosten, huishouden — en dat verdeel je het best vooraf, niet midden in de nacht terwijl iedereen moe is.\n\nMaak samen een ruwe afspraak over **shifts**: wie doet welke nachtvoeding, wie regelt overdag wat. Veel stellen werken met blokken slaap, zodat ieder minstens één aaneengesloten stuk pakt. Spreek ook af dat plannen mogen schuiven — flexibiliteit hoort erbij.\n\nNeem als vader bewust **zichtbaar de regie** over hele taken (niet "helpen", maar "doen"): de was, boodschappen, bezoek afhouden, de fles \'s nachts. Dat haalt mentale last bij Do weg, zeker als zij herstelt van de bevalling. Check elke dag kort in: "hoe gaat het met jou, wat heb je nodig?" Die ene vraag voorkomt veel sluimerende frustratie. Een kind krijgen is een teamsport; de eerste weken zet je de toon voor hoe jullie het samen doen.',
          glossary: [
            { term: 'Mental load', def: 'De onzichtbaar denk- en planlast van zorgtaken; verdeel die bewust.' },
            { term: 'Shifts', def: 'Vooraf verdeelde blokken zorg/slaap zodat ieder rust pakt.' },
          ],
          priming: 'Wat is het verschil tussen "helpen" en "een taak echt overnemen"?',
          questions: [
            {
              type: 'truefalse',
              prompt: 'Taken vooraf verdelen werkt beter dan het \'s nachts ter plekke uitvechten.',
              answer: true,
              explain: 'Afspraken vooraf voorkomen wrijving als iedereen moe is.',
            },
            {
              type: 'whyhow',
              prompt: 'Hoe verlaag je als vader de mentale last bij Do in de eerste weken?',
              model: 'Door hele taken zichtbaar over te nemen (was, boodschappen, bezoek regelen, nachtvoeding) in plaats van te "helpen", en door dagelijks te vragen wat zij nodig heeft. Zo hoeft zij niet te bedenken én te delegeren.',
            },
          ],
          summary: [
            'Kraamtijd is teamwork; verdeel taken en shifts vooraf.',
            'Neem hele taken over ("doen", niet "helpen") om Do\'s last te verlagen.',
            'Check dagelijks kort in: hoe gaat het, wat heb je nodig?',
          ],
        },
        {
          id: 'v-m-2',
          title: 'Verwachtingen bijstellen',
          body:
            'Veel stress in de eerste weken komt niet van de baby maar van **verwachtingen** die niet kloppen. Het beeld van een rustig slapend kindje en ontspannen ouders is grotendeels marketing. De realiteit is rommelig: korte nachten, veel huilen, weinig overzicht. Dat is geen falen — dat is normaal.\n\nHelpend is denken in een **vierde trimester**: de eerste ~12 weken is je dochter eigenlijk nog "af aan het bouwen" buiten de buik. Ze wil vooral nabijheid, warmte en voeding. Mijlpalen als doorslapen, lachen en ritme komen later; verwacht ze niet te vroeg.\n\nStel je succes-meetlat bij: een geslaagde dag is dat iedereen gevoed en veilig is, niet dat het huis netjes is of dat je productief was. Laat klusjes en ambities even los. Door je verwachtingen te verlagen naar wat past bij deze fase, voorkom je het gevoel dat je achterloopt — en geniet je meer van de kleine momenten die er wél zijn.',
          glossary: [
            { term: 'Vierde trimester', def: 'De eerste ~12 weken na de geboorte; de baby went nog aan de wereld buiten de buik.' },
          ],
          priming: 'Welk "ideaalplaatje" van een pasgeborene klopt waarschijnlijk niet met de werkelijkheid?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is een realistische "geslaagde dag" in de eerste weken?',
              options: [
                'Het huis is netjes en je was productief',
                'De baby sliep door',
                'Iedereen is gevoed en veilig',
                'Je hebt al je klusjes gedaan',
              ],
              correct: 2,
              explain: 'Verlaag de meetlat naar deze fase: gevoed en veilig is genoeg.',
            },
            {
              type: 'truefalse',
              prompt: 'In het "vierde trimester" wil een baby vooral nabijheid, warmte en voeding.',
              answer: true,
              explain: 'Mijlpalen als ritme en doorslapen komen later; verwacht ze niet te vroeg.',
            },
          ],
          summary: [
            'Veel stress komt van te hoge verwachtingen, niet van de baby.',
            'Denk in een "vierde trimester": de eerste ~12 weken draait om nabijheid.',
            'Een geslaagde dag = iedereen gevoed en veilig; laat de rest los.',
          ],
        },
        {
          id: 'v-m-3',
          title: 'Zelfzorg & slaaptekort',
          body:
            'Je kunt alleen goed zorgen als je zelf overeind blijft. **Slaaptekort** is in de eerste weken onvermijdelijk, maar je kunt de schade beperken. Slaap wanneer het kan, ook overdag in korte dutjes; één blok van drie uur is goud waard. Wissel nachten of voedingen af met Do zodat ieder een keer langer doorslaapt.\n\nLet op de basis: drinken, regelmatig eten, even naar buiten en bewegen. Een korte wandeling of tien minuten in je eigen zoldergym doet meer voor je humeur dan je denkt. Cafeïne helpt tijdelijk, maar te laat op de dag verstoort het je herstelslaap juist.\n\nHoud ook je **mentale tank** in de gaten. Prikkelbaarheid, somberheid of een kort lontje horen deels bij vermoeidheid, maar blijven die klachten of word je echt somber, trek dan aan de bel — ook vaders kunnen na de geboorte een postnatale depressie krijgen, naar schatting ongeveer 1 op de 10, en het risico is groter als je partner somber is. Praten met Do, een vriend of de huisarts is geen zwakte maar onderhoud. Zorgen voor jezelf is geen luxe; het is voorwaarde om er voor je dochter te zijn.',
          glossary: [
            { term: 'Slaapdruk', def: 'De opbouw van behoefte aan slaap; korte dutjes verlichten die.' },
            { term: 'Mentale tank', def: 'Je emotionele reserve; bewaak hem, ook als vader.' },
          ],
          priming: 'Waarom is goed voor jezelf zorgen geen egoïsme maar juist nodig voor je dochter?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is een verstandige aanpak bij slaaptekort?',
              options: [
                'Wachten tot het weekend om bij te slapen',
                'Slapen wanneer het kan, ook korte dutjes overdag',
                'Veel cafeïne, ook \'s avonds laat',
                'Doorgaan tot je omvalt',
              ],
              correct: 1,
              explain: 'Korte dutjes en afgewisselde nachten beperken de schade; cafeïne laat op de dag verstoort herstel.',
            },
            {
              type: 'truefalse',
              prompt: 'Ook vaders kunnen na de geboorte mentaal vastlopen en mogen daar hulp voor zoeken.',
              answer: true,
              explain: 'Aanhoudende somberheid of prikkelbaarheid: bespreek het — dat is onderhoud, geen zwakte.',
            },
          ],
          summary: [
            'Slaap wanneer het kan; wissel nachten af voor één lang blok.',
            'Basis op orde: drinken, eten, bewegen, naar buiten.',
            'Bewaak je mentale tank; ook vaders kunnen een postnatale depressie krijgen (~1 op 10) — vraag hulp bij aanhoudende somberheid.',
          ],
          sources: [
            { label: 'Paternal postpartum depression — meta-analyse (PMC)', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7677771/' },
          ],
        },
      ],
    },
  ],
};

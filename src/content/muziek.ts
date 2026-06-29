import type { Island } from '../types';

export const muziek: Island = {
  id: 'muziek',
  title: 'Muziek',
  blurb: 'Ritme, drums en harmonie — van tellen tot samenspel.',
  icon: '🎸',
  color: '#f97316',
  pos: { x: 24, y: 30 },
  topics: [
    {
      id: 'ritme',
      title: 'Ritme & drums',
      orbs: [
        {
          id: 'm-r-1',
          title: 'Maatsoort & tellen',
          body:
            'Bijna alle popmuziek staat in **4/4**: vier tellen per maat, en je telt "1 – 2 – 3 – 4" steeds opnieuw. Die bovenste 4 zegt hoeveel tellen er in een maat zitten, de onderste 4 zegt dat een kwartnoot één tel is.\n\nHet **tempo** bepaalt hoe snel die tellen voorbijkomen, uitgedrukt in BPM (beats per minute). 120 BPM is twee tellen per seconde — een prettig middentempo. Op je Alesis kun je de metronoom (click) op een vast tempo zetten en gewoon meetellen vóór je een stok aanraakt.\n\nWaarom dit eerst? Omdat ritme een **raster** is. Zolang je hardop of in je hoofd "1-2-3-4" houdt, weet elke noot waar hij thuishoort. Drummers, gitaristen en pianisten delen dat raster — daardoor klinken ze samen strak. Verlies je de tel, dan loop je vast; vind je hem terug, dan val je vanzelf weer in.',
          glossary: [
            { term: 'Maatsoort', def: 'Hoeveel tellen in een maat en welke noot één tel is (bv. 4/4).' },
            { term: 'BPM', def: 'Beats per minute — het tempo, hoeveel tellen per minuut.' },
            { term: 'Click', def: 'De metronoom; een vaste tik om strak op te spelen.' },
          ],
          priming: 'Als je een nummer meetikt op het stuur — hoeveel tellen herhaal je eigenlijk steeds?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat betekent de bovenste 4 in een 4/4-maatsoort?',
              options: ['Het tempo in BPM', 'Vier tellen per maat', 'Vier maten per nummer', 'Vier instrumenten'],
              correct: 1,
              explain: 'De bovenste 4 = aantal tellen per maat. De onderste 4 = welke noot één tel telt (kwartnoot).',
            },
            {
              type: 'truefalse',
              prompt: 'Een hoger BPM betekent een langzamer tempo.',
              answer: false,
              explain: 'Hoger BPM = méér tellen per minuut = sneller.',
            },
          ],
          summary: [
            '4/4 = vier tellen per maat, steeds herhaald.',
            'BPM is het tempo; click = metronoom om strak op te spelen.',
            'De tel is het raster waar alle muzikanten op samenkomen.',
          ],
        },
        {
          id: 'm-r-2',
          title: 'De backbeat',
          body:
            'De ruggengraat van rock, pop en funk is de **backbeat**. In 4/4 speelt je rechtervoet de **bassdrum (kick)** meestal op tel 1 en 3, en je hand de **snare** op tel 2 en 4. Die snare op 2 en 4 is precies waar mensen in hun handen klappen — het is de "duw" van het ritme.\n\nProbeer het hardop: "**boem** – tsj – **boem** – tsj" waarbij boem de kick is en tsj de snare. Zet de hi-hat erbij op elke tel en je hebt het meest gebruikte drumpatroon ter wereld, het **four-on-the-floor**-neefje: de standaard rockbeat.\n\nWaarom 2 en 4? Op 1 en 3 ligt de natuurlijke nadruk al (dat voelt "zwaar"). Door de snare juist op de zwakke tellen 2 en 4 te knallen, ontstaat spanning en groove — het trekt het nummer vooruit. Verschuif je de snare naar 1 en 3, dan klinkt het meteen als een mars in plaats van een song.',
          glossary: [
            { term: 'Backbeat', def: 'Snare-accent op tel 2 en 4 — de groove van pop/rock.' },
            { term: 'Kick', def: 'Bassdrum, bespeeld met de voet; meestal op 1 en 3.' },
            { term: 'Snare', def: 'De scherpe, klappende trom; in de backbeat op 2 en 4.' },
          ],
          priming: 'Waar klappen mensen mee als ze een rocknummer horen — op welke tellen?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Op welke tellen valt de snare in een standaard backbeat?',
              options: ['1 en 3', '2 en 4', 'Alle vier', 'Alleen 1'],
              correct: 1,
              explain: 'Snare op 2 en 4 geeft de typische pop/rock-groove; kick draagt 1 en 3.',
            },
            {
              type: 'whyhow',
              prompt: 'Waarom klinkt de snare op 2 en 4 groovy, maar op 1 en 3 als een mars?',
              model: 'Op 1 en 3 ligt al de natuurlijke nadruk; daar de snare bijzetten dubbelt de zwaarte (mars-gevoel). De snare op de zwakke tellen 2 en 4 creëert juist contrast en spanning, wat het nummer vooruit trekt.',
            },
          ],
          summary: [
            'Kick op 1 en 3, snare op 2 en 4 = de backbeat.',
            'Hi-hat op elke tel maakt het de standaard rockbeat.',
            'Accent op de zwakke tellen (2/4) geeft groove.',
          ],
        },
        {
          id: 'm-r-3',
          title: 'Achtsten & subdivisie',
          body:
            'Tot nu toe telde je vier kwarttellen. Maar tussen elke tel zit ruimte, en die vul je met **subdivisie**. Splits elke tel in tweeën en je krijgt **achtste noten**: tel "1 en 2 en 3 en 4 en". De "en" valt precies halverwege.\n\nOp drums speel je achtsten meestal op de **hi-hat**: acht gelijkmatige tikjes per maat, terwijl kick en snare hun backbeat houden. Dat constante stroompje achtsten maakt een beat "vol". Wil je meer drive? Ga naar **zestienden** ("1-e-en-e"), vier tikjes per tel — denk aan snelle funk of drum-’n-bass-achtige hi-hats.\n\nVoor jou als gitarist is dit dezelfde logica als je **aanslag (strumming)**: je hand gaat continu op en neer in achtsten, ook als je niet elke aanslag raakt. Door subdivisie te voelen, blijf je strak — je hand is de interne metronoom. Drums en gitaar delen letterlijk hetzelfde tikkende raster.',
          glossary: [
            { term: 'Subdivisie', def: 'Een tel opdelen in kleinere gelijke stukjes (achtsten, zestienden).' },
            { term: 'Achtste noot', def: 'Halve tel; je telt "1 en 2 en …".' },
            { term: 'Zestiende', def: 'Kwart tel; "1-e-en-e", vier per tel.' },
          ],
          priming: 'Als je een aanslag op gitaar continu op-en-neer doet — welke noten tel je dan eigenlijk?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Hoe tel je achtste noten in 4/4?',
              options: ['1 2 3 4', '1 en 2 en 3 en 4 en', '1-e-en-e', '1 2 3'],
              correct: 1,
              explain: 'Achtsten = elke tel in tweeën: "1 en 2 en …". Zestienden zijn "1-e-en-e".',
            },
            {
              type: 'truefalse',
              prompt: 'Subdivisie voelen helpt om strak te blijven spelen, ook op gitaar.',
              answer: true,
              explain: 'Je aanslaghand wordt je interne metronoom — hetzelfde raster als de drums.',
            },
          ],
          summary: [
            'Subdivisie = de tel opdelen; achtsten zijn "1 en 2 en".',
            'Hi-hat speelt vaak achtsten; zestienden geven meer drive.',
            'Strumming op gitaar volgt dezelfde op-neer-subdivisie.',
          ],
        },
        {
          id: 'm-r-4',
          title: 'Fills & overgangen',
          body:
            'Een **fill** is een korte onderbreking van de groove die een nieuw stuk aankondigt — meestal aan het eind van een maat van 4 of 8, vlak voor het refrein. Het is het muzikale equivalent van "let op, er komt iets".\n\nDe simpelste fill: speel op de laatste tel een rijtje **toms** of snare-roffels in achtsten of zestienden, en land op tel 1 van de nieuwe sectie op een **crash-cymbal** samen met de kick. Die landing is het belangrijkste — een fill mag rommelig zijn, maar als je strak terugvalt op de "1" klinkt het overtuigend.\n\nBegin klein: laat de laatste twee tellen van een maat je snare een paar keer extra raken, hou de tel vast, en knal op de volgende "1". Tel hardop door tijdens de fill, anders verlies je het raster. Het geheim van goede fills is niet snelheid maar **timing**: op tijd beginnen en op tijd landen.',
          glossary: [
            { term: 'Fill', def: 'Korte ritmische onderbreking die een overgang aankondigt.' },
            { term: 'Tom', def: 'Melodische trom zonder snaarrammel; vaak gebruikt in fills.' },
            { term: 'Crash', def: 'Bekken voor accenten; markeert vaak de landing op tel 1.' },
          ],
          priming: 'Wat hoor je vlak vóór een refrein losbarst — en wat is de functie daarvan?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is het belangrijkste aan een fill?',
              options: ['Zo snel mogelijk', 'Strak landen op tel 1', 'Zoveel mogelijk toms', 'Hard spelen'],
              correct: 1,
              explain: 'De landing op de volgende "1" maakt of breekt de fill — timing boven snelheid.',
            },
            {
              type: 'ordering',
              prompt: 'Zet de stappen van een simpele fill in volgorde:',
              items: [
                'Groove spelen tot het eind van de maat',
                'Laatste tellen: snare/tom-roffel',
                'Land op tel 1 met crash + kick',
                'Verder met de nieuwe sectie',
              ],
              explain: 'Groove → roffel aan het eind → landing op de "1" → door in het refrein.',
            },
          ],
          summary: [
            'Een fill kondigt een overgang aan, meestal vóór het refrein.',
            'Land strak op tel 1 met crash + kick — dat telt het zwaarst.',
            'Tel hardop door; timing is belangrijker dan snelheid.',
          ],
        },
        {
          id: 'm-r-5',
          title: 'Triolen, swing & shuffle',
          body:
            'Tot nu toe deelde je een tel in tweeën (achtsten) of vieren (zestienden). Maar je kunt een tel ook in **drieën** delen: dat heet een **triool**. Tel "1-en-de, 2-en-de" — drie gelijke noten op één tel. Dat geeft een rollend, huppelend gevoel dat je in heel veel muziek hoort.\n\nUit die trioolverdeling komt de **swing- of shuffle-feel**: in plaats van twee even lange achtsten speel je een **lange-korte** verdeling (de eerste twee tellen van de triool samengevoegd, dan de derde). Dat "dushh-da, dushh-da" is de motor van jazz, blues, shuffle en veel soul. Rechte achtsten klinken strak en modern; geswingde achtsten klinken los en groovy.\n\nVoor jou praktisch: zet je metronoom aan en oefen bewust het verschil — eerst rechte achtsten, dan dezelfde groove met een swing-feel. Op drums hoor je het meteen in de hi-hat; op gitaar in je aanslag. Veel nummers staan of vallen bij of je de juiste "feel" pakt, niet bij de noten zelf.',
          glossary: [
            { term: 'Triool', def: 'Een tel verdeeld in drie gelijke noten ("1-en-de").' },
            { term: 'Swing/shuffle-feel', def: 'Lange-korte achtsten op basis van triolen; de groove van jazz en blues.' },
          ],
          priming: 'Wat geeft jazz en blues dat "huppelende" gevoel dat rechte popmuziek mist?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is een triool?',
              options: ['Een tel in tweeën', 'Een tel in drieën', 'Drie maten', 'Drie akkoorden'],
              correct: 1,
              explain: 'Een triool = één tel verdeeld in drie gelijke noten.',
            },
            {
              type: 'truefalse',
              prompt: 'De swing-/shuffle-feel is gebaseerd op de trioolverdeling.',
              answer: true,
              explain: 'Lange-korte achtsten komen voort uit de triool — de basis van swing en shuffle.',
            },
          ],
          summary: [
            'Een tel in drieën = een triool ("1-en-de").',
            'Swing/shuffle = lange-korte achtsten uit de triool; motor van jazz/blues.',
            'Oefen het verschil rechte vs geswingde achtsten met een metronoom.',
          ],
        },
        {
          id: 'm-r-6',
          title: 'Samengestelde & oneven maten',
          body:
            'Niet alles staat in 4/4. In **6/8** tel je zes achtsten, maar gegroepeerd in **twee groepen van drie**: EEN-twee-drie-VIER-vijf-zes. Dat geeft een wiegend, rollend gevoel — denk aan veel ballads en Ierse jigs. Zo\'n maat waarin de tel zelf in drieën valt heet een **samengestelde maatsoort**.\n\nDaarnaast bestaan **oneven maten (odd meters)** zoals 5/4 (de jazzklassieker "Take Five") of 7/8. Die voelen eerst lastig, maar de truc is **groeperen** in kleinere blokjes. 7/8 tel je bijvoorbeeld als 3+2+2 of 2+2+3 — dan wordt een vreemde maat ineens behapbaar omdat je weer een vast patroontje hebt om op te leunen.\n\nWaarom dit leren? Omdat het je oor opent voor muziek buiten de standaard, en omdat het je ritmegevoel enorm aanscherpt. Tel hardop, klap de groepjes, en begin langzaam. Veel prog, jazz en folk leunen op deze maten; herken je het patroon, dan kun je meespelen waar anderen afhaken.',
          glossary: [
            { term: 'Samengestelde maat', def: 'Maat waarin de tel in drieën valt, bv. 6/8 = twee groepen van drie.' },
            { term: 'Oneven maat (odd meter)', def: 'Maat als 5/4 of 7/8; behapbaar door te groeperen (7/8 = 3+2+2).' },
          ],
          priming: 'Hoe zou je een "vreemde" maat als 7/8 toch makkelijk kunnen tellen?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Hoe groepeer je 6/8 meestal?',
              options: ['Drie groepen van twee', 'Twee groepen van drie', 'Zes losse tellen', 'Eén groep van zes'],
              correct: 1,
              explain: '6/8 = twee groepen van drie achtsten — vandaar het wiegende gevoel.',
            },
            {
              type: 'truefalse',
              prompt: 'Oneven maten worden behapbaar door ze in kleinere groepjes te verdelen.',
              answer: true,
              explain: '7/8 als 3+2+2 (of 2+2+3) geeft je weer een vast patroon om op te leunen.',
            },
          ],
          summary: [
            '6/8 = samengestelde maat: twee groepen van drie achtsten (wiegend).',
            'Oneven maten (5/4, 7/8) bestaan; groepeer ze in blokjes.',
            'Tel hardop, klap de groepjes, begin langzaam.',
          ],
        },
      ],
    },
    {
      id: 'harmonie',
      title: 'Akkoorden & harmonie',
      orbs: [
        {
          id: 'm-h-1',
          title: 'Majeur vs mineur',
          body:
            'Een **akkoord** is een stapeling van tonen die samen klinken. De twee basisstemmingen zijn **majeur** (vrolijk, open) en **mineur** (donker, weemoedig). Het verschil zit in één toon: de **terts**.\n\nNeem een grondtoon, tel vier halve tonen omhoog en je hebt een **grote terts** → majeur. Tel er maar drie, dan krijg je een **kleine terts** → mineur. Eén fret verschil op je gitaar verandert dus het hele gevoel. Daarom voelt C majeur zonnig en A mineur melancholisch, terwijl ze veel tonen delen.\n\nDit verklaart waarom je met dezelfde paar akkoorden zo veel stemmingen kunt maken. Songschrijvers wisselen bewust majeur en mineur af: een mineur-akkoord in een verder vrolijk nummer geeft een vleugje twijfel of spanning. Train je oor door bij elk akkoord te benoemen: "klinkt dit licht of donker?" Na een tijdje hoor je de terts vanzelf.',
          glossary: [
            { term: 'Akkoord', def: 'Meerdere tonen die tegelijk klinken.' },
            { term: 'Terts', def: 'De toon die majeur (groot) of mineur (klein) bepaalt.' },
            { term: 'Grondtoon', def: 'De basistoon waar het akkoord naar vernoemd is.' },
          ],
          priming: 'Een vrolijk en een droevig akkoord delen bijna alle tonen — wat zou het verschil maken?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Welke toon bepaalt of een akkoord majeur of mineur is?',
              options: ['De grondtoon', 'De kwint', 'De terts', 'De octaaf'],
              correct: 2,
              explain: 'De terts: grote terts = majeur (vrolijk), kleine terts = mineur (donker).',
            },
            {
              type: 'truefalse',
              prompt: 'Het verschil tussen majeur en mineur is op gitaar vaak maar één fret.',
              answer: true,
              explain: 'Eén halve toon op de terts kantelt het gevoel volledig.',
            },
          ],
          summary: [
            'Akkoord = gestapelde tonen; majeur = vrolijk, mineur = donker.',
            'De terts maakt het verschil: groot (majeur) vs klein (mineur).',
            'Eén fret verschil kantelt de hele stemming.',
          ],
        },
        {
          id: 'm-h-2',
          title: 'Akkoordprogressies',
          body:
            'Nummers bewegen tussen akkoorden in patronen die we **progressies** noemen. Muzikanten nummeren de akkoorden van een toonladder met Romeinse cijfers: **I – ii – iii – IV – V – vi – vii**. Hoofdletters zijn majeur, kleine letters mineur. In C majeur is I = C, IV = F, V = G, vi = Am.\n\nDe beroemdste progressie is **I–V–vi–IV** — je hoort hem in honderden hits. Omdat hij in cijfers is uitgedrukt, werkt hij in elke toonsoort: speel I–V–vi–IV in G en je krijgt G–D–Em–C. Dit is het **Nashville-nummersysteem**: denken in functies, niet in losse akkoorden.\n\nHet voordeel voor jou: als je progressies in cijfers leert, kun je een nummer in elke toonsoort spelen en meteen meedoen met anderen ("het is een 1-5-6-4 in A"). Je hoeft niet elk lied apart te onthouden — je herkent het patroon eronder.',
          glossary: [
            { term: 'Progressie', def: 'De volgorde van akkoorden in een nummer.' },
            { term: 'Romeinse cijfers', def: 'I–vi: akkoorden genummerd binnen een toonladder.' },
            { term: 'Nashville-systeem', def: 'Akkoorden als cijfers noteren, los van toonsoort.' },
          ],
          priming: 'Hoe komt het dat zoveel verschillende hits "hetzelfde" klinken qua akkoorden?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat zijn de akkoorden van I–V–vi–IV in C majeur?',
              options: ['C–G–Am–F', 'C–F–G–Am', 'Am–F–C–G', 'C–Dm–Em–F'],
              correct: 0,
              explain: 'I=C, V=G, vi=Am, IV=F. In cijfers werkt het in elke toonsoort.',
            },
            {
              type: 'whyhow',
              prompt: 'Waarom is het handig om progressies in cijfers (I–V–vi–IV) te denken in plaats van losse akkoordnamen?',
              model: 'Cijfers beschrijven de functie los van toonsoort, dus je kunt dezelfde progressie meteen in elke toon spelen en met anderen communiceren ("1-5-6-4 in A"). Je herkent het patroon onder veel verschillende nummers in plaats van elk lied apart te onthouden.',
            },
          ],
          summary: [
            'Progressies = akkoordvolgordes, genummerd met Romeinse cijfers.',
            'I–V–vi–IV is de hit-progressie en werkt in elke toonsoort.',
            'In cijfers denken (Nashville) = sneller meespelen en transponeren.',
          ],
        },
        {
          id: 'm-h-3',
          title: 'Capo & transponeren',
          body:
            'Soms past een nummer net niet bij je stem of bij een medespeler. Dan **transponeer** je: je schuift alle akkoorden evenveel halve tonen op. Een nummer in G dat te laag zit, kun je naar A tillen (twee halve tonen hoger) — elk akkoord schuift mee.\n\nDe luie en geniale oplossing op gitaar is de **capodaster (capo)**: een klem die alle snaren op een bepaalde fret indrukt. Daarmee verhoog je alles zonder andere grepen te leren. Zet je capo op fret 2 en speel je vertrouwde G-grepen, dan klinkt het in A. Je vingers doen hetzelfde, de toonsoort verschuift.\n\nDit is precies waarom een capo zo handig is bij samen spelen of zingen: je houdt je makkelijke open akkoorden (G, C, D, Em) maar past de toonhoogte aan de zanger aan. Vuistregel: elke fret = één halve toon omhoog. Capo op 2 = +2 halve tonen, dus G-vormen klinken als A.',
          glossary: [
            { term: 'Transponeren', def: 'Alle akkoorden evenveel halve tonen verschuiven.' },
            { term: 'Capodaster', def: 'Klem die alle snaren op één fret indrukt; verhoogt de toonsoort.' },
            { term: 'Halve toon', def: 'Kleinste stap; op gitaar één fret.' },
          ],
          priming: 'Een nummer ligt te laag voor je stem. Wat kun je doen zonder nieuwe grepen te leren?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Je zet een capo op fret 2 en speelt G-grepen. Hoe klinkt het?',
              options: ['Nog steeds G', 'In F', 'In A', 'In E'],
              correct: 2,
              explain: 'Elke fret = +1 halve toon. Capo op 2 = +2, dus G-vormen klinken als A.',
            },
            {
              type: 'truefalse',
              prompt: 'Met een capo kun je je vertrouwde open akkoorden houden en toch de toonsoort aanpassen.',
              answer: true,
              explain: 'Dat is precies het nut bij meespelen of een andere zangstem.',
            },
          ],
          summary: [
            'Transponeren = alle akkoorden evenveel halve tonen verschuiven.',
            'Een capo verhoogt de toonsoort zonder nieuwe grepen.',
            'Elke fret = één halve toon; capo op 2 maakt G tot A.',
          ],
        },
        {
          id: 'm-h-4',
          title: 'Samenspel: locking in',
          body:
            'Een band klinkt pas strak als iedereen in **hetzelfde ritme-raster** zit. De belangrijkste koppeling is die tussen **bassdrum en bas(gitaar)**: als de kick en de basnoten op precies dezelfde momenten vallen, smelten ze samen tot één laag fundament. Dat heet **locking in**, en het is het verschil tussen "los zand" en een groove die duwt.\n\nDe truc is **luisteren in plaats van vullen**. Veel beginners spelen te veel; ze laten geen ruimte. Maar groove zit net zo goed in de stiltes. Speel minder noten, maar precies op tijd, en laat ruimte voor de anderen. Als jij gitaar speelt boven een drummer, hang je je aanslag aan de hi-hat of de snare — dat is je ankerpunt.\n\nEen praktische oefening met je vrienden: speel samen één simpele groove van vier maten, heel langzaam, en luister alleen naar of de kick en de bas exact samenvallen. Verhoog het tempo pas als het strak zit. Tel allemaal dezelfde "1". Strak samenspel komt niet van moeilijke partijen, maar van een gedeeld raster en naar elkaar luisteren.',
          glossary: [
            { term: 'Locking in', def: 'Bassdrum en bas exact samen laten vallen tot één strak fundament.' },
            { term: 'Pocket', def: 'De groove waarin alles precies op tijd zit; "in the pocket" spelen.' },
            { term: 'Ankerpunt', def: 'Een vast element (hi-hat/snare) waar je je timing aan ophangt.' },
          ],
          priming: 'Wat maakt dat een band "strak" klinkt — moeilijke partijen of iets anders?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Welke twee elementen moeten vooral "locken" voor een strak fundament?',
              options: ['Zang en gitaar', 'Bassdrum en bas', 'Hi-hat en zang', 'Twee gitaren'],
              correct: 1,
              explain: 'Kick en bas op dezelfde momenten = één laag fundament dat duwt.',
            },
            {
              type: 'truefalse',
              prompt: 'Meer noten spelen maakt een groove meestal strakker.',
              answer: false,
              explain: 'Vaak juist andersom: minder spelen, ruimte laten en precies op tijd = meer groove.',
            },
          ],
          summary: [
            'Strak samenspel = gedeeld ritme-raster; tel dezelfde "1".',
            'Kick en bas samen laten vallen (locking in) draagt de groove.',
            'Luister en laat ruimte; minder noten op tijd > veel noten net naast.',
          ],
        },
        {
          id: 'm-h-5',
          title: 'Septiem- & kleurakkoorden',
          body:
            'Een drieklank (grondtoon-terts-kwint) is de basis, maar voeg je een **vierde toon** toe — de **septiem** — dan krijg je rijkere, volwassener akkoorden. Diezelfde drieklank wordt ineens veel kleurrijker.\n\nDrie smaken om te kennen. **Maj7** (bijv. Cmaj7): dromerig, warm, filmisch. **Mineur 7** (Dm7): zacht, soulvol, ontspannen. **Dominant 7** (G7): gespannen en bluesy — dit akkoord "wil" oplossen naar de grondtoon en is de motor achter blues en jazz. Waar pure drieklanken recht-toe-recht-aan klinken, geven septiemakkoorden diepte en sfeer.\n\nNog twee handige kleuren: **sus2** en **sus4** vervangen de terts door de tweede of vierde toon, wat een open, zwevend gevoel geeft (denk aan veel intro\'s). Je hoeft geen jazzmuzikant te zijn: één maj7 of m7 in een verder simpele progressie tilt een nummer meteen op. Probeer in een akkoordenreeks eens een akkoord te vervangen door zijn 7-versie en luister wat het doet.',
          glossary: [
            { term: 'Septiem', def: 'Vierde toon bovenop een drieklank; geeft kleur en diepte.' },
            { term: 'maj7 / m7 / dom7', def: 'Dromerig / zacht-soulvol / gespannen-bluesy (wil oplossen).' },
            { term: 'sus-akkoord', def: 'Terts vervangen door de 2 of 4; open, zwevend geluid.' },
          ],
          priming: 'Waarom klinken jazz en soul "rijker" dan een liedje met alleen majeur- en mineur-akkoorden?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Welk akkoord klinkt gespannen en "wil" oplossen naar de grondtoon?',
              options: ['maj7', 'mineur 7', 'dominant 7', 'sus2'],
              correct: 2,
              explain: 'Het dominant-septiemakkoord (bv. G7) is bluesy en trekt naar de grondtoon.',
            },
            {
              type: 'matching',
              prompt: 'Koppel het akkoord aan zijn gevoel:',
              pairs: [
                { left: 'maj7', right: 'dromerig, warm' },
                { left: 'mineur 7', right: 'zacht, soulvol' },
                { left: 'dominant 7', right: 'gespannen, bluesy' },
              ],
              explain: 'Septiemakkoorden geven elk hun eigen kleur aan een progressie.',
            },
          ],
          summary: [
            'Voeg een septiem toe aan een drieklank voor rijkere akkoorden.',
            'maj7 = dromerig, m7 = zacht/soulvol, dom7 = gespannen en wil oplossen.',
            'sus2/sus4 geven een open, zwevend geluid; één 7-akkoord tilt een nummer op.',
          ],
        },
        {
          id: 'm-h-6',
          title: 'De kwintencirkel',
          body:
            'De **kwintencirkel** is misschien wel het handigste schema in de hele muziektheorie: alle twaalf toonsoorten in een cirkel gezet, telkens een **kwint** uit elkaar (C → G → D → A → E …). Het lijkt abstract, maar het is een kaart die heel veel in één keer verklaart.\n\nWat je eruit afleest: **buurtoonsoorten delen bijna al hun noten**, en hoe verder twee toonsoorten uit elkaar staan, hoe meer ze verschillen. Je ziet meteen hoeveel kruisen of mollen een toonsoort heeft, en welke akkoorden "familie" zijn — de **I, IV en V** van een toonsoort staan altijd naast elkaar in de cirkel. Daarom klinken die drie zo vanzelfsprekend samen.\n\nOok handig: bij elke majeur-toonsoort hoort een **relatieve mineur** (dezelfde noten, andere grondtoon) — die vind je een vaste stap verderop. Voor **transponeren**, akkoordprogressies bouwen en begrijpen waarom bepaalde wisselingen "logisch" klinken, is de kwintencirkel je naslagkaart. Je hoeft hem niet uit je hoofd te kennen; weten hoe hij werkt is al de helft.',
          glossary: [
            { term: 'Kwintencirkel', def: 'Alle 12 toonsoorten in een cirkel, telkens een kwint uit elkaar.' },
            { term: 'Relatieve mineur', def: 'De mineur-toonsoort met dezelfde noten als een majeur-toonsoort.' },
          ],
          priming: 'Waarom klinken sommige akkoorden "vanzelfsprekend" samen en andere juist vreemd?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat geldt voor toonsoorten die náást elkaar staan in de kwintencirkel?',
              options: [
                'Ze delen bijna geen noten',
                'Ze delen bijna al hun noten',
                'Ze zijn altijd mineur',
                'Ze klinken vals samen',
              ],
              correct: 1,
              explain: 'Buurtoonsoorten verschillen maar één noot; daarom klinken ze verwant.',
            },
            {
              type: 'truefalse',
              prompt: 'De I-, IV- en V-akkoorden van een toonsoort staan naast elkaar in de cirkel.',
              answer: true,
              explain: 'Vandaar dat die "familie" van akkoorden zo logisch samen klinkt.',
            },
          ],
          summary: [
            'Kwintencirkel = 12 toonsoorten, telkens een kwint uit elkaar.',
            'Buurtoonsoorten delen bijna alle noten; I-IV-V staan naast elkaar.',
            'Handig voor transponeren, progressies en relatieve mineur.',
          ],
        },
      ],
    },
    {
      id: 'piano',
      title: 'Piano & toetsen',
      orbs: [
        {
          id: 'm-p-1',
          title: 'Het toetsenbord lezen',
          body:
            'Een pianotoetsenbord ziet er overweldigend uit, maar het is één klein patroon dat zich herhaalt. Kijk naar de **zwarte toetsen**: ze komen in groepjes van **twee en drie**. Dat patroon is je kompas. De witte toets **links van het groepje van twee zwarte** is altijd een **C**.\n\nVanaf elke C lopen de witte toetsen omhoog: **C – D – E – F – G – A – B**, en dan begint het weer bij C. Die afstand van C tot de volgende C heet een **octaaf** — dezelfde noot, maar hoger. Het hele keyboard is gewoon dat rijtje van zeven letters, keer op keer.\n\nOmdat het patroon overal hetzelfde is, hoef je maar één ding te onthouden (C vinden via de twee zwarte toetsen) om je overal te oriënteren. Leg je rechterduim op een C en speel C-D-E-F-G met je vijf vingers: dat is je eerste positie. Voor jou, die al noten kent van gitaar, is dit vooral een kwestie van het patroon visueel leren herkennen.',
          glossary: [
            { term: 'Octaaf', def: 'Afstand van een noot tot de volgende met dezelfde naam (bv. C tot C).' },
            { term: 'Middle C', def: 'De C ongeveer in het midden van het keyboard; handig oriëntatiepunt.' },
          ],
          priming: 'Hoe zou je op een onbekend keyboard snel kunnen zien waar een "C" zit?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Hoe vind je een C op het keyboard?',
              options: [
                'De witte toets links van de twee zwarte toetsen',
                'De eerste witte toets links',
                'De toets links van de drie zwarte toetsen',
                'Elke tweede witte toets',
              ],
              correct: 0,
              explain: 'Het groepje van twee zwarte toetsen: de witte toets er direct links van is C.',
            },
            {
              type: 'ordering',
              prompt: 'Zet de witte toetsen vanaf C op volgorde:',
              items: ['C', 'D', 'E', 'F', 'G'],
              explain: 'De witte toetsen lopen C-D-E-F-G-A-B en herhalen dan.',
            },
          ],
          summary: [
            'Zwarte toetsen komen in groepjes van 2 en 3 — dat is je kompas.',
            'C ligt links van het groepje van twee zwarte toetsen.',
            'Witte toetsen: C-D-E-F-G-A-B, en dat octaaf herhaalt overal.',
          ],
        },
        {
          id: 'm-p-2',
          title: 'Akkoorden op piano',
          body:
            'De akkoordtheorie die je van gitaar kent, geldt één-op-één op piano — alleen de greep is anders. Een basis-akkoord (**drieklank**) is **grondtoon + terts + kwint**. Op piano pak je daarvoor simpelweg **om de andere witte toets**: speel een toets, sla er één over, speel de volgende, sla er één over, speel de derde.\n\nVoorbeeld: **C majeur** = C – E – G (duim, middelvinger, pink). Wil je het **mineur** maken, dan verlaag je de middelste toon een halve stap: C – Es – G wordt C mineur. Precies dezelfde logica als de terts op gitaar, maar nu zie je het meteen: de middelste noot bepaalt vrolijk of donker.\n\nMet alleen deze drieklank-vorm kun je al de meeste akkoorden spelen: schuif dezelfde "om-en-om"-greep naar D, E, F enzovoort. Combineer dat met de akkoordprogressies (I–V–vi–IV) die je al kent, en je speelt je eerste liedjes met je rechterhand. Piano maakt harmonie zichtbaar — handig om theorie écht te snappen.',
          glossary: [
            { term: 'Drieklank', def: 'Akkoord van drie tonen: grondtoon + terts + kwint.' },
            { term: 'Om-en-om', def: 'Op piano: speel om de andere witte toets voor een basisakkoord.' },
          ],
          priming: 'Je kent de terts-regel van gitaar — hoe zou je een akkoord op piano kunnen vinden?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Welke toetsen vormen een C majeur-akkoord?',
              options: ['C – D – E', 'C – E – G', 'C – F – A', 'C – G – C'],
              correct: 1,
              explain: 'Drieklank = om de andere witte toets: C, E, G.',
            },
            {
              type: 'whyhow',
              prompt: 'Hoe maak je van een majeur-akkoord op piano een mineur-akkoord?',
              model: 'Verlaag de middelste toon (de terts) een halve stap. C-E-G (majeur) wordt C-Es-G (mineur). Dezelfde regel als de terts op gitaar — de middelste noot bepaalt vrolijk of donker.',
            },
          ],
          summary: [
            'Drieklank = grondtoon + terts + kwint; op piano "om de andere toets".',
            'C majeur = C-E-G; mineur = middelste toon een halve stap omlaag.',
            'Zelfde theorie als gitaar, maar zichtbaar gemaakt.',
          ],
        },
        {
          id: 'm-p-3',
          title: 'Twee handen samen',
          body:
            'Het grote verschil met gitaar is dat je op piano **twee onafhankelijke handen** hebt. De klassieke rolverdeling: de **linkerhand** speelt de lage tonen — bas of akkoorden — en de **rechterhand** de melodie of akkoorden hoger op. Samen vormen ze een vol geluid in je eentje.\n\nDie onafhankelijkheid is wennen; je hersenen willen beide handen hetzelfde laten doen. De oplossing is **traag oefenen en opsplitsen**. Leer eerst elke hand apart tot ze "vanzelf" gaat, en voeg ze dan langzaam samen, desnoods noot voor noot. Tempo komt later — eerst de coördinatie.\n\nEen toegankelijke start: speel met je linkerhand alleen de **grondtonen** van je akkoorden (één lage noot per maat) en met je rechterhand het volledige akkoord of een simpel melodietje. Zo houdt je linkerhand het simpel terwijl je rechterhand het werk doet. Net als bij drums (handen en voeten los) is dit puur een kwestie van langzaam inslijpen — jouw discipline en grondigheid spelen hier in je voordeel.',
          glossary: [
            { term: 'Handonafhankelijkheid', def: 'Beide handen los van elkaar iets anders laten spelen.' },
            { term: 'Basnoot', def: 'De lage grondtoon die de linkerhand vaak vasthoudt.' },
          ],
          priming: 'Waarom is piano spelen met twee handen lastiger dan het lijkt — en wat helpt?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is de beste manier om twee handen te leren samenspelen?',
              options: [
                'Meteen op tempo beide handen',
                'Elke hand apart leren, dan traag samenvoegen',
                'Alleen de rechterhand oefenen',
                'Zo snel mogelijk herhalen',
              ],
              correct: 1,
              explain: 'Opsplitsen en langzaam samenvoegen; coördinatie eerst, tempo later.',
            },
            {
              type: 'truefalse',
              prompt: 'De linkerhand speelt meestal de lage tonen (bas/akkoorden).',
              answer: true,
              explain: 'Links laag (bas/akkoorden), rechts hoger (melodie/akkoorden).',
            },
          ],
          summary: [
            'Piano = twee onafhankelijke handen: links laag, rechts melodie.',
            'Leer elke hand apart en voeg traag samen — coördinatie vóór tempo.',
            'Start simpel: linkerhand grondtonen, rechterhand het akkoord/melodie.',
          ],
        },
      ],
    },
    {
      id: 'soleren',
      title: 'Toonladders & soleren',
      orbs: [
        {
          id: 'm-s-1',
          title: 'Toonladders & modi',
          body:
            'Een **toonladder** is een vaste reeks tonen die de "kleur" van een stuk bepaalt. De **majeur-toonladder** volgt het patroon hele-hele-halve-hele-hele-hele-halve stap (in C: precies alle witte toetsen, C tot C). Die klinkt helder en vrolijk. De **natuurlijke mineur** gebruikt dezelfde tonen maar begint op de zesde trap (in A: ook alle witte toetsen, maar van A tot A) en klinkt donkerder.\n\nHier komt een mooi idee bij: verschuif je startnoot binnen diezelfde tonen, dan krijg je **modi** — toonladders met elk hun eigen smaak. Speel de witte toetsen vanaf D en je hebt **dorisch**: mineur-achtig maar met een lichtpuntje, veel gehoord in funk, rock en filmmuziek. Vanaf G krijg je **mixolydisch**: majeur met een bluesy randje, de "rock"-toonladder bij uitstek.\n\nWaarom dit weten? Omdat het je veel meer kleuren geeft dan alleen majeur en mineur. Als je begrijpt dat modi gewoon "dezelfde noten, andere startnoot" zijn, kun je bewust kiezen welke sfeer je oproept — en snappen waarom een nummer klinkt zoals het klinkt.',
          glossary: [
            { term: 'Toonladder', def: 'Vaste reeks tonen die de toonsoort en sfeer bepaalt.' },
            { term: 'Modus', def: 'Toonladder die ontstaat door binnen dezelfde tonen op een andere noot te beginnen.' },
            { term: 'Dorisch / Mixolydisch', def: 'Mineur met lichtpuntje (funk/rock) / majeur met bluesy randje.' },
          ],
          priming: 'Hoe kan dezelfde set witte pianotoetsen zowel vrolijk als droevig klinken?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Hoe ontstaat een modus zoals dorisch?',
              options: [
                'Door nieuwe tonen toe te voegen',
                'Door binnen dezelfde tonen op een andere noot te beginnen',
                'Door alles een halve toon te verlagen',
                'Door sneller te spelen',
              ],
              correct: 1,
              explain: 'Modi = dezelfde tonen, andere startnoot — elk met een eigen kleur.',
            },
            {
              type: 'truefalse',
              prompt: 'De natuurlijke mineur klinkt donkerder dan de majeur-toonladder.',
              answer: true,
              explain: 'Mineur klinkt donkerder/weemoediger; majeur helder en vrolijk.',
            },
          ],
          summary: [
            'Majeur = HHhHHHh, helder; natuurlijke mineur = donkerder.',
            'Modi ontstaan door dezelfde tonen vanaf een andere noot te spelen.',
            'Dorisch (funk/rock) en mixolydisch (bluesy) geven extra kleuren.',
          ],
        },
        {
          id: 'm-s-2',
          title: 'Pentatonisch & blues soleren',
          body:
            'Wil je soleren of improviseren, dan is de **pentatonische toonladder** je beste vriend: vijf noten die bijna altijd goed klinken over een toonsoort. De **mineur-pentatoniek** is de ruggengraat van rock-, blues- en popsolo\'s. Op gitaar zit hij in een handig "boxje" dat je over de hals kunt verschuiven naar elke toonsoort.\n\nVoeg je één extra noot toe — de **blue note** — dan krijg je de **bluestoonladder**, met dat typische rauwe, jankende geluid. Omdat je zo weinig "foute" noten hebt, kun je je aandacht verleggen van *welke* noot naar *hoe* je hem speelt: **ritme, frasering, bendings en gevoel**. Dat is precies waar een solo tot leven komt.\n\nBegin simpel: jam met de mineur-pentatoniek over één akkoord, of over een **blues in A** met je vrienden. Speel weinig noten, laat ruimte, en herhaal kleine motiefjes. Improviseren is geen toverkunst maar een vaardigheid — en de pentatoniek is de veiligste plek om hem te oefenen.',
          glossary: [
            { term: 'Pentatoniek', def: 'Toonladder van vijf noten die bijna altijd goed klinkt; basis van solo\'s.' },
            { term: 'Blue note', def: 'Extra noot die de pentatoniek tot bluestoonladder maakt; rauw geluid.' },
            { term: 'Frasering', def: 'Hóe je noten speelt (ritme, ruimte, bendings) — waar een solo tot leven komt.' },
          ],
          priming: 'Waarom kun je over een blues bijna "niet vals" spelen met de juiste toonladder?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Uit hoeveel noten bestaat een pentatonische toonladder?',
              options: ['Drie', 'Vijf', 'Zeven', 'Twaalf'],
              correct: 1,
              explain: '"Penta" = vijf; weinig noten, weinig kans op "foute" noten.',
            },
            {
              type: 'whyhow',
              prompt: 'Waarom is de pentatoniek een fijne plek om te leren improviseren?',
              model: 'Omdat de vijf noten bijna altijd goed klinken over de toonsoort, heb je weinig "foute" noten. Daardoor kun je je aandacht richten op ritme, frasering en gevoel in plaats van bang zijn om de verkeerde noot te raken.',
            },
          ],
          summary: [
            'Mineur-pentatoniek = vijf noten die bijna altijd passen; basis van solo\'s.',
            'De blue note maakt er de bluestoonladder van.',
            'Focus op ritme/frasering/gevoel; oefen met een blues in A.',
          ],
        },
        {
          id: 'm-s-3',
          title: 'Intervallen & gehoortraining',
          body:
            'Een **interval** is de afstand tussen twee tonen, en je oor leren die te herkennen is de sleutel tot **op gehoor spelen**. De makkelijkste manier om te oefenen: koppel elk interval aan een bekend liedje. Een **kwint** (de eerste sprong van "Twinkle Twinkle"), een **kwart** ("Here Comes the Bride"), een **octaaf** (het begin van "Somewhere Over the Rainbow").\n\nMet wat **gehoortraining** ga je melodieën en akkoordwisselingen herkennen zónder bladmuziek. Je hoort "dit gaat omhoog naar de kwint" en vindt het terug op je instrument. Dit heet **relatief gehoor** — het vermogen tonen ten opzichte van elkaar te plaatsen — en het is gewoon trainbaar, anders dan absoluut gehoor (een noot benoemen zonder referentie), wat zeldzaam is.\n\nPraktisch: oefen dagelijks een paar intervallen, zing ze na, en probeer simpele melodietjes (een liedje, een riff) op gehoor na te spelen. Het is misschien wel de meest waardevolle muzikale vaardigheid: hoe beter je oor, hoe sneller je meespeelt, naspeelt wat je hoort, en met anderen jamt zonder dat er iets op papier staat.',
          glossary: [
            { term: 'Interval', def: 'De afstand tussen twee tonen (bv. kwint, kwart, octaaf).' },
            { term: 'Relatief gehoor', def: 'Tonen ten opzichte van elkaar herkennen; trainbaar.' },
            { term: 'Absoluut gehoor', def: 'Een losse noot benoemen zonder referentie; zeldzaam.' },
          ],
          priming: 'Hoe zou je een interval kunnen onthouden zonder muziektheorie — met een trucje?',
          questions: [
            {
              type: 'matching',
              prompt: 'Koppel het interval aan het herkenningsliedje:',
              pairs: [
                { left: 'Kwint', right: 'Twinkle Twinkle (start)' },
                { left: 'Octaaf', right: 'Over the Rainbow (start)' },
                { left: 'Kwart', right: 'Here Comes the Bride' },
              ],
              explain: 'Bekende liedjes als anker maken intervallen meteen herkenbaar.',
            },
            {
              type: 'truefalse',
              prompt: 'Relatief gehoor is, anders dan absoluut gehoor, gewoon te trainen.',
              answer: true,
              explain: 'Met dagelijkse oefening verbeter je relatief gehoor; absoluut gehoor is zeldzaam.',
            },
          ],
          summary: [
            'Intervallen = afstand tussen tonen; koppel ze aan bekende liedjes.',
            'Relatief gehoor (tonen t.o.v. elkaar) is trainbaar; oefen dagelijks.',
            'Beter gehoor = sneller meespelen en naspelen wat je hoort.',
          ],
        },
      ],
    },
  ],
};

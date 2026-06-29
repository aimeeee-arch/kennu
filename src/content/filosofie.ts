import type { Island } from '../types';

export const filosofie: Island = {
  id: 'filosofie',
  title: 'Filosofie & Stoïcisme',
  blurb: 'Beter denken en leven — van Socrates tot de Stoa.',
  icon: '🏛️',
  color: '#818cf8',
  pos: { x: 60, y: 42 },
  topics: [
    {
      id: 'stoicisme',
      title: 'Stoïcijns leven',
      orbs: [
        {
          id: 'f-1',
          title: 'De dichotomie van controle',
          body:
            'Het hart van de Stoa is één onderscheid, scherp geformuleerd door de filosoof-slaaf **Epictetus**: er zijn dingen die **wél in onze macht** liggen en dingen die dat **niet** zijn. In onze macht: onze oordelen, keuzes, inspanning en hoe we reageren. Niet in onze macht: het weer, andermans gedrag, de uitkomst van dingen, ons lichaam, onze reputatie.\n\nDe meeste onrust, zeggen de stoïcijnen, komt doordat we ons vastklampen aan wat we níét kunnen sturen. We worden boos op het verkeer, piekeren over wat anderen denken, balen van een uitkomst. Verschuif je aandacht naar wat wél van jou is — je eigen inzet en houding — dan verdwijnt een groot deel van die onrust.\n\nDit is geen passieve berusting. Je doet je uiterste best (dat is in je macht), maar laat de uitkomst los (die is het niet). Een sollicitatie, een wedstrijd, een gesprek: bereid je grondig voor, geef alles, en aanvaard daarna rustig hoe het valt. Die scheiding tussen inspanning en uitkomst is verrassend bevrijdend.',
          glossary: [
            { term: 'Dichotomie van controle', def: 'Onderscheid tussen wat wél (oordeel, inzet) en niet (uitkomst, anderen) in je macht is.' },
            { term: 'Epictetus', def: 'Stoïcijns filosoof (ex-slaaf); zijn Enchiridion vat de kernideeën samen.' },
          ],
          priming: 'Waar verspil jij energie aan dat je eigenlijk helemaal niet kunt sturen?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat ligt volgens de Stoa wél in je macht?',
              options: ['Het weer', 'Wat anderen denken', 'Je eigen oordeel en inzet', 'De uitkomst van een wedstrijd'],
              correct: 2,
              explain: 'Je keuzes, oordelen en inspanning zijn van jou; uitkomsten en anderen niet.',
            },
            {
              type: 'truefalse',
              prompt: 'De dichotomie van controle betekent passief alles maar laten gebeuren.',
              answer: false,
              explain: 'Juist niet: je geeft alles (in je macht) en laat enkel de uitkomst los.',
            },
          ],
          summary: [
            'Scheid wat wél (oordeel, inzet) en niet (uitkomst, anderen) in je macht is.',
            'Onrust komt van vastklampen aan het oncontroleerbare.',
            'Geef alles, laat de uitkomst los — geen berusting, maar focus.',
          ],
          sources: [
            { label: 'Epictetus — Enchiridion (Handboekje)', url: 'https://nl.wikipedia.org/wiki/Encheiridion' },
          ],
        },
        {
          id: 'f-2',
          title: 'Memento mori & amor fati',
          body:
            'Twee Latijnse spreuken vatten een groot deel van de stoïcijnse levenskunst samen. **Memento mori** — "gedenk dat je sterft". Klinkt somber, maar het is bedoeld als wekker: juist het besef dat je tijd eindig is, maakt het heden kostbaar. Het helpt je te kiezen wat er echt toe doet en geen energie te verspillen aan kleinigheden of uitstel.\n\nDe Romeinse keizer-filosoof **Marcus Aurelius** schreef het zichzelf telkens voor in zijn dagboek: doe nú wat goed is, want je weet niet hoeveel tijd je hebt. Het is geen morbide gedachte maar een focus-instrument.\n\nDe tweede spreuk, **amor fati** — "houd van je lot" — gaat nog een stap verder dan accepteren. Het vraagt om wat je overkomt, ook het moeilijke, niet alleen te verdragen maar te omarmen als materiaal om mee te werken. Een tegenslag is dan geen onrecht maar een gegeven waar je iets mee dóét. Samen vormen ze een houding: het leven is eindig (dus leef bewust) en grillig (dus werk mét wat het je geeft).',
          glossary: [
            { term: 'Memento mori', def: '"Gedenk dat je sterft" — sterfelijkheid als wekker om bewust te leven.' },
            { term: 'Amor fati', def: '"Houd van je lot" — wat je overkomt omarmen i.p.v. ertegen vechten.' },
            { term: 'Marcus Aurelius', def: 'Romeins keizer; zijn "Meditaties" zijn stoïcijnse dagboeknotities.' },
          ],
          priming: 'Hoe zou het besef dat je tijd eindig is je keuzes van vandaag veranderen?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is de bedoeling van "memento mori"?',
              options: [
                'Somber worden over de dood',
                'Bewuster leven doordat je tijd eindig is',
                'De dood ontkennen',
                'Risico\'s vermijden',
              ],
              correct: 1,
              explain: 'Het besef van eindigheid maakt het heden kostbaar en scherpt je keuzes.',
            },
            {
              type: 'whyhow',
              prompt: 'Wat voegt "amor fati" toe aan het simpelweg accepteren van tegenslag?',
              model: 'Amor fati vraagt niet alleen te verdragen, maar je lot te omarmen als materiaal om mee te werken. Een tegenslag wordt dan geen onrecht maar een gegeven waar je actief iets mee doet — een sterkere, meer betrokken houding dan louter berusten.',
            },
          ],
          summary: [
            'Memento mori: eindigheid als wekker om bewust en gericht te leven.',
            'Amor fati: je lot omarmen, niet alleen verdragen.',
            'Samen: leef bewust (eindig) en werk mét wat het leven geeft (grillig).',
          ],
          sources: [
            { label: 'Marcus Aurelius — Meditaties', url: 'https://nl.wikipedia.org/wiki/Ta_eis_heauton' },
          ],
        },
        {
          id: 'f-3',
          title: 'Deugd & de premeditatie van tegenslag',
          body:
            'Voor de stoïcijnen is er maar één ding dat écht goed is: een **deugdzaam karakter**. Niet rijkdom, status of plezier — die zijn "neutraal", prettig maar niet wezenlijk. Wat telt is hoe je bent: wijs, rechtvaardig, moedig en beheerst. Geluk (*eudaimonia*) is volgens hen geen gevoel dat je najaagt, maar het gevolg van goed leven volgens je beste natuur.\n\nEen praktische oefening hierbij is de **premeditatio malorum**, het vooraf bedenken van wat er mis kan gaan. Stel je \'s ochtends kort voor dat je trein uitvalt, een gesprek stroef loopt, iets kapotgaat. Dat is geen pessimisme maar voorbereiding: als het gebeurt, overvalt het je niet, en als het niet gebeurt, ben je dankbaarder. Seneca raadde zelfs aan af en toe bewust sober te leven, om te merken dat je met minder ook gelukkig kunt zijn.\n\nDe rode draad: richt je op je karakter en je reactie (in je macht), niet op bezit en uitkomst (niet in je macht). Dat maakt je minder afhankelijk van het toeval en steviger als het tegenzit.',
          glossary: [
            { term: 'Deugd', def: 'Goed karakter (wijs, rechtvaardig, moedig, beheerst) — voor de Stoa het enige echte goed.' },
            { term: 'Premeditatio malorum', def: 'Vooraf bedenken wat mis kan gaan; voorbereiding, geen zwartkijken.' },
            { term: 'Eudaimonia', def: 'Een goed, bloeiend leven; gevolg van deugdzaam leven, geen najaagbaar gevoel.' },
          ],
          priming: 'Maakt het vooraf bedenken van tegenslag je angstiger, of juist rustiger?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is volgens de Stoa het enige dat écht goed is?',
              options: ['Rijkdom', 'Status', 'Een deugdzaam karakter', 'Plezier'],
              correct: 2,
              explain: 'Deugd (goed karakter) is het enige echte goed; de rest is "neutraal".',
            },
            {
              type: 'truefalse',
              prompt: 'Premeditatio malorum (tegenslag vooraf bedenken) is bedoeld als voorbereiding, niet als somberen.',
              answer: true,
              explain: 'Het ontneemt tegenslag zijn verrassing en vergroot dankbaarheid als het meevalt.',
            },
          ],
          summary: [
            'Het enige echte goed is een deugdzaam karakter; bezit/status zijn neutraal.',
            'Premeditatio malorum: tegenslag vooraf bedenken als voorbereiding.',
            'Richt je op karakter en reactie, niet op bezit en uitkomst.',
          ],
          sources: [
            { label: 'Seneca — Brieven aan Lucilius', url: 'https://nl.wikipedia.org/wiki/Epistulae_morales_ad_Lucilium' },
          ],
        },
      ],
    },
    {
      id: 'denken',
      title: 'Helder denken',
      orbs: [
        {
          id: 'f-4',
          title: 'Wat is filosofie? Goede vragen stellen',
          body:
            'Filosofie is geen verzameling vage meningen, maar de kunst van het **scherpe vraag stellen**: nadenken over wat we eigenlijk bedoelen en waarom we iets geloven. Waar wetenschap meet wat ís, vraagt filosofie wat iets bétékent — wat is rechtvaardig, wat is kennis, wat is een goed leven?\n\nHet beroemdste gereedschap komt van **Socrates**: de **socratische methode**. In plaats van antwoorden te geven, stelde hij vraag na vraag om aannames bloot te leggen. "Je zegt dat dit eerlijk is — wat bedoel je met eerlijk? Geldt dat altijd? Wat als…?" Door door te vragen ontdek je waar een overtuiging wankelt of juist sterk staat. Zijn beroemde uitspraak: *"Ik weet dat ik niets weet"* — het besef van je eigen onwetendheid is het begin van wijsheid.\n\nDit is verrassend bruikbaar buiten de collegezaal. Bij een beslissing, een discussie of een sterke mening: vraag jezelf "waaróm geloof ik dit, en klopt dat wel?" Goede vragen stellen — aan anderen én aan jezelf — scherpt je denken meer dan snelle antwoorden.',
          glossary: [
            { term: 'Socratische methode', def: 'Door blijven vragen aannames blootleggen en denken aanscherpen.' },
            { term: '"Ik weet dat ik niets weet"', def: 'Socrates: het besef van je eigen onwetendheid is het begin van wijsheid.' },
          ],
          priming: 'Wanneer veranderde een goede vraag jouw kijk op iets meer dan een kant-en-klaar antwoord?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat kenmerkt de socratische methode?',
              options: [
                'Snel het juiste antwoord geven',
                'Door blijven vragen om aannames bloot te leggen',
                'Autoriteit citeren',
                'Stemmen over de waarheid',
              ],
              correct: 1,
              explain: 'Socrates stelde vraag na vraag om denken te toetsen en aan te scherpen.',
            },
            {
              type: 'truefalse',
              prompt: 'Filosofie draait vooral om betere vragen, niet alleen om kant-en-klare antwoorden.',
              answer: true,
              explain: 'Scherpe vragen over betekenis en aannames staan centraal.',
            },
          ],
          summary: [
            'Filosofie = de kunst van scherpe vragen over betekenis en aannames.',
            'Socratische methode: door blijven vragen legt aannames bloot.',
            'Vraag jezelf "waarom geloof ik dit?" — dat scherpt je denken.',
          ],
        },
        {
          id: 'f-5',
          title: 'Geluk: plezier of betekenis?',
          body:
            'Wat is een goed leven — zoveel mogelijk plezier, of iets anders? Filosofen onderscheiden al eeuwen twee soorten geluk. Het **hedonisme** zegt: geluk is genot en de afwezigheid van pijn. Lekker eten, comfort, fijne ervaringen. Niets mis mee, maar het heeft een grens: plezier slijt (je went eraan) en jagen op alleen genot laat vaak een leegte achter.\n\nDaartegenover staat **Aristoteles** met **eudaimonia**, vaak vertaald als "bloei" of "een goed leven". Geluk is voor hem geen voorbijgaand gevoel maar het resultaat van je vermogens goed gebruiken: zinvol werk, betekenisvolle relaties, groei, bijdragen aan iets groters. Dat geeft een dieper, duurzamer soort voldoening dan kortstondig plezier.\n\nDe moderne psychologie bevestigt dit grofweg: mensen die naast plezier ook **betekenis** ervaren, rapporteren een rijker welzijn. Het hoeft geen of-of te zijn — geniet van het aangename én investeer in wat zin geeft. Maar als je moet kiezen waarin je je tijd steekt, wijst de traditie naar betekenis boven louter genot.',
          glossary: [
            { term: 'Hedonisme', def: 'Geluk = genot en de afwezigheid van pijn; vluchtig en went snel.' },
            { term: 'Eudaimonia', def: 'Aristoteles: bloei/een goed leven door je vermogens zinvol te gebruiken.' },
          ],
          priming: 'Maakt meer plezier je op de lange duur gelukkiger — of is er iets dat dieper zit?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat bedoelt Aristoteles met eudaimonia?',
              options: [
                'Zoveel mogelijk genot',
                'Bloei: een goed leven door je vermogens zinvol te gebruiken',
                'Afwezigheid van alle pijn',
                'Rijkdom',
              ],
              correct: 1,
              explain: 'Eudaimonia is duurzaam welzijn uit betekenis en groei, niet vluchtig plezier.',
            },
            {
              type: 'truefalse',
              prompt: 'Puur jagen op plezier botst op een grens omdat genot went.',
              answer: true,
              explain: 'Gewenning (hedonische adaptatie) maakt betekenis een duurzamer bron.',
            },
          ],
          summary: [
            'Hedonisme: geluk = genot; prettig maar vluchtig en went.',
            'Eudaimonia (Aristoteles): bloei door zinvol leven en groei.',
            'Geniet én investeer in betekenis; bij twijfel kiest de traditie betekenis.',
          ],
          sources: [
            { label: 'Aristoteles — Ethica Nicomachea', url: 'https://nl.wikipedia.org/wiki/Ethica_Nicomachea' },
          ],
        },
      ],
    },
  ],
};

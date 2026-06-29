import type { Island } from '../types';

export const groei: Island = {
  id: 'groei',
  title: 'Persoonlijke groei',
  blurb: 'Sterker spreken en communiceren — voortbouwend op je training.',
  icon: '🎤',
  color: '#a78bfa',
  pos: { x: 76, y: 70 },
  topics: [
    {
      id: 'public-speaking',
      title: 'Public speaking',
      orbs: [
        {
          id: 'g-p-1',
          title: 'Structuur boven inhoud',
          body:
            'Een goede speech valt of staat met **structuur**, niet met hoeveel je weet. Het publiek kan maar één draad tegelijk volgen, dus geef ze er één: een heldere **rode draad** van begin tot eind. Een beproefd skelet is *boodschap – drie punten – afsluiting die terugpakt op je opening*.\n\nBegin met je **kernboodschap** in één zin: wat moeten ze onthouden als ze straks weglopen? Alles wat je daarna zegt, hangt aan die zin. Drie steunpunten is genoeg — meer onthoudt niemand. Sluit af door je openingsbeeld of -vraag terug te halen; dat geeft een gevoel van "rond".\n\nVoor jou als Beschouwer is dit goed nieuws: je bent van nature analytisch en grondig, dus structuur ligt je. De valkuil is dat je uit grondigheid te véél wilt vertellen. Discipline zit hier in **weglaten**: kies de drie punten die je boodschap dragen en laat de rest los. Een strak geraamte geeft jou bovendien houvast, waardoor je minder snel gaat ratelen of afdwalen.',
          glossary: [
            { term: 'Rode draad', def: 'De ene lijn die je hele verhaal verbindt.' },
            { term: 'Kernboodschap', def: 'In één zin wat het publiek moet onthouden.' },
            { term: 'Callback', def: 'Je opening terughalen in de afsluiting, voor een "rond" gevoel.' },
          ],
          priming: 'Denk aan een speech die bleef hangen — wat maakte dat je hem kon volgen?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is de beste eerste stap bij het bouwen van een speech?',
              options: [
                'Zoveel mogelijk informatie verzamelen',
                'Je kernboodschap in één zin bepalen',
                'Mooie slides maken',
                'Een grap voorbereiden',
              ],
              correct: 1,
              explain: 'Eén kernzin eerst; daar hang je alles aan. Structuur boven volume.',
            },
            {
              type: 'whyhow',
              prompt: 'Waarom is "weglaten" voor jou (grondig, analytisch) juist de moeilijkste én belangrijkste discipline?',
              model: 'Omdat grondigheid je verleidt om alles te willen vertellen, terwijl het publiek maar één draad en ~drie punten aankan. Kiezen wat eruit gaat, maakt de boodschap sterker en geeft jou houvast om niet te gaan ratelen.',
            },
          ],
          summary: [
            'Structuur draagt de speech, niet de hoeveelheid inhoud.',
            'Eén kernboodschap → drie steunpunten → afsluiting die terugpakt.',
            'Jouw groei zit in weglaten: kies de drie punten die dragen.',
          ],
        },
        {
          id: 'g-p-2',
          title: 'Minder ratelen: de kracht van de pauze',
          body:
            'Ratelen ontstaat uit spanning: je vult elke stilte omdat die ongemakkelijk voelt. Maar voor je publiek is een **pauze** geen leegte — het is ademruimte om je woorden te laten landen. Stilte maakt je juist krachtiger en rustiger ogend.\n\nWerk met **kernzinnen** en laat na de belangrijkste een bewuste stilte vallen van een paar tellen. Tel desnoods in je hoofd "1-2" voor je verder gaat. Dat voelt voor jou eindeloos lang, maar voor de luisteraar is het precies goed. Een pauze vóór een belangrijk punt bouwt spanning op; een pauze erna geeft gewicht.\n\nEen praktische techniek tegen het rateltempo: praat in **korte zinnen** en adem aan het eind van elke zin echt uit. Wie doorademt, vertraagt vanzelf. Schrap stopwoorden ("eigenlijk", "dus", "ehm") door ze te vervangen door — juist — stilte. Oefen dit hardop met een opname: je hoort meteen waar je gaat jakkeren en waar een pauze het verhaal sterker maakt.',
          glossary: [
            { term: 'Pauze', def: 'Bewuste stilte; geeft je woorden gewicht en jou rust.' },
            { term: 'Kernzin', def: 'Eén krachtige zin die een punt samenvat; laat er stilte op volgen.' },
          ],
          priming: 'Wat doet een spreker die zelfverzekerd overkomt vaak juist níét?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is het effect van een bewuste pauze na een kernzin?',
              options: [
                'Het publiek raakt afgeleid',
                'Je woorden krijgen gewicht en ruimte om te landen',
                'Je komt onzeker over',
                'Het verlengt onnodig je speech',
              ],
              correct: 1,
              explain: 'Stilte is geen leegte maar nadruk; het oogt rustig en zelfverzekerd.',
            },
            {
              type: 'truefalse',
              prompt: 'Stopwoorden ("ehm", "dus") kun je het beste vervangen door een korte stilte.',
              answer: true,
              explain: 'Een pauze vult de ruimte beter dan een stopwoord en vertraagt je tempo.',
            },
          ],
          summary: [
            'Pauzes zijn ademruimte, geen leegte — ze maken je krachtiger.',
            'Laat stilte vallen na een kernzin; praat in korte zinnen en adem uit.',
            'Vervang stopwoorden door stilte; oefen met een opname.',
          ],
        },
        {
          id: 'g-p-3',
          title: 'De defensieve reflex herkennen',
          body:
            'Krijg je een kritische vraag, dan schiet er bij velen een **defensieve reflex** aan: meteen verdedigen, uitweiden, of de vraag wegwuiven. Dat komt zelden overtuigend over — het lijkt alsof je je aangevallen voelt. De kunst is om die reflex te herkennen en er een korte pauze tussen te schuiven.\n\nGebruik een vast micro-ritueel: **vraag – adem – kort antwoord**. Adem eerst één keer in en uit. Dat halve seconde haalt de lading eraf en geeft je brein tijd. Beantwoord dan **kort en concreet**; weersta de neiging je antwoord vol te stoppen met bewijslast. Een rustig, beknopt antwoord straalt meer zekerheid uit dan een lange verdediging.\n\nJe mag een vraag ook erkennen ("goeie vraag", of "dat snap ik") voor je antwoordt — dat ontwapent en koopt denktijd zonder defensief te klinken. En weet je het niet? Zeg dat eerlijk en bied aan erop terug te komen. Voor jou, met je competitieve en taakgerichte inslag, is de groei hier: niet "winnen" van de vraagsteller, maar rustig en open reageren.',
          glossary: [
            { term: 'Defensieve reflex', def: 'De automatische neiging je te verdedigen bij kritiek; herken en vertraag hem.' },
            { term: 'Vraag–adem–kort', def: 'Micro-ritueel: adem na de vraag, antwoord dan kort en concreet.' },
          ],
          priming: 'Wat is je eerste impuls als iemand je publiekelijk kritisch bevraagt — en helpt die impuls?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat doe je het best direct na een kritische vraag?',
              options: [
                'Meteen uitgebreid verdedigen',
                'Eén keer ademen, dan kort antwoorden',
                'De vraag wegwuiven',
                'Terugvragen waarom ze dat vragen',
              ],
              correct: 1,
              explain: 'Adem haalt de lading eraf; een kort, concreet antwoord oogt zekerder dan een lange verdediging.',
            },
            {
              type: 'ordering',
              prompt: 'Zet het micro-ritueel bij een lastige vraag op volgorde:',
              items: [
                'Luister de vraag helemaal af',
                'Adem één keer rustig in en uit',
                'Erken kort ("goeie vraag")',
                'Geef een kort, concreet antwoord',
              ],
              explain: 'Afluisteren → adem → erkennen → kort antwoorden. Geen lange verdediging.',
            },
          ],
          summary: [
            'Herken de defensieve reflex en schuif er een pauze tussen.',
            'Vraag – adem – kort, concreet antwoord; geen stapel bewijslast.',
            'Erkennen ontwapent; "weet ik niet, kom ik op terug" mag.',
          ],
        },
        {
          id: 'g-p-4',
          title: 'Lichaamstaal & stem',
          body:
            'Hóe je iets zegt weegt vaak zwaarder dan wat je zegt. Drie zichtbare hefbomen: **houding** (rechtop, ontspannen schouders, voeten stevig op de grond — dat geeft rust en gezag), **oogcontact** (kijk mensen echt aan, per zin even één persoon; dat verbindt en houdt jou rustiger dan over de hoofden heen staren) en **gebaren** (open handen die je woorden ondersteunen, niet friemelen of armen over elkaar).\n\nJe **stem** is je instrument. Varieer **volume, tempo en toonhoogte** en articuleer duidelijk; een monotone stem verliest het publiek, variatie houdt de aandacht vast. Een rustig, iets lager stemgeluid komt zekerder over — en dat krijg je vanzelf als je **vanuit je buik ademt** in plaats van hoog en gejaagd.\n\nVoor jou praktisch: heb je de neiging te ratelen, dan vertragen bewuste ademhaling en echt oogcontact je automatisch. Film jezelf een keer terug — je ziet meteen waar houding of stem afbreuk doen aan je verhaal, en dat is sneller bijgesteld dan je denkt.',
          glossary: [
            { term: 'Oogcontact', def: 'Per zin even één persoon aankijken; verbindt en kalmeert.' },
            { term: 'Stemvariatie', def: 'Wisselen in volume, tempo en toonhoogte om aandacht vast te houden.' },
            { term: 'Buikademhaling', def: 'Laag ademen; geeft een rustiger, zekerder stemgeluid.' },
          ],
          priming: 'Wat maakt dat de ene spreker boeit en de andere — met dezelfde tekst — je laat afdwalen?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat houdt de aandacht van je publiek het best vast?',
              options: ['Een monotone, vlakke stem', 'Variatie in volume, tempo en toonhoogte', 'Zo snel mogelijk praten', 'Naar de grond kijken'],
              correct: 1,
              explain: 'Stemvariatie houdt aandacht; monotoon verliest het publiek.',
            },
            {
              type: 'truefalse',
              prompt: 'Hóe je iets zegt (houding, stem) weegt vaak zwaarder dan de exacte woorden.',
              answer: true,
              explain: 'Non-verbale communicatie bepaalt sterk hoe je boodschap overkomt.',
            },
          ],
          summary: [
            'Houding, oogcontact en open gebaren geven rust en gezag.',
            'Varieer volume/tempo/toonhoogte; adem vanuit je buik voor een zekerder stem.',
            'Film jezelf terug om houding en stem snel bij te stellen.',
          ],
        },
        {
          id: 'g-p-5',
          title: 'Zenuwen de baas',
          body:
            'Zenuwen vóór een presentatie zijn normaal — zelfs ervaren sprekers hebben ze. Het doel is ze niet wegkrijgen maar **benutten**. Die adrenaline is gewoon energie; je kunt hem **herlabelen** van "ik ben bang" naar "ik ben er klaar voor / ik heb er zin in". Dat klinkt gek, maar werkt aantoonbaar beter dan jezelf dwingen kalm te zijn — je lichaam voelt hetzelfde, je hoofd geeft er een andere betekenis aan.\n\nDrie praktische ankers. **Leg je opening woord-voor-woord vast**: de eerste dertig seconden zijn het spannendst, en als die vastliggen val je niet stil. **Adem rustig** vlak voor je begint — een lange uitademing zet je zenuwstelsel in een kalmere stand. En **richt je op je boodschap, niet op jezelf**: je bent er om iets te brengen, niet om beoordeeld te worden.\n\nOnthoud tot slot: het publiek ziet je zenuwen veel minder dan jij ze voelt. Wat vanbinnen een storm is, oogt vanbuiten meestal rustig — dus je hoeft je nervositeit niet te verbergen, alleen je verhaal te vertellen.',
          glossary: [
            { term: 'Herlabelen', def: 'Spanning herinterpreteren als energie/opwinding i.p.v. angst (reappraisal).' },
            { term: 'Opening vastleggen', def: 'De eerste 30 seconden woordelijk voorbereiden zodat je niet vastloopt.' },
          ],
          priming: 'Werkt "blijf rustig" tegen zenuwen, of zou er een betere strategie zijn?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is een effectieve manier om met podiumzenuwen om te gaan?',
              options: [
                'De spanning herlabelen als energie/zin',
                'Net doen alsof je niet zenuwachtig bent',
                'De opening improviseren',
                'Je richten op hoe je beoordeeld wordt',
              ],
              correct: 0,
              explain: 'Herlabelen ("ik heb er zin in") werkt beter dan jezelf kalm dwingen.',
            },
            {
              type: 'truefalse',
              prompt: 'Het publiek ziet je zenuwen meestal minder dan jij ze zelf voelt.',
              answer: true,
              explain: 'Wat vanbinnen een storm is, oogt vanbuiten vaak rustig.',
            },
          ],
          summary: [
            'Zenuwen zijn normaal — herlabel de adrenaline als energie.',
            'Leg je opening vast, adem lang uit, focus op je boodschap.',
            'Je publiek ziet je zenuwen minder dan jij ze voelt.',
          ],
          sources: [
            { label: 'Brooks (2014) — "Get excited" reappraisal (APA)', url: 'https://www.apa.org/pubs/journals/releases/xge-a0035325.pdf' },
          ],
        },
      ],
    },
    {
      id: 'communicatie',
      title: 'Communicatie & DISC',
      orbs: [
        {
          id: 'g-c-1',
          title: 'Jouw profiel: de Beschouwer',
          body:
            'In het **DISC**-model staan vier stijlen: Dominant (rood, daadkracht), Invloed (geel, mensen), Stabiel (groen, rust) en Consciëntieus (blauw, precisie). Jouw profiel is dat van de **Beschouwer (CDS)**: vooral blauw-groen met een competitieve rand. Dat betekent: analytisch, grondig, kalm, taakgericht en gedreven om het goed te doen.\n\nDie stijl heeft echte krachten. Je denkt voor je spreekt, onderbouwt met feiten, blijft rustig onder druk en levert kwaliteit. In overleg ben je degene die de gaten in een plan ziet. Mensen kunnen op je bouwen omdat je doordacht en betrouwbaar bent.\n\nElke stijl heeft ook een schaduwkant. Bij de Beschouwer: je kunt te lang in de analyse blijven hangen, terughoudend zijn met je gevoel, en — door die competitieve inslag — een discussie willen "winnen". Het punt van een profiel kennen is niet jezelf in een hokje stoppen, maar bewust kiezen wanneer je je natuurlijke stijl inzet en wanneer je er juist even van afwijkt. Dat zelfinzicht is de basis voor de volgende stappen.',
          glossary: [
            { term: 'DISC', def: 'Model met vier communicatiestijlen: Dominant, Invloed, Stabiel, Consciëntieus.' },
            { term: 'Beschouwer (CDS)', def: 'Jouw profiel: analytisch, grondig, kalm, taakgericht, met competitieve rand.' },
          ],
          priming: 'Wat zijn jouw natuurlijke sterke punten in een overleg — en waar slaan ze door?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is een typische valkuil van de Beschouwer-stijl?',
              options: [
                'Te impulsief beslissen',
                'Te lang in de analyse blijven hangen',
                'Te veel kletsen',
                'Geen oog voor detail',
              ],
              correct: 1,
              explain: 'Grondigheid kan doorslaan in eindeloos analyseren en terughoudendheid met gevoel.',
            },
            {
              type: 'truefalse',
              prompt: 'Je profiel kennen betekent dat je je stijl bewust kunt aanpassen aan de situatie.',
              answer: true,
              explain: 'Zelfinzicht laat je kiezen wanneer je je natuurlijke stijl inzet of er even van afwijkt.',
            },
          ],
          summary: [
            'DISC: vier stijlen; jij bent de Beschouwer (CDS), analytisch en grondig.',
            'Krachten: doordacht, feitelijk, kalm onder druk, betrouwbaar.',
            'Schaduw: blijven analyseren, gevoel inhouden, willen "winnen".',
          ],
        },
        {
          id: 'g-c-2',
          title: 'Emotie tonen & waardering geven',
          body:
            'Twee groeipunten die vaak bij de taakgerichte, blauwe stijl horen: **gevoel laten zien** en **waardering uitspreken**. Niet omdat dat "soft" is, maar omdat het je effectiever maakt. Mensen onthouden hoe je hen liet voelen; pure feiten landen minder goed dan feiten met een menselijke laag eronder.\n\nEmotie tonen hoeft niet groot. Eén persoonlijke zin — "dit vond ik echt mooi om te zien" of "hier baal ik van" — maakt je verhaal geloofwaardiger en menselijker. In een speech raakt een klein, echt voorbeeld of een eerlijk "ik vond dit spannend" je publiek meer dan nog een argument.\n\n**Waardering** is een spier die je kunt trainen. Maak het concreet en specifiek: niet "goed gedaan", maar "de manier waarop jij dat gesprek oppakte, scheelde ons echt tijd". Specifiek compliment = geloofwaardig compliment. Een simpele gewoonte: spreek elke dag één oprechte waardering uit, op het werk of thuis bij Do. Voor een taakgericht type voelt dit eerst onwennig, maar juist daarom levert het veel op — het versterkt je relaties en je impact als spreker en collega.',
          glossary: [
            { term: 'Waardering', def: 'Concreet en specifiek benoemen wat iemand goed deed; trainbare gewoonte.' },
            { term: 'Menselijke laag', def: 'Een persoonlijke/emotionele toevoeging die feiten beter laat landen.' },
          ],
          priming: 'Wanneer raakte een verhaal jou meer dan de feiten alleen — en waardoor kwam dat?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Welk compliment is het meest effectief?',
              options: [
                '"Goed gedaan"',
                '"De manier waarop jij dat gesprek oppakte, scheelde ons echt tijd"',
                '"Prima hoor"',
                '"Top, ga zo door"',
              ],
              correct: 1,
              explain: 'Specifiek en concreet = geloofwaardig. Vaag lof landt nauwelijks.',
            },
            {
              type: 'whyhow',
              prompt: 'Waarom maakt een beetje emotie tonen jou juist een effectievere spreker, geen "softere"?',
              model: 'Omdat mensen onthouden hoe je hen liet voelen; een persoonlijke of emotionele laag laat feiten beter beklijven en maakt je geloofwaardiger en menselijker. Het vergroot je impact in plaats van die te verkleinen.',
            },
          ],
          summary: [
            'Emotie tonen maakt je geloofwaardiger; één echte persoonlijke zin volstaat.',
            'Waardering: maak het concreet en specifiek, niet "goed gedaan".',
            'Train het: spreek dagelijks één oprechte waardering uit.',
          ],
        },
        {
          id: 'g-c-3',
          title: 'Echt luisteren',
          body:
            'Goede communicatie is voor de helft **luisteren** — en dat is een actieve vaardigheid, geen passieve. **Actief luisteren** betekent dat je aandacht echt bij de ander is in plaats van dat je alvast je antwoord zit te bedenken. Laat met kleine signalen merken dat je luistert (knikken, "mm-hm") en **vat samen** wat je hoorde: "dus als ik je goed begrijp, …". Dat voorkomt misverstanden én laat de ander zich gehoord voelen.\n\nStel **open vragen** (wie, wat, hoe) in plaats van ja/nee-vragen; die nodigen uit tot meer en geven je echte informatie. En weersta de reflex om meteen op te lossen of te oordelen — vaak wil iemand eerst gehoord worden voordat hij openstaat voor jouw idee.\n\nVoor jou, taakgericht en oplossingsgericht, zit de groei juist hier: eerst luisteren en doorvragen, dán pas je oplossing geven. Dat maakt je niet trager maar effectiever — mensen werken liever met iemand die hen echt hoort, en je oplossing raakt vaker doel omdat je het echte probleem te pakken hebt.',
          glossary: [
            { term: 'Actief luisteren', def: 'Volledige aandacht bij de ander, niet je antwoord voorbereiden.' },
            { term: 'Samenvatten', def: '"Dus als ik je goed begrijp…" — checkt begrip en laat de ander zich gehoord voelen.' },
            { term: 'Open vraag', def: 'Vraag met wie/wat/hoe die uitnodigt tot meer dan ja/nee.' },
          ],
          priming: 'Wanneer voelde jij je echt gehoord — en wat deed de ander toen precies?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Welke vraag is een open vraag?',
              options: ['"Ben je het ermee eens?"', '"Hoe kijk jij hiernaar?"', '"Zullen we dit doen?"', '"Klopt dat?"'],
              correct: 1,
              explain: 'Open vragen (wie/wat/hoe) nodigen uit tot meer dan ja/nee.',
            },
            {
              type: 'whyhow',
              prompt: 'Waarom is eerst luisteren en samenvatten, vóór je met een oplossing komt, juist effectiever?',
              model: 'Omdat je dan het échte probleem te pakken krijgt en de ander zich gehoord voelt en openstaat voor je idee. Meteen oplossen mist vaak de kern en voelt voor de ander alsof je niet luistert.',
            },
          ],
          summary: [
            'Luisteren is actief: aandacht erbij, niet je antwoord voorbereiden.',
            'Vat samen en stel open vragen (wie/wat/hoe).',
            'Eerst luisteren/doorvragen, dán oplossen — effectiever en verbindender.',
          ],
        },
      ],
    },
  ],
};

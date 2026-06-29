import type { Island } from '../types';

export const koken: Island = {
  id: 'koken',
  title: 'Koken',
  blurb: 'Basistechniek en smaak — koken zonder recept durven.',
  icon: '🍳',
  color: '#84cc16',
  pos: { x: 16, y: 80 },
  topics: [
    {
      id: 'techniek',
      title: 'Basistechniek',
      orbs: [
        {
          id: 'k-t-1',
          title: 'Mise en place',
          body:
            '**Mise en place** is Frans voor "alles op zijn plek": voordat je het vuur aanzet, snij je álles, meet je af en zet je je ingrediënten klaar in bakjes. Profs doen niet anders, en het is dé reden dat hun koken er zo soepel uitziet.\n\nWaarom werkt het zo goed? Omdat koken vaak sneller gaat dan je denkt. Sta je halverwege nog ui te snijden terwijl de knoflook al bruin wordt, dan verbrandt het. Door vooraf voor te bereiden, hoef je tijdens het koken alleen nog maar te combineren — geen paniek, geen aangebrande pannen.\n\nLees ook eerst het hele recept door, van begin tot eind. Zo weet je welke stappen tegelijk lopen en wat wanneer moet. Voor jou, met je grondige inslag, sluit dit perfect aan: koken wordt minder improvisatie-onder-druk en meer een rustig proces dat je controleert. Begin klein — gewoon je groenten snijden voor je de pan pakt — en je merkt meteen verschil.',
          glossary: [
            { term: 'Mise en place', def: 'Alles vooraf snijden, afmeten en klaarzetten voor je begint te koken.' },
          ],
          priming: 'Waarom raken thuiskoks vaak in tijdnood terwijl een kok in een restaurant rustig blijft?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is de kern van mise en place?',
              options: [
                'Zo snel mogelijk koken',
                'Alles vooraf klaarzetten en afmeten',
                'Improviseren tijdens het koken',
                'Alles in één pan doen',
              ],
              correct: 1,
              explain: 'Vooraf voorbereiden = tijdens het koken alleen nog combineren; geen paniek.',
            },
            {
              type: 'truefalse',
              prompt: 'Het hele recept vooraf doorlezen hoort bij goede voorbereiding.',
              answer: true,
              explain: 'Zo weet je welke stappen tegelijk lopen en wat wanneer moet.',
            },
          ],
          summary: [
            'Mise en place = alles snijden/afmeten/klaarzetten vóór het vuur aan gaat.',
            'Lees het hele recept eerst door.',
            'Resultaat: rustig, gecontroleerd koken zonder aanbranden.',
          ],
        },
        {
          id: 'k-t-2',
          title: 'Smaak in balans: zout, vet, zuur, hitte',
          body:
            'Volgens kok en schrijver Samin Nosrat draait goed koken om vier elementen: **zout, vet, zuur en hitte**. Snap je die, dan kun je bijna elk gerecht op smaak brengen — ook zonder recept.\n\n**Zout** versterkt smaak; het is geen aparte smaak maar een vergrootglas voor alle andere. Te flauw eten heeft meestal gewoon te weinig zout. **Vet** (olie, boter) draagt smaak en geeft een vollere textuur. **Zuur** (citroen, azijn) brengt balans: een scheutje zuur maakt een vet of zwaar gerecht meteen frisser en levendiger. **Hitte** bepaalt de textuur en bruining.\n\nDe grootste eye-opener voor de meeste thuiskoks: als een gerecht "iets mist", is het antwoord vaak **zout of zuur**. Smaakt het plat? Voeg een snuf zout toe. Smaakt het zwaar of saai? Een paar druppels citroen of azijn. Proef, voeg toe, proef opnieuw. Met deze vier knoppen stuur je elke maaltijd bij.',
          glossary: [
            { term: 'Zout', def: 'Versterkt en opent alle andere smaken; tegen flauwheid.' },
            { term: 'Zuur', def: 'Citroen/azijn; brengt balans en frist vette of zware gerechten op.' },
            { term: 'Vet', def: 'Olie/boter; draagt smaak en geeft volle textuur.' },
          ],
          priming: 'Een gerecht "mist iets" maar je weet niet wat. Welke twee dingen voeg je als eerste toe?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Een gerecht smaakt vlak en flauw. Wat helpt meestal het eerst?',
              options: ['Meer water', 'Een snuf zout', 'Meer koken', 'Suiker'],
              correct: 1,
              explain: 'Zout is een vergrootglas voor smaak; flauwheid = vaak te weinig zout.',
            },
            {
              type: 'whyhow',
              prompt: 'Waarom maakt een scheutje citroen of azijn een vet of zwaar gerecht lekkerder?',
              model: 'Zuur brengt balans: het snijdt door vet en zwaarte heen en maakt het geheel frisser en levendiger. Daardoor proeft het minder "plat" en komen de andere smaken beter uit.',
            },
          ],
          summary: [
            'Vier knoppen: zout, vet, zuur, hitte (Samin Nosrat).',
            'Zout versterkt smaak; zuur brengt balans en frisheid.',
            '"Mist iets"? Begin met zout of zuur — proef en stel bij.',
          ],
          sources: [
            { label: 'Samin Nosrat — Salt, Fat, Acid, Heat', url: 'https://www.saltfatacidheat.com/' },
          ],
        },
        {
          id: 'k-t-3',
          title: 'Bakken & de Maillard-reactie',
          body:
            'Die heerlijke goudbruine korst op een biefstuk, gebakken ui of geroosterd brood komt van de **Maillard-reactie**: een chemische reactie tussen eiwitten en suikers die op gang komt bij hoge temperatuur (grofweg vanaf 140 °C). Die bruining levert honderden nieuwe smaakstoffen op — vandaar dat aangebakken eten zoveel rijker smaakt.\n\nDrie regels om dat te laten lukken. **Eén: de pan moet écht heet zijn** voordat het eten erin gaat. **Twee: dep vlees droog** — water op het oppervlak moet eerst verdampen, en zolang dat gebeurt blijft de temperatuur rond 100 °C en bruint er niets (het gaat dan stomen i.p.v. bakken). **Drie: overlaad de pan niet** — te veel tegelijk koelt de pan af en geeft datzelfde stoom-effect.\n\nGeef het bovendien tijd en draai niet te vroeg: laat een stuk vlees of groente rustig liggen tot er een korst is, dan laat het vanzelf los van de pan. Eén veiligheidspunt: kip, gehakt en kip-/varkensworst moeten altijd **helemaal gaar** zijn (kerntemperatuur 75 °C), ook al heb je een mooie korst.',
          glossary: [
            { term: 'Maillard-reactie', def: 'Bruining van eiwitten en suikers bij hoge hitte (vanaf ~140 °C); bron van veel smaak.' },
            { term: 'Stomen i.p.v. bakken', def: 'Bij te veel vocht/te volle pan blijft het rond 100 °C en bruint er niets.' },
          ],
          priming: 'Waarom wordt vlees soms grijs en taai in plaats van mooi bruin?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat voorkomt een mooie bruine korst het vaakst?',
              options: [
                'Een te hete pan',
                'Een te volle of te koele pan met nat oppervlak',
                'Te weinig zout',
                'Een te zware pan',
              ],
              correct: 1,
              explain: 'Vocht en een overvolle pan houden de temperatuur rond 100 °C → stomen, geen bruining.',
            },
            {
              type: 'ordering',
              prompt: 'Zet de stappen voor een goede korst op volgorde:',
              items: [
                'Vlees droogdeppen',
                'Pan goed heet laten worden',
                'In niet te grote porties bakken',
                'Laten liggen tot het loslaat',
              ],
              explain: 'Droogdeppen → hete pan → niet overladen → laten liggen tot de korst loslaat.',
            },
          ],
          summary: [
            'Maillard = bruining bij hoge hitte; bron van diepe smaak.',
            'Hete pan, droog oppervlak, pan niet overladen; draai niet te vroeg.',
            'Kip/gehakt altijd gaar tot kerntemperatuur 75 °C.',
          ],
          sources: [
            { label: 'Voedingscentrum — vlees & kerntemperatuur', url: 'https://www.voedingscentrum.nl/encyclopedie/vlees.aspx' },
          ],
        },
        {
          id: 'k-t-4',
          title: 'Proeven & op smaak brengen',
          body:
            'Het belangrijkste gereedschap in de keuken is je eigen mond. Goede koks **proeven constant** — niet één keer aan het eind, maar tijdens het hele proces. Zo stuur je bij voordat het te laat is, en leer je wat een gerecht nodig heeft.\n\nBreng smaak op in **laagjes**, niet in één keer aan het eind. Een beetje zout bij de uien, nog wat bij de saus, proeven, bijstellen. Zout dat meekookt smaakt anders (ronder) dan een hoop zout dat je er op het laatst overheen gooit. Hetzelfde geldt voor kruiden: gedroogde kruiden mogen mee­koken zodat ze hun smaak afgeven, verse kruiden voeg je juist op het laatst toe zodat ze fris blijven.\n\nEen handige reflex: vlak voor het opdienen proef je nog één keer en stel je de balans bij met de knoppen uit de smaak-orb (zout, zuur). Net te flauw? Snufje zout. Net te zwaar? Druppel citroen. Door te blijven proeven word je sneller onafhankelijk van recepten — je vertrouwt op je smaak in plaats van op exacte hoeveelheden.',
          glossary: [
            { term: 'In laagjes kruiden', def: 'Beetje bij beetje op smaak brengen tijdens het koken i.p.v. alles aan het eind.' },
            { term: 'Verse vs gedroogde kruiden', def: 'Gedroogd mag meekoken; vers voeg je op het laatst toe voor frisheid.' },
          ],
          priming: 'Wanneer proef jij meestal je eten — en wanneer zou een kok dat doen?',
          questions: [
            {
              type: 'truefalse',
              prompt: 'Je kunt het beste pas helemaal aan het eind op smaak brengen.',
              answer: false,
              explain: 'Breng smaak in laagjes aan en proef constant; meegekookt zout smaakt ronder.',
            },
            {
              type: 'matching',
              prompt: 'Koppel wanneer je toevoegt:',
              pairs: [
                { left: 'Gedroogde kruiden', right: 'mogen meekoken' },
                { left: 'Verse kruiden', right: 'op het laatst toevoegen' },
                { left: 'Te flauw', right: 'snufje zout' },
                { left: 'Te zwaar', right: 'druppel citroen' },
              ],
              explain: 'Gedroogd mee, vers laat; bijsturen met zout (flauw) of zuur (zwaar).',
            },
          ],
          summary: [
            'Proef constant, niet alleen aan het eind.',
            'Breng smaak in laagjes aan; gedroogde kruiden mee, verse op het laatst.',
            'Vlak voor opdienen: laatste check, bijstellen met zout/zuur.',
          ],
        },
        {
          id: 'k-t-5',
          title: 'Sauzen: emulsies & pansaus',
          body:
            'Een goede saus tilt een simpel gerecht naar restaurantniveau, en de meeste draaien om één van twee principes. Het eerste is de **emulsie**: twee dingen die normaal niet mengen — vet en water of zuur — toch samenbrengen tot iets romigs. Een **vinaigrette** is de simpelste: klop olie beetje bij beetje door azijn of citroen met een snufje mosterd (de mosterd helpt het bij elkaar te houden). Mayonaise en hollandaise werken op precies hetzelfde idee.\n\nHet tweede is de **pansaus**. Na het bakken van vlees of groente zitten er bruine aanbaksels in de pan — pure smaak. Giet er een scheut vocht bij (bouillon, wijn of water), schraap de bodem los (**deglaceren**), laat even inkoken en roer er eventueel een klontje koude boter door. Zo maak je in vijf minuten een saus uit wat eerst "niets" leek.\n\nWil je een saus binden tot iets dikkers en gladders, gebruik dan een **roux**: gelijke delen boter en bloem kort samen garen, en daarna beetje bij beetje vocht (melk, bouillon) erbij kloppen. Dat is de basis onder bechamel en kaassaus. Drie technieken, eindeloos veel sauzen.',
          glossary: [
            { term: 'Emulsie', def: 'Vet en water/zuur samenbrengen tot iets romigs (vinaigrette, mayo).' },
            { term: 'Deglaceren', def: 'Bruine aanbaksels in de pan losschrapen met een scheut vocht — pure smaak.' },
            { term: 'Roux', def: 'Boter + bloem samen garen, dan vocht erbij; bindt een saus glad en dik.' },
          ],
          priming: 'Hoe maakt een kok in een paar minuten een saus uit een "lege" koekenpan?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Hoe heet het losschrapen van bruine aanbaksels met een scheut vocht?',
              options: ['Emulgeren', 'Deglaceren', 'Blancheren', 'Karamelliseren'],
              correct: 1,
              explain: 'Deglaceren: de fond losschrapen met vocht = basis van een pansaus.',
            },
            {
              type: 'truefalse',
              prompt: 'Een snufje mosterd helpt een vinaigrette bij elkaar te houden.',
              answer: true,
              explain: 'Mosterd werkt als emulgator: het houdt olie en zuur gemengd.',
            },
          ],
          summary: [
            'Emulsie: vet + zuur/water romig mengen (vinaigrette, mayo); mosterd helpt binden.',
            'Pansaus: deglaceren met vocht, inkoken, monteren met boter.',
            'Roux (boter + bloem) bindt een saus glad en dik.',
          ],
        },
      ],
    },
    {
      id: 'slim',
      title: 'Slim koken',
      orbs: [
        {
          id: 'k-s-1',
          title: 'Snijden & je mes',
          body:
            'Een verrassend feit: een **scherp mes is veiliger dan een bot mes**. Een bot mes glijdt weg en je moet duwen; een scherp mes snijdt waar je het richt, met weinig kracht. De meeste snijwonden thuis komen van botte messen die slippen.\n\nLeer twee dingen en je bent het grootste deel kwijt. **Eén: de klauwgreep.** Houd het ingrediënt vast met je vingertoppen naar binnen gekruld, zodat je knokkels naar voren wijzen. Het mes leunt tegen je knokkels en geleidt zo de snede — je vingertoppen kunnen er niet bij. **Twee: laat het mes het werk doen** met een rollende of naar voren schuivende beweging, niet met hakkracht.\n\nLeg ook een vochtige doek of antislipmatje onder je snijplank zodat die niet wegglijdt. En koop liever één goed, scherp koksmes dan een la vol stompe messen. Met een beetje oefening snij je sneller, veiliger en met meer plezier — en mise en place gaat ineens veel vlotter.',
          glossary: [
            { term: 'Klauwgreep', def: 'Vingertoppen ingekruld, knokkels naar voren; het mes leunt veilig tegen je knokkels.' },
            { term: 'Scherp = veilig', def: 'Een scherp mes glijdt niet weg en vraagt weinig kracht; bot is juist gevaarlijker.' },
          ],
          priming: 'Is een bot mes veiliger of gevaarlijker dan een scherp mes — en waarom?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Waarom is een scherp mes veiliger?',
              options: [
                'Het snijdt langzamer',
                'Het glijdt niet weg en vraagt weinig kracht',
                'Het is lichter',
                'Het is korter',
              ],
              correct: 1,
              explain: 'Botte messen slippen en je moet duwen — daar komen de meeste snijwonden van.',
            },
            {
              type: 'truefalse',
              prompt: 'Bij de klauwgreep wijzen je vingertoppen naar binnen gekruld, knokkels naar voren.',
              answer: true,
              explain: 'Zo geleiden je knokkels het mes en kunnen je vingertoppen er niet bij.',
            },
          ],
          summary: [
            'Een scherp mes is veiliger dan een bot mes.',
            'Klauwgreep: vingertoppen ingekruld, mes tegen je knokkels.',
            'Antislip onder de plank; liever één goed koksmes.',
          ],
        },
        {
          id: 'k-s-2',
          title: 'Plannen & restjes',
          body:
            'Lekker en ontspannen koken door de week begint niet in de keuken maar bij **een beetje planning**. Bedenk aan het begin van de week een paar maaltijden en doe daar gericht boodschappen voor. Zo sta je nooit om zes uur met een lege koelkast en een leeg hoofd.\n\nWerk met een **basisvoorraad** die altijd in huis is: olie, ui, knoflook, een paar kruiden, pasta/rijst, blik tomaten, eieren. Met die basis kun je bijna altijd iets fatsoenlijks maken, ook zonder uitgebreid recept. Kook daarnaast bewust **een grotere portie** en bewaar de helft: de avond erna heb je in vijf minuten een maaltijd, of je neemt het mee als lunch.\n\nEen handige gewoonte is **batch-koken**: maak op een rustig moment een grote pan saus, soep of stoofpot en verdeel die in porties voor de vriezer. Net als met mise en place geldt: een beetje vooruit denken bespaart je later veel stress. Voor jullie met een baby op komst is dit goud waard — een gevulde vriezer is rust in de eerste weken.',
          glossary: [
            { term: 'Basisvoorraad', def: 'Vaste ingrediënten die altijd in huis zijn om snel iets te maken.' },
            { term: 'Batch-koken', def: 'In één keer een grote hoeveelheid maken en in porties invriezen.' },
          ],
          priming: 'Wat zou je nú kunnen doen zodat koken straks met een baby in huis makkelijker is?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is een slim idee met het oog op de eerste weken met een baby?',
              options: [
                'Elke dag vers en uitgebreid koken',
                'Batch-koken en porties invriezen',
                'Alleen afhalen',
                'Niet meer plannen',
              ],
              correct: 1,
              explain: 'Een gevulde vriezer met porties geeft rust als er weinig tijd is.',
            },
            {
              type: 'whyhow',
              prompt: 'Hoe helpt een vaste basisvoorraad je door de week?',
              model: 'Met olie, ui, knoflook, kruiden, pasta/rijst, blik tomaten en eieren in huis kun je bijna altijd iets fatsoenlijks maken zonder uitgebreid recept of extra boodschappen — minder kans op een lege koelkast en stress om zes uur.',
            },
          ],
          summary: [
            'Plan een paar maaltijden per week en doe gericht boodschappen.',
            'Houd een basisvoorraad aan; kook grotere porties en bewaar de helft.',
            'Batch-koken + vriezer = rust, zeker met een baby op komst.',
          ],
        },
        {
          id: 'k-s-3',
          title: 'Groenten op smaak',
          body:
            'Groenten zijn vaak saai als ze gewoon gekookt worden, maar met de juiste techniek juist het lekkerste op je bord. De grootste upgrade: **roosteren in de oven** in plaats van koken. Hoge hitte met wat olie en zout geeft dezelfde bruining (de Maillard-reactie uit het bak-orb) en concentreert de smaak, terwijl koken smaak juist uitspoelt in het water.\n\nVoor felgroene groente zoals sperziebonen of broccoli is **blancheren** ideaal: heel kort in kokend water en dan meteen in ijswater. Zo behoud je de knapperige beet én de felle kleur, in plaats van een slappe, vale boel. Daarna kun je ze nog even opbakken met wat knoflook.\n\nEn vergeet het **zout** niet: groente heeft het net zo hard nodig als de rest van je gerecht. Maak af met een beetje vet (olijfolie of boter) en eventueel iets zuurs (citroen), zodat het niet flets blijft. Vuistregel: kies roosteren of kort blancheren boven lang doorkoken, en breng altijd op smaak.',
          glossary: [
            { term: 'Roosteren', def: 'In de oven met olie/zout op hoge hitte; bruint en concentreert smaak.' },
            { term: 'Blancheren', def: 'Heel kort koken en dan in ijswater; behoudt beet en felle kleur.' },
          ],
          priming: 'Waarom smaken geroosterde groenten meestal veel voller dan gekookte?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Waarom is roosteren vaak lekkerder dan koken?',
              options: [
                'Het gaat sneller',
                'Bruining concentreert smaak; koken spoelt smaak juist uit',
                'Het kost minder olie',
                'Groente wordt zachter',
              ],
              correct: 1,
              explain: 'Hoge droge hitte bruint en concentreert; in water lekt smaak weg.',
            },
            {
              type: 'truefalse',
              prompt: 'Blancheren + meteen ijswater behoudt de felle kleur en de beet.',
              answer: true,
              explain: 'Het koken stopt direct, dus kleur en knapperigheid blijven.',
            },
          ],
          summary: [
            'Roosteren > koken: bruint en concentreert smaak.',
            'Blancheren (kort + ijswater) houdt kleur en beet.',
            'Zout groente net zo goed; maak af met vet en iets zuurs.',
          ],
        },
        {
          id: 'k-s-4',
          title: 'Eieren beheersen',
          body:
            'Eieren zijn de goedkoopste manier om koken te oefenen, want ze reageren direct op hitte en techniek. De rode draad: **eieren houden van zacht vuur**. Te hoog en te lang maakt ze droog en rubberig; lager en korter houdt ze zacht en smeuïg.\n\n**Roerei**: laag vuur, rustig blijven roeren, en haal de pan van het vuur net vóór het "klaar" lijkt — een ei **gaart na**, dus op het vuur tot het droog is betekent rubber op je bord. Voor een **gekookt ei** bepaalt de timing vanaf kokend water alles: zo\'n 6 minuten geeft een lopende dooier, 8-9 minuten smeuïg, en 10-12 minuten hard. Daarna afspoelen onder koud water laat ze makkelijker pellen.\n\nEen **omelet of bakei** doe je op middelhoog vuur met genoeg boter, en haal je van het vuur zodra de bovenkant net niet meer glanst. Het patroon is overal hetzelfde: het ei is je oefenobject voor hitte en timing. Beheers je het ei, dan beheers je het bakken in het algemeen.',
          glossary: [
            { term: 'Nagaren', def: 'Doorgaren door restwarmte; haal eieren van het vuur vóór ze "klaar" lijken.' },
            { term: 'Roerei', def: 'Op laag vuur, roerend; van het vuur net voor het droog is = romig.' },
          ],
          priming: 'Waarom wordt roerei soms droog en rubberig in plaats van romig?',
          questions: [
            {
              type: 'matching',
              prompt: 'Koppel de kooktijd (vanaf kokend water) aan het resultaat:',
              pairs: [
                { left: '~6 minuten', right: 'lopende dooier' },
                { left: '~8-9 minuten', right: 'smeuïg' },
                { left: '~10-12 minuten', right: 'hard' },
              ],
              explain: 'Hoe langer in kokend water, hoe vaster de dooier.',
            },
            {
              type: 'truefalse',
              prompt: 'Je haalt roerei het best van het vuur net vóór het helemaal gaar lijkt.',
              answer: true,
              explain: 'Het ei gaart na; anders wordt het droog en rubberig.',
            },
          ],
          summary: [
            'Eieren houden van zacht vuur; te heet/lang = droog en rubberig.',
            'Roerei: laag vuur, van het vuur vóór het droog is (nagaren).',
            'Gekookt: ~6 min lopend, 8-9 smeuïg, 10-12 hard; daarna koud afspoelen.',
          ],
        },
      ],
    },
  ],
};

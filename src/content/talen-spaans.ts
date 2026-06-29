import type { Island } from '../types';

export const spaans: Island = {
  id: 'spaans',
  title: 'Spaans',
  blurb: 'Het fundament: uitspraak, kernwoorden en je eerste zinnen.',
  icon: '🇪🇸',
  color: '#fbbf24',
  pos: { x: 38, y: 66 },
  topics: [
    {
      id: 'fundament',
      title: 'Fundament',
      orbs: [
        {
          id: 's-f-1',
          title: 'Uitspraak',
          body:
            'Spaans is fonetisch: je leest het zoals het er staat, met heldere regels. De vijf **klinkers** zijn kort en zuiver — *a, e, i, o, u* klinken als "ah, eh, ie, oh, oe" en veranderen nooit. Dat maakt het makkelijker dan Engels of Frans.\n\nEen paar medeklinkers wijken af van wat je gewend bent. De **j** en de **g** (voor e/i) klinken als een zachte keel-h: *jamón* ≈ "chamón", *gente* ≈ "chente". De **ll** klinkt als een "j": *llave* (sleutel) = "jave". De **ñ** is "nj": *español* = "espanjol". En de **h** is altijd stil: *hola* = "ola".\n\nKlemtoon volgt vaste regels: eindigt een woord op een klinker, *n* of *s*, dan ligt de nadruk meestal op de **voorlaatste** lettergreep (*ca-SA*). Een accentteken (*á, é*) verraadt een uitzondering en geeft precies aan waar de nadruk valt (*ca-FÉ*). Spreek klinkers strak en kort uit, dan klink je meteen Spaanser.',
          glossary: [
            { term: 'Fonetisch', def: 'Geschreven zoals het klinkt; vaste leesregels.' },
            { term: 'Klemtoon', def: 'De lettergreep met nadruk; accenttekens wijzen uitzonderingen aan.' },
          ],
          priming: 'Hoe zou je denken dat "hola" en "español" klinken?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Hoe klinkt de "j" in "jamón"?',
              options: ['Als een Engelse j (dzj)', 'Als een zachte keel-h (ch)', 'Als een y/j', 'Stil'],
              correct: 1,
              explain: 'De Spaanse j (en g voor e/i) is een zachte keel-h: jamón ≈ "chamón".',
            },
            {
              type: 'matching',
              prompt: 'Koppel de letter aan zijn klank:',
              pairs: [
                { left: 'll', right: 'klinkt als "j"' },
                { left: 'ñ', right: 'klinkt als "nj"' },
                { left: 'h', right: 'is stil' },
                { left: 'a', right: 'klinkt als "ah"' },
              ],
              explain: 'll = j (llave), ñ = nj (español), h = stil (hola), a = ah.',
            },
          ],
          summary: [
            'Vijf zuivere klinkers: a-e-i-o-u = ah-eh-ie-oh-oe.',
            'j/g(e,i) = keel-h, ll = j, ñ = nj, h = stil.',
            'Klemtoon op voorlaatste lettergreep, tenzij een accent het anders aangeeft.',
          ],
        },
        {
          id: 's-f-2',
          title: 'Kernwoorden & begroeten',
          body:
            'Met een handvol woorden kom je verrassend ver. Begroeten: **hola** (hoi), **buenos días** (goedemorgen), **buenas tardes** (goedemiddag), **buenas noches** (goedenavond/nacht). Afscheid: **adiós** (dag), **hasta luego** (tot later).\n\nBeleefdheid opent deuren: **por favor** (alsjeblieft), **gracias** (dank je), **de nada** (graag gedaan), **perdón** (sorry/pardon). En de basis-uitwisseling: *¿Cómo estás?* (hoe gaat het?) → *Bien, ¿y tú?* (goed, en jij?).\n\nLet op de **omgekeerde leestekens**: een vraag begint met ¿ en eindigt met ?, een uitroep met ¡ en !. Dat is puur Spaans en handig: je ziet aan het begin van de zin al dat er een vraag aankomt. Leer deze groep woorden eerst echt vlot — het zijn de bouwsteentjes die in elk gesprek terugkomen, en ze geven meteen het gevoel dat je "iets kunt".',
          glossary: [
            { term: 'Por favor / gracias', def: 'Alsjeblieft / dank je — universele beleefdheid.' },
            { term: '¿ … ?', def: 'Omgekeerd vraagteken aan het begin van een vraag; zo zie je het meteen aankomen.' },
          ],
          priming: 'Welke drie Spaanse woorden ken je sowieso al — en wanneer gebruik je ze?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat betekent "de nada"?',
              options: ['Tot ziens', 'Graag gedaan', 'Alsjeblieft (verzoek)', 'Sorry'],
              correct: 1,
              explain: '"De nada" = graag gedaan, het antwoord op "gracias".',
            },
            {
              type: 'truefalse',
              prompt: 'Een Spaanse vraag begint met een omgekeerd vraagteken (¿).',
              answer: true,
              explain: 'Zo zie je aan het begin van de zin al dat er een vraag komt.',
            },
          ],
          summary: [
            'Begroeten: hola, buenos días/tardes/noches; afscheid: adiós, hasta luego.',
            'Beleefdheid: por favor, gracias, de nada, perdón.',
            'Vraag/uitroep openen met ¿ / ¡.',
          ],
        },
        {
          id: 's-f-3',
          title: 'Ser vs estar',
          body:
            'Spaans heeft twee werkwoorden voor "zijn": **ser** en **estar**. Verkeerd kiezen is de klassieke beginnersfout, maar de vuistregel is simpel.\n\n**Ser** gebruik je voor wat **permanent of essentieel** is: identiteit, eigenschappen, beroep, herkomst. *Soy Stijn* (ik ben Stijn), *soy de Holanda* (ik kom uit Nederland), *ella es médica* (zij is arts). **Estar** gebruik je voor wat **tijdelijk of een toestand/plaats** is: gevoel, situatie, locatie. *Estoy cansado* (ik ben moe), *estoy en casa* (ik ben thuis), *¿cómo estás?* (hoe gaat het?).\n\nEen handig ezelsbruggetje: ser = **eigenschap**, estar = **even zo** (tijdelijke toestand/plek). Vergelijk: *es aburrido* (hij ís saai, karakter) vs *está aburrido* (hij verveelt zich nu). Zelfde woord, ander werkwoord, andere betekenis. Begin met de vervoegingen *soy/eres/es* (ser) en *estoy/estás/está* (estar) voor ik/jij/hij-zij — daarmee maak je al heel veel zinnen.',
          glossary: [
            { term: 'Ser', def: 'Zijn — permanent/essentieel: identiteit, eigenschap, herkomst (soy, eres, es).' },
            { term: 'Estar', def: 'Zijn — tijdelijk/toestand/plaats: gevoel, situatie, locatie (estoy, estás, está).' },
          ],
          priming: 'Waarom zou een taal twee verschillende woorden voor "zijn" kunnen hebben?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Welke is juist: "Ik ben moe"?',
              options: ['Soy cansado', 'Estoy cansado', 'Es cansado', 'Eres cansado'],
              correct: 1,
              explain: 'Moe zijn is een tijdelijke toestand → estar: "estoy cansado".',
            },
            {
              type: 'matching',
              prompt: 'Koppel de zin aan het juiste werkwoord:',
              pairs: [
                { left: 'Ik kom uit Nederland', right: 'ser (soy de Holanda)' },
                { left: 'Ik ben thuis', right: 'estar (estoy en casa)' },
                { left: 'Zij is arts', right: 'ser (es médica)' },
                { left: 'Hoe gaat het?', right: 'estar (¿cómo estás?)' },
              ],
              explain: 'Permanent/identiteit → ser; toestand/plaats → estar.',
            },
          ],
          summary: [
            'Ser = permanent/essentieel (identiteit, eigenschap, herkomst).',
            'Estar = tijdelijk (gevoel, toestand, plaats).',
            'Start met soy/eres/es en estoy/estás/está.',
          ],
        },
        {
          id: 's-f-4',
          title: 'Simpele zinnen bouwen',
          body:
            'Spaanse zinsbouw lijkt op het Nederlands: **onderwerp – werkwoord – rest**. *Yo como pan* (ik eet brood). Maar het onderwerp mag vaak weg, want de werkwoordsvorm verraadt al wie het doet: *como pan* betekent ook gewoon "ik eet brood". Dat **weglaten van het voornaamwoord** is heel normaal.\n\nEen vraag maak je zonder hulpwerkwoord: je zet er gewoon vraagtekens omheen en laat je stem omhoog gaan. *Comes pan* (jij eet brood) → *¿Comes pan?* (eet jij brood?). Ontkennen is ook simpel: zet **no** vóór het werkwoord. *No como pan* (ik eet geen brood).\n\nBijvoeglijke naamwoorden komen meestal **ná** het zelfstandig naamwoord en passen zich aan in geslacht en getal: *un coche rojo* (een rode auto), *una casa roja* (een rood huis). Met deze drie bouwstenen — woordvolgorde, vraag door intonatie, en "no" voor ontkenning — maak je al eindeloos veel eenvoudige zinnen. Combineer ze met de woorden en *ser/estar* uit de vorige orbs en je kunt je eerste echte mini-gesprekjes voeren.',
          glossary: [
            { term: 'Pro-drop', def: 'Onderwerp weglaten omdat het werkwoord het al aangeeft (como = ik eet).' },
            { term: 'Ontkenning', def: '"No" vóór het werkwoord: no como = ik eet niet.' },
          ],
          priming: 'Hoe zou je in het Spaans een gewone zin tot een vraag maken zonder extra woorden?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Hoe ontken je een zin in het Spaans?',
              options: ['"no" achter het werkwoord', '"no" vóór het werkwoord', 'met een apart hulpwerkwoord', 'door -no achter te plakken'],
              correct: 1,
              explain: '"No" staat vóór het werkwoord: no como pan = ik eet geen brood.',
            },
            {
              type: 'whyhow',
              prompt: 'Waarom kun je in het Spaans vaak het woord voor "ik/jij" weglaten?',
              model: 'Omdat de werkwoordsvorm zelf al aangeeft wie het doet (como = ik eet, comes = jij eet). Het voornaamwoord is dan overbodig; je gebruikt het vooral voor nadruk of contrast.',
            },
          ],
          summary: [
            'Volgorde: onderwerp – werkwoord – rest; onderwerp mag vaak weg.',
            'Vraag = dezelfde zin met ¿?-tekens en stijgende intonatie.',
            'Ontkennen met "no" vóór het werkwoord; bijvoeglijk nw. ná het zelfstandig nw.',
          ],
        },
      ],
    },
    {
      id: 'alledaags',
      title: 'Alledaags',
      orbs: [
        {
          id: 's-a-1',
          title: 'Getallen 0–20',
          body:
            'Getallen heb je overal nodig — prijzen, tijd, hoeveelheden. De eerste tien: **cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez** (0–10). Die lonen om echt uit je hoofd te leren; de rest bouwt erop voort.\n\nVan 11 tot 15 zijn het aparte woordjes: **once, doce, trece, catorce, quince**. Vanaf 16 wordt het logisch: **dieciséis, diecisiete, dieciocho, diecinueve** — letterlijk "tien-en-zes" enzovoort, aan elkaar geschreven. En 20 is **veinte**.\n\nEen handig weetje: **uno** wordt **un** vóór een mannelijk woord (*un café*, een koffie) en **una** vóór een vrouwelijk woord (*una cerveza*, een bier). Tel hardop mee tot tien terwijl je iets doet — traplopen, hardlopen — dan slijten de eerste tien er vanzelf in, en de rest volgt door het patroon.',
          glossary: [
            { term: 'uno / un / una', def: 'Eén; "un" voor mannelijk woord, "una" voor vrouwelijk.' },
            { term: 'dieci-', def: 'Voorvoegsel voor 16-19: "tien-en-…" aan elkaar geschreven.' },
          ],
          priming: 'Welke Spaanse getallen ken je al — bijvoorbeeld van uno, dos, tres?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is "zeven" in het Spaans?',
              options: ['seis', 'siete', 'cinco', 'nueve'],
              correct: 1,
              explain: 'seis = 6, siete = 7, ocho = 8, nueve = 9.',
            },
            {
              type: 'ordering',
              prompt: 'Zet op volgorde van klein naar groot:',
              items: ['tres', 'cinco', 'ocho', 'diez', 'quince'],
              explain: 'tres (3), cinco (5), ocho (8), diez (10), quince (15).',
            },
          ],
          summary: [
            '0–10: cero t/m diez — leer deze echt uit je hoofd.',
            '11–15 zijn aparte woorden; 16–19 = "dieci-" + getal; 20 = veinte.',
            'uno → un (mannelijk) / una (vrouwelijk).',
          ],
        },
        {
          id: 's-a-2',
          title: 'Dagen, tijd & afspraken',
          body:
            'De dagen van de week (let op: kleine letters in het Spaans): **lunes, martes, miércoles, jueves, viernes, sábado, domingo** (ma t/m zo). "Vandaag" is **hoy**, "morgen" **mañana**, "gisteren" **ayer**.\n\nDe tijd vraag je met *¿Qué hora es?* (hoe laat is het?). Het antwoord gebruikt **es** voor één uur en **son** voor de rest: *es la una* (het is één uur), *son las dos* (het is twee uur). Halve en kwartieren: *y media* (half, eigenlijk "en half"), *y cuarto* (kwart over), *menos cuarto* (kwart voor). Dus *son las tres y media* = half vier (letterlijk "drie en half").\n\nHandig voor afspraken met vrienden: *¿A qué hora?* (hoe laat?) en *a las ocho* (om acht uur). Met de getallen uit de vorige orb kun je nu tijden combineren. Begin met je vaste momenten — werk, sport, eten — en zeg ze in het Spaans tegen jezelf; herhaling in context blijft het beste plakken.',
          glossary: [
            { term: 'es / son', def: '"Es" bij één uur (es la una), "son" bij de rest (son las dos).' },
            { term: 'y media / y cuarto', def: 'half (…en half) / kwart over; menos cuarto = kwart voor.' },
          ],
          priming: 'Hoe zou je in het Spaans "om acht uur" tegen een vriend zeggen?',
          questions: [
            {
              type: 'truefalse',
              prompt: 'Dagen van de week schrijf je in het Spaans met een hoofdletter.',
              answer: false,
              explain: 'In het Spaans krijgen dagen (en maanden) kleine letters: lunes, martes…',
            },
            {
              type: 'matching',
              prompt: 'Koppel de Spaanse tijd aan de Nederlandse:',
              pairs: [
                { left: 'es la una', right: 'het is één uur' },
                { left: 'son las dos', right: 'het is twee uur' },
                { left: 'son las tres y media', right: 'half vier' },
                { left: 'a las ocho', right: 'om acht uur' },
              ],
              explain: 'es bij één uur, son bij meer; y media = half (van het volgende uur).',
            },
          ],
          summary: [
            'Dagen (kleine letters): lunes–domingo; hoy/mañana/ayer.',
            '¿Qué hora es? → es la una / son las dos; y media/cuarto, menos cuarto.',
            'Afspraken: ¿A qué hora? → a las + uur.',
          ],
        },
        {
          id: 's-a-3',
          title: 'Eten & drinken bestellen',
          body:
            'Op terras of in een restaurant kom je ver met een paar beleefde zinnen. Bestellen doe je met *Para mí…* (voor mij…) of *Quería…* (ik zou graag… willen — beleefd). Bijvoorbeeld: *Para mí, una cerveza, por favor* (voor mij een bier, alsjeblieft) of *Quería un café* (ik wil graag een koffie).\n\nHandige woorden: **agua** (water), **café** (koffie), **cerveza** (bier), **vino** (wijn), **pan** (brood), **la cuenta** (de rekening). Vraag de rekening met *La cuenta, por favor*. Wil je vragen wat iets kost: *¿Cuánto es?* (hoeveel is het?).\n\nDenk aan het lidwoord-geslacht uit de getallen-orb: *un café* (m), *una cerveza* (v). En de magische beleefdheidswoorden *por favor* en *gracias* maken in elke situatie het verschil. Oefen één complete mini-dialoog hardop — begroeten, bestellen, betalen — dan heb je een echt bruikbaar setje voor je volgende vakantie.',
          glossary: [
            { term: 'Para mí / Quería', def: 'Voor mij… / Ik zou graag… — manieren om te bestellen.' },
            { term: 'La cuenta', def: 'De rekening; vraag erom met "la cuenta, por favor".' },
            { term: '¿Cuánto es?', def: 'Hoeveel is het? / wat kost het?' },
          ],
          priming: 'Hoe zou je beleefd een koffie bestellen en daarna de rekening vragen?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Hoe vraag je om de rekening?',
              options: ['¿Cuánto es?', 'La cuenta, por favor', 'Para mí, un café', 'Buenas noches'],
              correct: 1,
              explain: '"La cuenta, por favor" = de rekening, alsjeblieft. ¿Cuánto es? vraagt de prijs.',
            },
            {
              type: 'whyhow',
              prompt: 'Bestel in het Spaans een bier voor jezelf, beleefd.',
              model: 'Bijvoorbeeld: "Para mí, una cerveza, por favor" of "Quería una cerveza, por favor". Let op "una" (cerveza is vrouwelijk) en de beleefdheid met por favor.',
            },
          ],
          summary: [
            'Bestellen: Para mí… / Quería… + por favor.',
            'Kernwoorden: agua, café, cerveza, vino, pan, la cuenta.',
            'Rekening: La cuenta, por favor; prijs: ¿Cuánto es?',
          ],
        },
      ],
    },
    {
      id: 'grammatica',
      title: 'Grammatica-basis',
      orbs: [
        {
          id: 's-g-1',
          title: 'Werkwoorden in de tegenwoordige tijd',
          body:
            'Spaanse werkwoorden eindigen in hun hele vorm (infinitief) op **-ar, -er of -ir**: *hablar* (praten), *comer* (eten), *vivir* (wonen). Om ze te vervoegen haal je die uitgang eraf en plak je er een nieuwe achter, afhankelijk van wie iets doet.\n\nNeem *hablar*. Stam = *habl-*. Dan: *yo hablo* (ik praat), *tú hablas* (jij praat), *él/ella habla* (hij/zij praat), *nosotros hablamos* (wij praten), *vosotros habláis* (jullie), *ellos hablan* (zij). De **-er** en **-ir**-werkwoorden gaan bijna hetzelfde: *como, comes, come…* en *vivo, vives, vive…*. Merk op dat de uitgang al verraadt wíé het doet — daarom mag het woordje "ik/jij" meestal weg.\n\nDe winst: ken je dit patroon, dan kun je in één klap honderden regelmatige werkwoorden vervoegen. Leer eerst de uitgangen van -ar (verreweg de grootste groep) echt vlot, en oefen met een paar veelgebruikte: *hablar, trabajar* (werken), *estudiar* (studeren). Daarna volgen -er en -ir bijna vanzelf.',
          glossary: [
            { term: 'Infinitief', def: 'De hele vorm van een werkwoord; eindigt op -ar, -er of -ir.' },
            { term: 'Stam', def: 'Het werkwoord zonder uitgang (hablar → habl-) waar je de vervoeging aan plakt.' },
          ],
          priming: 'Hoe weet je in het Spaans wie iets doet, ook zonder het woord "ik" of "jij"?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is "jij praat" (van hablar)?',
              options: ['hablo', 'hablas', 'habla', 'hablan'],
              correct: 1,
              explain: 'tú hablas. (yo) hablo = ik praat, él habla = hij praat.',
            },
            {
              type: 'truefalse',
              prompt: 'De werkwoordsuitgang verraadt al wie het doet, dus "yo/tú" mag vaak weg.',
              answer: true,
              explain: 'Hablo betekent al "ik praat"; het voornaamwoord is meestal overbodig.',
            },
          ],
          summary: [
            'Werkwoorden eindigen op -ar/-er/-ir; haal de uitgang eraf en vervoeg.',
            'hablar: hablo, hablas, habla, hablamos, habláis, hablan.',
            'Eén patroon = honderden regelmatige werkwoorden.',
          ],
        },
        {
          id: 's-g-2',
          title: 'Lidwoorden, geslacht & meervoud',
          body:
            'Elk Spaans zelfstandig naamwoord is **mannelijk of vrouwelijk**, en het lidwoord past zich aan. Bepaald ("de/het"): **el** (m) en **la** (v) — *el libro* (het boek), *la mesa* (de tafel). Onbepaald ("een"): **un** (m) en **una** (v).\n\nEr is een handige vuistregel: woorden op **-o** zijn meestal mannelijk, woorden op **-a** meestal vrouwelijk. Niet waterdicht (uitzonderingen als *el día*, *la mano*), maar het klopt vaak genoeg om op te leunen. Leer een nieuw woord daarom altijd mét zijn lidwoord — dus niet "casa" maar "*la casa*".\n\nMeervoud is simpel: eindigt het woord op een klinker, plak er **-s** achter (*libro → libros*, *casa → casas*); eindigt het op een medeklinker, dan **-es** (*ciudad → ciudades*). Het lidwoord gaat mee naar het meervoud: **los** (m) en **las** (v) — *los libros*, *las casas*. Zo bouw je correcte zelfstandige naamwoorden, enkelvoud én meervoud.',
          glossary: [
            { term: 'el / la', def: 'Bepaald lidwoord "de/het": el (mannelijk), la (vrouwelijk).' },
            { term: '-o / -a regel', def: 'Woorden op -o meestal mannelijk, op -a meestal vrouwelijk (met uitzonderingen).' },
            { term: 'los / las', def: 'Meervoud van el/la: los (m), las (v).' },
          ],
          priming: 'Waarom is het slim om een Spaans woord altijd mét "el" of "la" te leren?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is meestal het geslacht van een woord op -a, zoals "casa"?',
              options: ['Mannelijk', 'Vrouwelijk', 'Onzijdig', 'Geen regel'],
              correct: 1,
              explain: 'Woorden op -a zijn meestal vrouwelijk: la casa. (Met uitzonderingen.)',
            },
            {
              type: 'matching',
              prompt: 'Koppel enkelvoud aan het juiste meervoud:',
              pairs: [
                { left: 'el libro', right: 'los libros' },
                { left: 'la casa', right: 'las casas' },
                { left: 'la ciudad', right: 'las ciudades' },
              ],
              explain: 'Klinker → +s, medeklinker → +es; el/la worden los/las.',
            },
          ],
          summary: [
            'Geslacht bepaalt het lidwoord: el/un (m), la/una (v).',
            'Vuistregel: -o meestal m, -a meestal v; leer woorden mét lidwoord.',
            'Meervoud: +s na klinker, +es na medeklinker; el/la → los/las.',
          ],
        },
        {
          id: 's-g-3',
          title: 'Onmisbare werkwoorden: tener, ir, querer',
          body:
            'Drie onregelmatige werkwoorden kom je voortdurend tegen; ze openen meteen veel zinnen. **Tener** (hebben): *tengo, tienes, tiene…*. Het Spaans gebruikt "tener" ook waar wij "zijn" zeggen: *tengo hambre* (ik heb honger), *tengo 32 años* (ik ben 32 — letterlijk "ik heb 32 jaren").\n\n**Ir** (gaan): *voy, vas, va…*. Supernuttig is **ir a + infinitief** voor de nabije toekomst: *voy a comer* (ik ga eten), *vamos a ver* (we gaan kijken). Daarmee praat je over toekomst zonder een aparte tijd te hoeven leren. **Querer** (willen): *quiero, quieres, quiere…* — *quiero un café* (ik wil een koffie), en met een werkwoord: *quiero aprender español* (ik wil Spaans leren).\n\nMet deze drie plus de werkwoordsvervoeging en *ser/estar* uit het fundament-eiland kun je al verrassend veel zeggen: wat je hebt, waar je heen gaat, wat je wilt en wat je gaat doen. Leer de ik/jij/hij-vormen eerst en breid daarna uit.',
          glossary: [
            { term: 'tener', def: 'Hebben (tengo, tienes, tiene); ook "tengo hambre/… años".' },
            { term: 'ir a + infinitief', def: 'Nabije toekomst: voy a comer = ik ga eten.' },
            { term: 'querer', def: 'Willen (quiero, quieres, quiere); + werkwoord = "ik wil …".' },
          ],
          priming: 'Hoe zou je in het Spaans "ik ga eten" kunnen zeggen zonder een hele toekomende tijd te leren?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Hoe zeg je "ik ga eten"?',
              options: ['como', 'voy a comer', 'quiero comer', 'tengo comer'],
              correct: 1,
              explain: 'ir a + infinitief: "voy a comer". (quiero comer = ik wíl eten.)',
            },
            {
              type: 'whyhow',
              prompt: 'Waarom is "tengo 32 años" letterlijk anders dan het Nederlands?',
              model: 'Het Spaans gebruikt "tener" (hebben) waar wij "zijn" zeggen voor leeftijd: letterlijk "ik heb 32 jaren". Hetzelfde bij honger/dorst (tengo hambre/sed).',
            },
          ],
          summary: [
            'tener (hebben): ook voor leeftijd/honger — tengo 32 años, tengo hambre.',
            'ir a + infinitief = nabije toekomst (voy a comer).',
            'querer (willen) + werkwoord: quiero aprender español.',
          ],
        },
      ],
    },
  ],
};

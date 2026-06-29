import type { Island } from '../types';

export const selfImprovement: Island = {
  id: 'self-improvement',
  title: 'Self-improvement',
  blurb: 'Gewoontes, focus en energie — discipline die vanzelf gaat.',
  icon: '🌱',
  color: '#34d399',
  pos: { x: 88, y: 46 },
  topics: [
    {
      id: 'gewoontes',
      title: 'Gewoontes bouwen',
      orbs: [
        {
          id: 'si-g-1',
          title: 'De gewoonte-lus',
          body:
            'Gewoontes draaien op een vaste lus van drie delen: **cue → routine → beloning** (trigger, gedrag, opbrengst). Een cue ("het is 7 uur, ik sta in de keuken") zet automatisch een routine in gang (koffie zetten), gevolgd door een beloning (cafeïne, even rust). Doe je dat vaak genoeg, dan wordt het automatisch — je brein bespaart energie door niet meer na te hoeven denken.\n\nDit verklaart waarom **wilskracht alleen zelden werkt**: je kunt jezelf niet eindeloos dwingen. Veel duurzamer is het ontwerpen van de lus. Wil je een nieuwe gewoonte, zorg dan voor een duidelijke, vaste **cue** en een directe, prettige **beloning**. Wil je een gewoonte afleren, dan haal je de cue weg of maak je de routine moeilijker.\n\nDe kracht zit in **klein beginnen en herhalen**. Niet "ik ga elke dag een uur sporten", maar een mini-versie die je sowieso volhoudt. Consistentie verslaat intensiteit: twintig keer iets kleins doen bouwt meer gewoonte op dan één keer iets groots. Voor jou, die discipline en structuur bewust wil opbouwen, is dit het fundament onder alle andere orbs hier.',
          glossary: [
            { term: 'Gewoonte-lus', def: 'Cue → routine → beloning; de cyclus waarop gewoontes draaien.' },
            { term: 'Cue', def: 'De trigger (tijd, plek, gevoel) die een gewoonte automatisch start.' },
          ],
          priming: 'Waarom lukt het zelden om met pure wilskracht een nieuwe gewoonte vast te houden?',
          questions: [
            {
              type: 'ordering',
              prompt: 'Zet de gewoonte-lus in de juiste volgorde:',
              items: ['Cue (trigger)', 'Routine (het gedrag)', 'Beloning'],
              explain: 'Een cue start de routine, die wordt gevolgd door een beloning — en herhaling maakt het automatisch.',
            },
            {
              type: 'truefalse',
              prompt: 'Consistentie (vaak iets kleins) bouwt meer gewoonte op dan af en toe iets groots.',
              answer: true,
              explain: 'Herhaling van een mini-versie slijt de lus in; intensiteit zonder herhaling niet.',
            },
          ],
          summary: [
            'Gewoontes = cue → routine → beloning, ingesleten door herhaling.',
            'Ontwerp de lus i.p.v. te leunen op wilskracht.',
            'Klein beginnen en consistent herhalen verslaat groot en sporadisch.',
          ],
          sources: [
            { label: 'James Clear — Atomic Habits', url: 'https://jamesclear.com/atomic-habits' },
            { label: 'Charles Duhigg — The Power of Habit', url: 'https://charlesduhigg.com/the-power-of-habit/' },
          ],
        },
        {
          id: 'si-g-2',
          title: 'Habit stacking & je omgeving',
          body:
            'Twee technieken maken nieuwe gewoontes veel waarschijnlijker. De eerste is **habit stacking**: hang een nieuwe gewoonte aan een bestaande. De vorm is "**Na [bestaande gewoonte] doe ik [nieuwe gewoonte]**." Bijvoorbeeld: "Na het koffiezetten doe ik vijf minuten gitaaroefening." De bestaande gewoonte is een betrouwbare cue, dus je hoeft geen nieuwe trigger te onthouden.\n\nDe tweede is **je omgeving ontwerpen**. Gedrag volgt vaak de weg van de minste weerstand. Wil je iets vaker doen, maak het **zichtbaar en makkelijk**: gitaar op een standaard in de kamer, sportkleren klaar de avond ervoor. Wil je iets minder doen, maak het **onzichtbaar en lastig**: snoep uit het zicht, telefoon in een andere kamer. Je verandert niet je karakter, maar je omgeving — en dat doet het werk.\n\nDe rode draad: leun niet op motivatie (die schommelt), maar maak de goede keuze de **makkelijkste** keuze. Kleine aanpassingen aan je triggers en je omgeving leveren onevenredig veel op.',
          glossary: [
            { term: 'Habit stacking', def: 'Een nieuwe gewoonte koppelen aan een bestaande: "Na X doe ik Y".' },
            { term: 'Omgeving ontwerpen', def: 'Gewenst gedrag zichtbaar/makkelijk maken, ongewenst onzichtbaar/lastig.' },
          ],
          priming: 'Hoe zou je een nieuwe gewoonte (bv. dagelijks oefenen) kunnen vasthaken aan iets dat je tóch al doet?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is de formule voor habit stacking?',
              options: [
                '"Ik probeer Y vaker te doen"',
                '"Na [bestaande gewoonte] doe ik [nieuwe gewoonte]"',
                '"Ik beloon mezelf met Y"',
                '"Ik doe Y als ik zin heb"',
              ],
              correct: 1,
              explain: 'Een bestaande gewoonte wordt de betrouwbare cue voor de nieuwe.',
            },
            {
              type: 'whyhow',
              prompt: 'Hoe gebruik je je omgeving om vaker gitaar te spelen?',
              model: 'Maak het zichtbaar en makkelijk: zet de gitaar op een standaard in de woonkamer in plaats van in de koffer. Hoe minder drempel (pakken, uitpakken), hoe groter de kans dat je hem oppakt.',
            },
          ],
          summary: [
            'Habit stacking: "Na X doe ik Y" — bestaande gewoonte als cue.',
            'Ontwerp je omgeving: goed gedrag zichtbaar/makkelijk, slecht onzichtbaar/lastig.',
            'Maak de goede keuze de makkelijkste keuze i.p.v. op motivatie leunen.',
          ],
          sources: [
            { label: 'James Clear — Atomic Habits', url: 'https://jamesclear.com/atomic-habits' },
            { label: 'BJ Fogg — Tiny Habits', url: 'https://tinyhabits.com/' },
          ],
        },
        {
          id: 'si-g-3',
          title: 'De tweeminutenregel',
          body:
            'De grootste drempel bij een nieuwe gewoonte is niet volhouden — het is **beginnen**. De **tweeminutenregel** lost dat op: maak een nieuwe gewoonte zo klein dat hij in twee minuten kan. "Een boek lezen" wordt "één bladzijde lezen". "Sporten" wordt "mijn sportschoenen aantrekken". Klinkt belachelijk klein, en dat is precies het punt.\n\nWaarom werkt dit? Omdat een gewoonte vooral moet **bestaan** voordat hij kan groeien. Door de start triviaal te maken, neem je de weerstand weg. En bijna altijd doe je vanzelf meer zodra je eenmaal begonnen bent — maar zelfs als je stopt na twee minuten, heb je de gewoonte die dag "aangezet". Het ritueel van opdagen telt zwaarder dan de prestatie.\n\nDit hangt samen met **identiteit**: elke keer dat je opdaagt, stem je voor het type persoon dat je wilt zijn ("iemand die elke dag oefent"). Niet het doel ("ik wil goed worden") maar de herhaalde kleine actie vormt wie je bent. Begin absurd klein, wees consistent, en laat het daarna vanzelf groeien.',
          glossary: [
            { term: 'Tweeminutenregel', def: 'Maak een nieuwe gewoonte zo klein dat hij in ≤2 minuten kan, om de start­drempel weg te halen.' },
            { term: 'Identiteitsgewoonte', def: 'Elke herhaling bevestigt wie je wilt zijn ("iemand die oefent"), niet alleen een doel.' },
          ],
          priming: 'Wat is meestal het moeilijkste aan een nieuwe gewoonte: beginnen of volhouden?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat zegt de tweeminutenregel?',
              options: [
                'Doe alles binnen twee minuten',
                'Maak de start zo klein dat hij ≤2 minuten kost',
                'Pauzeer elke twee minuten',
                'Beloon jezelf na twee minuten',
              ],
              correct: 1,
              explain: 'Een triviale start haalt de drempel weg; de gewoonte mag daarna groeien.',
            },
            {
              type: 'truefalse',
              prompt: 'Elke keer "opdagen" versterkt je identiteit als iemand die dit doet.',
              answer: true,
              explain: 'Herhaalde kleine acties vormen wie je bent, sterker dan een ver doel.',
            },
          ],
          summary: [
            'Beginnen is de drempel; de tweeminutenregel maakt de start triviaal.',
            'Eerst laten bestaan, dan laten groeien — opdagen > presteren.',
            'Elke herhaling stemt voor je gewenste identiteit.',
          ],
          sources: [
            { label: 'James Clear — Atomic Habits', url: 'https://jamesclear.com/atomic-habits' },
          ],
        },
        {
          id: 'si-g-4',
          title: 'Systemen boven doelen',
          body:
            'Doelen zijn nuttig om een richting te kiezen, maar ze brengen je er niet — **systemen** wel. Een doel is de uitkomst die je wilt ("fitter worden"); een systeem is het terugkerende proces dat ernaartoe leidt ("elke ochtend tien minuten bewegen"). Iedereen in een wedstrijd heeft hetzelfde doel; het verschil zit in hun systeem.\n\nAlleen op doelen sturen heeft twee valkuilen. Je voelt je pas "geslaagd" als je het haalt — dus tot die tijd loop je rond met een mislukt gevoel. En zodra je het doel haalt, valt de motor stil ("nu mag ik weer stoppen"). Richt je daarom op het **proces** dat je elke dag kunt uitvoeren en herhalen, niet alleen op de finish.\n\nKoppel dit aan identiteit (uit de eerdere orbs): niet "ik wil een boek schrijven" maar "ik ben iemand die elke dag schrijft". De uitkomst volgt vanzelf uit een systeem dat je volhoudt. Voor jou, die discipline bewust opbouwt: kies het kleinste herhaalbare proces en vertrouw op de herhaling in plaats van op een ver doel.',
          glossary: [
            { term: 'Doel vs systeem', def: 'Doel = de uitkomst; systeem = het herhaalbare proces dat je er brengt.' },
            { term: 'Proces', def: 'De dagelijkse handeling waar je op stuurt in plaats van op de finish.' },
          ],
          priming: 'Waarom vallen mensen vaak terug nadat ze een doel (bv. een afslankdoel) hebben gehaald?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat brengt je daadwerkelijk naar je resultaat?',
              options: ['Een ambitieus doel stellen', 'Een herhaalbaar systeem/proces', 'Motivatie afwachten', 'Een deadline'],
              correct: 1,
              explain: 'Doelen geven richting; het systeem (proces) doet het werk.',
            },
            {
              type: 'truefalse',
              prompt: 'Alleen op een doel sturen geeft tot het behalen vaak een "nog niet geslaagd"-gevoel.',
              answer: true,
              explain: 'En na het halen valt de motor stil; een proces houdt je doorlopend bezig.',
            },
          ],
          summary: [
            'Doelen geven richting, systemen brengen je er.',
            'Stuur op een dagelijks herhaalbaar proces, niet alleen op de finish.',
            'Koppel aan identiteit: "ik ben iemand die …".',
          ],
          sources: [
            { label: 'James Clear — Atomic Habits', url: 'https://jamesclear.com/atomic-habits' },
          ],
        },
      ],
    },
    {
      id: 'focus-energie',
      title: 'Focus & energie',
      orbs: [
        {
          id: 'si-f-1',
          title: 'Diepe focus',
          body:
            'Geconcentreerd, ononderbroken werken aan één veeleisende taak — wat informaticus Cal Newport **deep work** noemt — levert meer en beter resultaat op dan uren versnipperd bezig zijn. Het probleem is dat onze omgeving vol zit met onderbrekingen die daar recht tegenin gaan.\n\nDe grootste sluipmoordenaar is **task-switching**. Elke keer dat je tussen taken springt (even appen, even mail), blijft een deel van je aandacht hangen bij de vorige taak — "attention residue". Je voelt je druk, maar werkt traag en oppervlakkig. **Multitasken bestaat eigenlijk niet**: je hersenen wisselen razendsnel, en elke wissel kost tijd en kwaliteit.\n\nDe oplossing is **single-tasking in blokken**. Kies één taak, zet meldingen uit, leg je telefoon buiten bereik, en werk een afgebakende periode (bijvoorbeeld 25-50 minuten) alleen daaraan. Daarna een korte pauze. Het gaat niet om langer werken, maar om **onverdeelde** aandacht. Bescherm die blokken als afspraken met jezelf — focus is een vaardigheid die je traint, geen kwestie van karakter.',
          glossary: [
            { term: 'Deep work', def: 'Ononderbroken, geconcentreerd werken aan één veeleisende taak (Cal Newport).' },
            { term: 'Attention residue', def: 'Achtergebleven aandacht bij de vorige taak na een wissel; maakt je traag.' },
          ],
          priming: 'Waarom voel je je na een dag vol "even-dit-even-dat" druk maar weinig opgeschoten?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Waarom is wisselen tussen taken zo kostbaar?',
              options: [
                'Het is fysiek vermoeiend',
                'Aandacht blijft hangen bij de vorige taak (residue)',
                'Het kost geld',
                'Je vergeet de cue',
              ],
              correct: 1,
              explain: 'Attention residue maakt je trager en oppervlakkiger; multitasken is snel wisselen met verlies.',
            },
            {
              type: 'whyhow',
              prompt: 'Hoe richt je een blok diepe focus praktisch in?',
              model: 'Kies één taak, zet meldingen uit en leg je telefoon buiten bereik, en werk een afgebakende periode (bv. 25-50 min) alleen daaraan, gevolgd door een korte pauze. Het doel is onverdeelde aandacht, niet langer werken.',
            },
          ],
          summary: [
            'Diepe, ononderbroken focus verslaat versnipperd werk.',
            'Task-switching kost tijd en kwaliteit (attention residue); multitasken bestaat niet echt.',
            'Single-task in blokken: meldingen uit, telefoon weg, daarna pauze.',
          ],
          sources: [
            { label: 'Cal Newport — Deep Work', url: 'https://calnewport.com/books/deep-work/' },
          ],
        },
        {
          id: 'si-f-2',
          title: 'Slaap als fundament',
          body:
            'Slaap is geen luxe maar de basis onder je focus, humeur en gezondheid. Volwassenen hebben gemiddeld **7 tot 9 uur** per nacht nodig. Structureel te weinig slaap verslechtert concentratie, geheugen, stemming en immuunsysteem — je kunt het niet "wegtrainen".\n\nDe sterkste hefboom is **regelmaat**: ga rond dezelfde tijd naar bed en sta rond dezelfde tijd op, ook in het weekend. Dat houdt je biologische klok (circadiaan ritme) stabiel. **Daglicht** in de ochtend helpt die klok te zetten; fel scherm-licht laat op de avond werkt juist tegen.\n\nLet ook op **cafeïne**: het blijft lang werken — de halfwaardetijd is grofweg 5-6 uur, dus een koffie om 16:00 zit \'s avonds nog deels in je systeem. Bouw je avond af: dim licht, scherm weg, iets rustigs. Alcohol lijkt te helpen inslapen maar verstoort je diepe slaap. Voor jou met een baby op komst is slaap soms beperkt beschikbaar — juist dan helpt het om de slaap die je wél pakt zo goed mogelijk te maken, en dutjes te benutten.',
          glossary: [
            { term: 'Circadiaan ritme', def: 'Je interne 24-uursklok; regelmaat en ochtendlicht houden hem stabiel.' },
            { term: 'Cafeïne-halfwaardetijd', def: 'Tijd waarin de helft is afgebroken: grofweg 5-6 uur — late koffie verstoort slaap.' },
          ],
          priming: 'Wat heeft waarschijnlijk meer effect op je slaap: één lange uitslaapdag, of elke dag dezelfde tijden?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Hoeveel slaap hebben volwassenen gemiddeld per nacht nodig?',
              options: ['4-5 uur', '5-6 uur', '7-9 uur', '10-12 uur'],
              correct: 2,
              explain: 'Richtlijn voor volwassenen is gemiddeld 7-9 uur; structureel minder schaadt focus en humeur.',
            },
            {
              type: 'truefalse',
              prompt: 'Een koffie om 16:00 kan \'s avonds je slaap nog beïnvloeden.',
              answer: true,
              explain: 'Cafeïne heeft een halfwaardetijd van ~5-6 uur, dus een deel zit er \'s avonds nog.',
            },
          ],
          summary: [
            'Volwassenen: gemiddeld 7-9 uur; te weinig slaap is niet weg te trainen.',
            'Regelmaat + ochtendlicht houden je circadiane klok stabiel.',
            'Pas op met late cafeïne (halfwaardetijd 5-6 uur) en scherm-licht; alcohol verstoort diepe slaap.',
          ],
          sources: [
            { label: 'NHS — How to get to sleep', url: 'https://www.nhs.uk/live-well/sleep-and-tiredness/how-to-get-to-sleep/' },
            { label: 'Sleep Foundation — How much sleep do we need', url: 'https://www.sleepfoundation.org/how-sleep-works/how-much-sleep-do-we-really-need' },
          ],
        },
        {
          id: 'si-f-3',
          title: 'Pauzes & herstel',
          body:
            'Productiviteit is geen rechte lijn: je aandacht werkt in **golven**, niet in een constante stroom. Na een blok geconcentreerd werk daalt je scherpte. Korte pauzes zijn dus geen luxe of luiheid — ze zijn onderdeel van goed werken.\n\nEen simpele structuur is de **Pomodoro-techniek**: werk een blok (klassiek 25 minuten), neem dan 5 minuten pauze, en na een paar blokken een langere pauze. De pauze is het effectiefst als hij echt **herstel** geeft: even staan, bewegen, naar buiten of uit het raam kijken — níét meteen je telefoon, want dat is weer prikkels in plaats van rust.\n\nOp grotere schaal geldt hetzelfde: **beweging, buitenlucht en ontspanning** laden je energie op en zijn bewezen goed voor je stemming en focus. Je eigen zoldergym, een hardloopje of boulderen werken niet alleen voor je lichaam maar ook als mentale reset. De kunst van volhouden is niet harder duwen, maar slim afwisselen tussen **inspanning en herstel** — dat houd je veel langer vol dan jezelf leegtrekken.',
          glossary: [
            { term: 'Pomodoro', def: 'Werk-/pauzeritme: ~25 min werken, 5 min pauze, na enkele blokken langer rust.' },
            { term: 'Actief herstel', def: 'Pauze die echt oplaadt (bewegen, buiten) i.p.v. nieuwe prikkels (telefoon).' },
          ],
          priming: 'Werkt langer doorploeteren zonder pauze beter, of juist niet — en waarom?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat maakt een pauze het meest herstellend?',
              options: [
                'Meteen je telefoon checken',
                'Even bewegen of naar buiten, weg van schermen',
                'Doorwerken op iets anders',
                'Cafeïne bijnemen',
              ],
              correct: 1,
              explain: 'Echt herstel = rust en beweging, geen nieuwe prikkels zoals je telefoon.',
            },
            {
              type: 'truefalse',
              prompt: 'Afwisselen tussen inspanning en herstel houd je langer vol dan jezelf leegtrekken.',
              answer: true,
              explain: 'Aandacht werkt in golven; slim afwisselen verslaat eindeloos doorduwen.',
            },
          ],
          summary: [
            'Aandacht werkt in golven; pauzes horen bij goed werken.',
            'Pomodoro: werkblok → korte pauze → na enkele blokken langer rust.',
            'Echt herstel = bewegen/buiten, geen telefoon; wissel inspanning en herstel af.',
          ],
        },
        {
          id: 'si-f-4',
          title: 'Uitstelgedrag overwinnen',
          body:
            'Uitstelgedrag (**procrastinatie**) is geen luiheid maar vooral **emotie-regulatie**: je vermijdt een taak omdat hij vervelend, saai of spannend voelt, en het uitstellen geeft even opluchting. Snap je dat, dan snap je ook de oplossing — maak de taak minder zwaar in plaats van jezelf "meer discipline" op te leggen.\n\nDrie trucs. **Opdelen**: hak een grote, vage taak in een klein, concreet eerste stapje ("open het document en schrijf één zin"). De **tweeminuten-start** uit het gewoonte-topic: begin absurd klein, want eenmaal bezig rolt het vaak vanzelf door. En **prioriteren**: onderscheid urgent van belangrijk, en begin bij wat er echt toe doet in plaats van bij wat het makkelijkst voelt.\n\nWees ook mild voor jezelf. Jezelf afkraken over uitstel maakt het juist erger: meer vervelend gevoel betekent meer vermijden. Zie het uitstellen als een signaal ("waarom voelt dit zwaar?") in plaats van als karakterfout, verlaag de drempel, en vier dat je begonnen bent. De rest volgt bijna altijd op de eerste stap.',
          glossary: [
            { term: 'Procrastinatie', def: 'Uitstellen om een vervelend gevoel te vermijden; emotie-, geen tijdsprobleem.' },
            { term: 'Opdelen', def: 'Een grote taak terugbrengen tot een klein, concreet eerste stapje.' },
            { term: 'Urgent vs belangrijk', def: 'Begin bij wat er echt toe doet, niet bij wat het makkelijkst is.' },
          ],
          priming: 'Stel je iets uit omdat je lui bent, of omdat de taak een naar gevoel oproept?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Uitstelgedrag is vooral een kwestie van…',
              options: ['Luiheid', 'Een vervelend gevoel vermijden', 'Tijdgebrek', 'Te weinig talent'],
              correct: 1,
              explain: 'Procrastinatie is emotie-regulatie: je vermijdt het nare gevoel bij de taak.',
            },
            {
              type: 'whyhow',
              prompt: 'Hoe pak je een taak aan die je steeds blijft uitstellen?',
              model: 'Verlaag de drempel: deel hem op in een klein concreet eerste stapje en begin twee minuten. Onderscheid urgent van belangrijk en wees mild voor jezelf — jezelf afkraken vergroot juist de vermijding.',
            },
          ],
          summary: [
            'Procrastinatie = emotie vermijden, geen luiheid.',
            'Opdelen + tweeminuten-start + prioriteren (urgent vs belangrijk).',
            'Wees mild: afkraken vergroot vermijding; vier de eerste stap.',
          ],
        },
      ],
    },
    {
      id: 'mindset',
      title: 'Mindset',
      orbs: [
        {
          id: 'si-m-1',
          title: 'Growth mindset',
          body:
            'Psycholoog Carol Dweck onderscheidt twee houdingen. Bij een **fixed mindset** geloof je dat talent vastligt: "ik ben hier nu eenmaal niet goed in". Bij een **growth mindset** zie je vaardigheid als iets dat groeit door oefening en fouten: "ik ben hier **nog** niet goed in". Dat ene woordje — *nog* — verandert je hele houding tegenover leren.\n\nHet verschil zit vooral in hoe je met **fouten en tegenslag** omgaat. Wie een misser ziet als bewijs van falen, haakt af; wie hem ziet als informatie ("wat leert dit me?"), gaat door en komt verder. Een tegenslag is dan geen plafond maar feedback. Dit is het fundament onder alles in dit eiland: gewoontes, focus en volhouden werken alleen als je gelooft dat oefening echt verschil maakt.\n\nPraktisch: let op je innerlijke taal. Betrap je jezelf op "ik kan dit niet", voeg er dan "...nog" aan toe. Zoek uitdaging net buiten je comfortzone en behandel fouten als data, niet als oordeel. Voor jou, met "blijven leren" als kernwaarde, is dit eigenlijk al je grondhouding — het helpt om hem bewust te benoemen en in te zetten.',
          glossary: [
            { term: 'Fixed mindset', def: 'Geloof dat talent vastligt; fouten = bewijs van falen.' },
            { term: 'Growth mindset', def: 'Geloof dat vaardigheid groeit door oefening; fouten = informatie.' },
            { term: 'De kracht van "nog"', def: '"Ik kan dit nog niet" houdt de deur naar groei open.' },
          ],
          priming: 'Wat zegt je innerlijke stem als iets niet lukt — "ik kan dit niet" of "ik kan dit nog niet"?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat kenmerkt een growth mindset?',
              options: [
                'Talent ligt vast',
                'Vaardigheid groeit door oefening en fouten',
                'Fouten betekenen dat je het niet kunt',
                'Alleen aanleg telt',
              ],
              correct: 1,
              explain: 'Growth mindset ziet kunde als trainbaar; fouten zijn informatie.',
            },
            {
              type: 'truefalse',
              prompt: '"Ik ben hier nog niet goed in" weerspiegelt een growth mindset.',
              answer: true,
              explain: 'Het woord "nog" houdt de deur naar groei open.',
            },
          ],
          summary: [
            'Fixed mindset: talent ligt vast. Growth mindset: kunde groeit door oefening.',
            'Behandel fouten als informatie, niet als oordeel.',
            'Voeg "...nog" toe aan "ik kan dit niet"; zoek uitdaging net buiten je comfortzone.',
          ],
          sources: [
            { label: 'Carol Dweck — Mindset', url: 'https://www.mindsetworks.com/science/' },
          ],
        },
      ],
    },
  ],
};

import type { Island } from '../types';

export const tuin: Island = {
  id: 'tuin',
  title: 'Tuin & moestuin',
  blurb: 'Van grond begrijpen tot je eigen groenten oogsten.',
  icon: '🪴',
  color: '#16a34a',
  pos: { x: 30, y: 40 },
  topics: [
    {
      id: 'basis',
      title: 'Tuinbasis',
      orbs: [
        {
          id: 't-1',
          title: 'Ken je grond & standplaats',
          body:
            'De gouden regel in de tuin is "**de juiste plant op de juiste plek**". Een plant die van schaduw houdt kwijnt in de volle zon, en andersom — niet omdat je iets fout doet, maar omdat de standplaats niet klopt. Kijk dus eerst hoe je tuin ligt: waar valt \'s ochtends en \'s middags de zon, en waar blijft het schaduwig?\n\nDaarna je **grondsoort**. Knijp wat vochtige aarde samen: blijft het als een gladde worst plakken, dan heb je **klei** (voedzaam maar zwaar en traag); valt het meteen uit elkaar en voelt het korrelig, dan is het **zand** (luchtig maar droogt snel uit en spoelt voeding weg). De meeste tuinen zitten ertussenin. Klei verbeter je met compost en organisch materiaal; zand óók — compost is bijna altijd het antwoord.\n\nLet tot slot op **drainage**: blijft er na regen lang water staan, dan verrotten wortels. Door je grond en licht te kennen voorkom je de meeste teleurstellingen vóór je ook maar iets plant.',
          glossary: [
            { term: 'Standplaats', def: 'Hoeveel zon/schaduw en wind een plek krijgt; bepaalt welke plant er past.' },
            { term: 'Grondsoort', def: 'Klei (zwaar, voedzaam) vs zand (luchtig, droog); meestal iets ertussenin.' },
            { term: 'Drainage', def: 'Hoe goed water wegloopt; staand water laat wortels rotten.' },
          ],
          priming: 'Waarom kwijnt dezelfde plant op de ene plek en bloeit hij op de andere?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is bijna altijd een goede bodemverbeteraar, of je nu klei of zand hebt?',
              options: ['Zand toevoegen', 'Compost/organisch materiaal', 'Meer water', 'Kalk'],
              correct: 1,
              explain: 'Compost verbetert zowel zware klei als arme, droge zandgrond.',
            },
            {
              type: 'truefalse',
              prompt: 'De juiste plant op de juiste plek is belangrijker dan harder je best doen.',
              answer: true,
              explain: 'Standplaats (licht, grond, water) bepaalt het meeste; kies de plant daarop.',
            },
          ],
          summary: [
            'Kijk eerst naar zon/schaduw: de juiste plant op de juiste plek.',
            'Grond: klei (zwaar/voedzaam) vs zand (luchtig/droog); compost verbetert beide.',
            'Let op drainage — staand water laat wortels rotten.',
          ],
        },
        {
          id: 't-2',
          title: 'Water & voeding',
          body:
            'Bij water geven maken de meeste mensen dezelfde fout: vaak een beetje. Beter is **minder vaak, maar diep**. Een flinke gietbeurt laat het water diep de grond in zakken, zodat wortels naar beneden groeien en de plant droogte beter doorstaat. Oppervlakkig sproeien houdt de wortels juist bovenin, waar het het snelst uitdroogt.\n\nGiet bij voorkeur **\'s ochtends** en bij de voet van de plant, niet over de bladeren (nat blad in de avond nodigt schimmel uit). Een laag **mulch** — stro, houtsnippers, gedroogd gras — bovenop de grond houdt vocht vast, remt onkruid en voedt langzaam de bodem.\n\nVoeding hoeft niet ingewikkeld. Een gezonde bodem met **compost** geeft planten het grootste deel van wat ze nodig hebben; je voedt eigenlijk de bodem, niet de plant. Vraatzuchtige groenten (tomaat, courgette) waarderen wat extra organische mest. Maar overdaad schaadt: te veel (kunst)mest geeft slappe groei en meer ziekte. Gezonde grond is het echte fundament.',
          glossary: [
            { term: 'Diep water geven', def: 'Minder vaak maar flink, zodat wortels naar beneden groeien.' },
            { term: 'Mulch', def: 'Beschermlaag (stro/snippers) die vocht vasthoudt en onkruid remt.' },
            { term: 'De bodem voeden', def: 'Met compost de grond gezond houden; die voedt de plant.' },
          ],
          priming: 'Is elke dag een beetje sproeien goed voor een plant — of juist niet?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is de betere manier van water geven?',
              options: ['Elke dag een beetje, oppervlakkig', 'Minder vaak maar diep', '\'s Avonds over de bladeren', 'Alleen als de plant slap hangt'],
              correct: 1,
              explain: 'Diep en minder vaak laat wortels naar beneden groeien — droogtebestendiger.',
            },
            {
              type: 'truefalse',
              prompt: 'Een laag mulch houdt vocht vast en remt onkruid.',
              answer: true,
              explain: 'Mulch beschermt de bodem, bespaart water en voedt langzaam.',
            },
          ],
          summary: [
            'Water: minder vaak maar diep, \'s ochtends en bij de voet.',
            'Mulch houdt vocht vast en remt onkruid.',
            'Voed de bodem met compost; te veel mest schaadt juist.',
          ],
        },
        {
          id: 't-3',
          title: 'Het tuinseizoen',
          body:
            'Tuinieren volgt de seizoenen, en weten wat wanneer kan scheelt veel mislukkingen. Het ritme in het kort: in het **voorjaar** (maart–mei) ontwaakt alles — je zaait, plant en geeft de tuin een opfrisbeurt. De grote valkuil is te vroeg buiten zaaien: wacht met vorstgevoelige planten tot na de **IJsheiligen** (half mei), als er geen nachtvorst meer komt.\n\nIn de **zomer** (juni–augustus) draait het om onderhoud: water geven, oogsten, onkruid wieden en uitgebloeide bloemen weghalen zodat planten blijven doorbloeien. In de **herfst** (september–november) oogst je het laatste, plant je bloembollen voor het voorjaar, en ruim je op — al mag een deel "rommel" blijven liggen als schuilplek voor egels en insecten.\n\nIn de **winter** rust de tuin. Snoei wat moet, bescherm kwetsbare planten, en plan alvast het volgende seizoen. Door mee te bewegen met dit ritme werk je mét de natuur in plaats van ertegen — en dat maakt tuinieren een stuk makkelijker en leuker.',
          glossary: [
            { term: 'IJsheiligen', def: 'Rond half mei; daarna meestal geen nachtvorst — veilig voor kwetsbare planten.' },
            { term: 'Uitgebloeid weghalen', def: 'Dode bloemen knippen zodat de plant blijft doorbloeien.' },
          ],
          priming: 'Waarom is half mei een belangrijk moment voor wie buiten wil zaaien of planten?',
          questions: [
            {
              type: 'ordering',
              prompt: 'Zet de seizoenstaken op volgorde door het jaar:',
              items: [
                'Voorjaar: zaaien & planten',
                'Zomer: water, oogsten, onderhoud',
                'Herfst: bloembollen planten & oogsten',
                'Winter: snoeien, beschermen, plannen',
              ],
              explain: 'Voorjaar zaaien → zomer onderhouden → herfst planten/oogsten → winter rust.',
            },
            {
              type: 'truefalse',
              prompt: 'Vorstgevoelige planten zet je beter pas na de IJsheiligen (half mei) buiten.',
              answer: true,
              explain: 'Daarna is de kans op nachtvorst klein; eerder riskeer je schade.',
            },
          ],
          summary: [
            'Voorjaar zaaien/planten, maar pas na de IJsheiligen voor kwetsbare planten.',
            'Zomer = onderhoud; herfst = oogsten & bollen planten; winter = rust/plannen.',
            'Beweeg mee met de seizoenen; werk mét de natuur.',
          ],
        },
      ],
    },
    {
      id: 'moestuin',
      title: 'Moestuin',
      orbs: [
        {
          id: 't-4',
          title: 'Makkelijke groenten om te starten',
          body:
            'Begin je eigen moestuin, dan is de slimste keuze: start met groenten die **snel resultaat en weinig gedoe** geven. Niets motiveert zo als binnen een paar weken iets kunnen oogsten.\n\nDe aanraders voor beginners: **radijs** (klaar in 4–6 weken), **sla** (pluk telkens de buitenste blaadjes, dan groeit hij door), **courgette** (één plant geeft een hele zomer lang vruchten), **kruiden** als peterselie, bieslook en munt (zelfs in een pot op het balkon), en **tuinbonen of sperziebonen**. Tomaten zijn ook dankbaar, maar willen warmte en wat meer aandacht.\n\nBegin **klein**: een enkele bak of een vierkante meter is genoeg om te leren zonder jezelf te verliezen in onderhoud. Liever één bakje dat je goed verzorgt dan een hele moestuin die overwoekert. Voor jou, met een kind op komst, is een paar potten kruiden en sla bij de keukendeur misschien wel de fijnste start: weinig werk, direct te plukken.',
          glossary: [
            { term: 'Pluksla', def: 'Sla waarvan je telkens de buitenste blaadjes oogst; groeit door.' },
            { term: 'Klein beginnen', def: 'Eén bak of m² om te leren zonder in onderhoud te verzuipen.' },
          ],
          priming: 'Welke groente zou jij willen kunnen plukken vlak bij je keukendeur?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Welke groente geeft het snelst resultaat voor een beginner?',
              options: ['Pompoen', 'Radijs', 'Asperge', 'Prei'],
              correct: 1,
              explain: 'Radijs is in 4–6 weken te oogsten — snelle motivatie.',
            },
            {
              type: 'truefalse',
              prompt: 'Klein beginnen (één bak) werkt beter dan meteen een grote moestuin.',
              answer: true,
              explain: 'Eén plek goed verzorgen leert je meer dan een overwoekerde tuin.',
            },
          ],
          summary: [
            'Start met snelle, makkelijke gewassen: radijs, sla, courgette, kruiden, bonen.',
            'Pluk sla blad voor blad; één courgetteplant geeft een hele zomer.',
            'Begin klein — liever één bak goed dan een hele moestuin die overwoekert.',
          ],
        },
        {
          id: 't-5',
          title: 'Zaaien, verspenen & oogsten',
          body:
            'Zaaien luistert nauwer dan je denkt, maar de regels zijn simpel. **Zaaidiepte**: een vuistregel is "twee keer de dikte van het zaadje". Fijn zaad (sla, wortel) ligt dus net onder het oppervlak; grote zaden (bonen, courgette) een paar centimeter diep. Te diep zaaien is een veelgemaakte fout — het zaadje haalt het licht niet.\n\nVeel groenten kun je **voorzaaien** binnen (in potjes op de vensterbank) en pas na de IJsheiligen buiten zetten; zo win je weken en bescherm je tegen vorst. Komen je zaailingen te dicht op elkaar, dan moet je **verspenen** of uitdunnen: de zwakste eruit halen zodat de sterkste de ruimte krijgen. Dat voelt zonde, maar tien gezonde planten leveren meer op dan vijftig die elkaar verstikken.\n\nEn **oogsten**: pluk regelmatig en op tijd. Veel groenten (sla, courgette, bonen) geven juist méér als je blijft oogsten — laat je ze doorschieten, dan stopt de productie. Op tijd oogsten houdt de plant aan het werk.',
          glossary: [
            { term: 'Zaaidiepte', def: 'Vuistregel: ongeveer twee keer de dikte van het zaadje.' },
            { term: 'Voorzaaien', def: 'Binnen in potjes starten en later buiten uitplanten; wint weken.' },
            { term: 'Verspenen/uitdunnen', def: 'Zaailingen uitdunnen zodat de sterkste de ruimte krijgen.' },
          ],
          priming: 'Wat gebeurt er als je een fijn slazaadje te diep wegstopt?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is de vuistregel voor zaaidiepte?',
              options: ['Zo diep mogelijk', 'Ongeveer twee keer de dikte van het zaadje', 'Altijd 5 cm', 'Bovenop de grond'],
              correct: 1,
              explain: 'Twee keer de zaaddikte; te diep en het zaadje haalt het licht niet.',
            },
            {
              type: 'truefalse',
              prompt: 'Regelmatig oogsten zorgt er bij veel groenten voor dat ze méér blijven geven.',
              answer: true,
              explain: 'Sla, courgette en bonen blijven produceren als je blijft plukken.',
            },
          ],
          summary: [
            'Zaaidiepte ≈ twee keer de zaaddikte; te diep is een klassieke fout.',
            'Voorzaaien binnen wint weken; verspeen/dun uit voor sterke planten.',
            'Oogst regelmatig en op tijd — dat houdt de productie op gang.',
          ],
        },
        {
          id: 't-6',
          title: 'Compost & bodemleven',
          body:
            'Compost is het kloppend hart van een gezonde tuin: je maakt er gratis bodemvoeding van uit afval dat je toch al hebt. In een composthoop of -bak verteren keukenresten (schillen, koffiedik) en tuinafval (blad, gemaaid gras) tot rijke, donkere aarde vol voeding.\n\nDe truc is **balans tussen "groen" en "bruin"**. Groen materiaal (vers gras, groenteresten) is nat en stikstofrijk; bruin materiaal (droog blad, karton, takjes) is droog en koolstofrijk. Te veel groen gaat stinken en wordt een natte brij; te veel bruin verteert traag. Een mix van beide, af en toe omscheppen voor zuurstof, en je krijgt vanzelf goede compost. Geen vlees, vis of zuivel — dat trekt ongedierte aan.\n\nWat je eigenlijk voedt is het **bodemleven**: regenwormen, schimmels en bacteriën die organisch materiaal omzetten in voeding die planten kunnen opnemen. Een levende bodem is veerkrachtiger, houdt water beter vast en geeft gezondere planten. Composteren sluit zo de kringloop: afval wordt voeding, voeding wordt nieuwe groei.',
          glossary: [
            { term: 'Groen vs bruin', def: 'Groen = nat/stikstofrijk (gras, resten); bruin = droog/koolstofrijk (blad, karton).' },
            { term: 'Bodemleven', def: 'Wormen, schimmels en bacteriën die afval omzetten in plantenvoeding.' },
          ],
          priming: 'Wat gebeurt er met je groente- en tuinafval als je het niet weggooit maar laat verteren?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat hoort NIET op de composthoop?',
              options: ['Bladeren', 'Koffiedik', 'Vlees en zuivel', 'Groenteschillen'],
              correct: 2,
              explain: 'Vlees, vis en zuivel trekken ongedierte aan; houd het bij plantaardig.',
            },
            {
              type: 'truefalse',
              prompt: 'Goede compost vraagt een balans tussen "groen" en "bruin" materiaal.',
              answer: true,
              explain: 'Te veel groen gaat stinken; te veel bruin verteert traag.',
            },
          ],
          summary: [
            'Compost maakt gratis bodemvoeding van keuken- en tuinafval.',
            'Balans groen (nat/stikstof) en bruin (droog/koolstof); af en toe omscheppen.',
            'Geen vlees/vis/zuivel; je voedt het bodemleven dat de kringloop sluit.',
          ],
        },
      ],
    },
  ],
};

import type { Island } from '../types';

export const japans: Island = {
  id: 'japans',
  title: 'Japanse filosofie',
  blurb: 'Zen, schoonheid en levenskunst — van wabi-sabi tot ikigai.',
  icon: '⛩️',
  color: '#fb7185',
  pos: { x: 44, y: 56 },
  topics: [
    {
      id: 'zen-esthetiek',
      title: 'Zen & esthetiek',
      orbs: [
        {
          id: 'j-1',
          title: 'Zen & aandacht',
          body:
            '**Zen** is een vorm van boeddhisme die de nadruk legt op directe ervaring boven theorie: niet eindeloos praten over verlichting, maar het beoefenen ervan — vooral via **zazen**, zittende meditatie waarbij je simpelweg aanwezig bent en je adem volgt. De westerse mindfulness-beweging put rechtstreeks uit deze traditie.\n\nEen kernidee is **shoshin**, "beginnersgeest". Zoals zenleraar Shunryu Suzuki het zei: *"In de geest van de beginner zijn er vele mogelijkheden, in die van de expert weinig."* Een beginner kijkt open en nieuwsgierig; een expert denkt het al te weten en ziet daardoor minder. Bewust als beginner kijken houdt je leergierig en scherp — toepasselijk voor iemand die steeds nieuwe dingen leert.\n\nZen zit ook in het **alledaagse**: thee zetten, schoonmaken, een instrument bespelen — als je het met volle aandacht doet, wordt elke handeling een vorm van oefening. Niet het bijzondere moment telt, maar de aandacht die je aan het gewone geeft. Daarin raakt zen aan precies dat wat een gewoonte of vaardigheid diep maakt: volledig aanwezig zijn bij wat je doet.',
          glossary: [
            { term: 'Zazen', def: 'Zittende zenmeditatie: aanwezig zijn, de adem volgen.' },
            { term: 'Shoshin', def: '"Beginnersgeest": open, nieuwsgierig kijken alsof je het voor het eerst ziet.' },
          ],
          priming: 'Waarom ziet een beginner soms meer mogelijkheden dan een expert?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat betekent "shoshin" (beginnersgeest)?',
              options: [
                'Dat experts altijd gelijk hebben',
                'Open en nieuwsgierig kijken alsof het de eerste keer is',
                'Nooit ergens goed in worden',
                'Snel oordelen',
              ],
              correct: 1,
              explain: 'Beginnersgeest houdt je open en leergierig; de "expert" ziet vaak minder.',
            },
            {
              type: 'truefalse',
              prompt: 'Zen legt de nadruk op directe ervaring en aandacht boven enkel theorie.',
              answer: true,
              explain: 'Beoefening (zazen, aandacht in het alledaagse) staat centraal.',
            },
          ],
          summary: [
            'Zen: directe ervaring en aandacht boven theorie; bron van mindfulness.',
            'Shoshin = beginnersgeest: open kijken houdt je leergierig.',
            'Aandacht voor het alledaagse maakt elke handeling tot oefening.',
          ],
          sources: [
            { label: 'Shunryu Suzuki — Zen Mind, Beginner\'s Mind', url: 'https://en.wikipedia.org/wiki/Zen_Mind,_Beginner%27s_Mind' },
          ],
        },
        {
          id: 'j-2',
          title: 'Wabi-sabi',
          body:
            '**Wabi-sabi** is een Japans schoonheidsideaal dat haaks staat op het westerse streven naar glad, nieuw en perfect. Het ziet juist schoonheid in het **imperfecte, vergankelijke en onaffe**: een scheurtje in een theekom, verweerd hout, mos op een steen, de onregelmatigheid van iets handgemaakts.\n\nDe twee woorden samen vangen een gevoel. *Wabi* verwijst naar een sobere, ingetogen eenvoud; *sabi* naar de schoonheid die ontstaat door ouderdom en gebruik — de patina van de tijd. Een gebarsten, gerepareerde kom (denk aan **kintsugi**, waarbij breuken met goud worden gevuld) is niet minder waard maar juist mooier, omdat zijn geschiedenis zichtbaar is.\n\nAls levenshouding nodigt wabi-sabi uit om de jacht op perfectie los te laten. Dingen — en mensen — hoeven niet onberispelijk te zijn om waardevol te zijn; juist de imperfecties maken iets echt en eigen. Voor wie snel streng is voor zichzelf is dat een bevrijdende gedachte: niet "nog niet goed genoeg", maar mooi juist omdát het niet af is.',
          glossary: [
            { term: 'Wabi-sabi', def: 'Schoonheid van het imperfecte, vergankelijke en onaffe.' },
            { term: 'Kintsugi', def: 'Gebroken aardewerk repareren met goud — de breuk wordt deel van de schoonheid.' },
          ],
          priming: 'Kan iets met een barst of sporen van gebruik mooier zijn dan iets gloednieuws?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Waar draait wabi-sabi om?',
              options: [
                'Perfectie en symmetrie',
                'Schoonheid in imperfectie en vergankelijkheid',
                'Zo nieuw mogelijk',
                'Felle kleuren',
              ],
              correct: 1,
              explain: 'Wabi-sabi ziet schoonheid juist in het onvolmaakte en verweerde.',
            },
            {
              type: 'truefalse',
              prompt: 'Bij kintsugi worden breuken verborgen zodat je ze niet meer ziet.',
              answer: false,
              explain: 'Juist andersom: breuken worden met goud benadrukt als deel van de schoonheid.',
            },
          ],
          summary: [
            'Wabi-sabi: schoonheid van het imperfecte, vergankelijke, onaffe.',
            'Kintsugi maakt een breuk zichtbaar (met goud) i.p.v. te verbergen.',
            'Levensles: laat de jacht op perfectie los — imperfectie maakt echt.',
          ],
        },
        {
          id: 'j-3',
          title: 'Mono no aware',
          body:
            '**Mono no aware** — ongeveer "de ontroering der dingen" — is een van de subtielste begrippen uit de Japanse cultuur. Het beschrijft de tedere, lichte melancholie die je voelt bij het besef dat alles voorbijgaat. Niet zwaar verdriet, maar een zacht weemoedig besef van vergankelijkheid, vermengd met waardering.\n\nHet klassieke beeld is de **kersenbloesem (sakura)**: prachtig juist omdát hij maar een paar dagen bloeit. Zou de bloesem eeuwig blijven, dan zou hij ons minder raken. De schoonheid en de vergankelijkheid horen bij elkaar. Hetzelfde voel je bij een laatste zomeravond, een kind dat snel groeit, of een moment waarvan je weet dat het niet blijft.\n\nDit begrip leert je niet om verdrietig te zijn over vergankelijkheid, maar om er juist **aandachtiger** door te leven. Omdat dingen voorbijgaan, zijn ze kostbaar. Het sluit aan bij het stoïcijnse *memento mori*, maar met een zachtere, meer esthetische toon: niet "gedenk de dood", maar "voel de schoonheid van het vluchtige". Voor een aanstaande vader een toepasselijke gedachte — die eerste maanden komen één keer.',
          glossary: [
            { term: 'Mono no aware', def: 'De tedere weemoed bij het besef dat alles voorbijgaat — met waardering.' },
            { term: 'Sakura', def: 'Kersenbloesem; symbool van schoonheid juist door zijn vergankelijkheid.' },
          ],
          priming: 'Waarom raakt iets moois ons soms juist méér omdat het niet blijft?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat beschrijft "mono no aware"?',
              options: [
                'Zwaar verdriet om verlies',
                'Tedere weemoed bij vergankelijkheid, mét waardering',
                'Onverschilligheid',
                'Angst voor de dood',
              ],
              correct: 1,
              explain: 'Een zachte melancholie die vergankelijkheid en waardering verbindt.',
            },
            {
              type: 'whyhow',
              prompt: 'Hoe kan het besef van vergankelijkheid je juist aandachtiger laten leven?',
              model: 'Omdat dingen voorbijgaan, worden ze kostbaar. Het besef dat een moment niet blijft, maakt dat je er bewuster van geniet in plaats van het als vanzelfsprekend te nemen — net als de kersenbloesem die ontroert juist omdat hij kort bloeit.',
            },
          ],
          summary: [
            'Mono no aware: zachte weemoed bij vergankelijkheid, vermengd met waardering.',
            'De kersenbloesem ontroert juist omdat hij kort bloeit.',
            'Vergankelijkheid maakt momenten kostbaar — leef er aandachtiger door.',
          ],
        },
        {
          id: 'j-4',
          title: 'Ma — de kracht van de leegte',
          body:
            '**Ma** (間) is het Japanse begrip voor de **betekenisvolle leegte**: de ruimte, pauze of stilte tússen dingen. In het Westen denken we al snel dat leegte "niets" is en opgevuld moet worden. In de Japanse esthetiek is die ruimte juist actief en dragend — zonder de stilte geen muziek, zonder de witruimte geen vorm.\n\nJe ziet ma overal: de lege ruimte in een schilderij die het onderwerp laat ademen, de pauze in een gesprek die gewicht geeft, de open plek in een kamer of tuin. In **muziek** is ma misschien het duidelijkst — en dat raakt jou direct met de shakuhachi: de **stilte tussen de tonen** is daar geen gebrek aan noten maar deel van de muziek zelf. De adem, de ruimte, het wegsterven van een toon dragen net zoveel betekenis als de noot.\n\nAls levensles wijst ma op de waarde van **ruimte laten**: niet elke stilte vullen, niet elke agenda volplannen, niet elke leegte als probleem zien. Soms ontstaat betekenis juist in wat je weglaat. Voor een druk, parallel werkend hoofd is dat een waardevolle tegenbeweging.',
          glossary: [
            { term: 'Ma (間)', def: 'De betekenisvolle leegte/ruimte of pauze tussen dingen; actief, niet "niets".' },
            { term: 'Stilte in muziek', def: 'De ruimte tussen tonen draagt betekenis — kern van bv. shakuhachi-spel.' },
          ],
          priming: 'Kan de stilte tússen de noten net zo belangrijk zijn als de noten zelf?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is "ma" in de Japanse esthetiek?',
              options: [
                'Lege ruimte die je moet opvullen',
                'De betekenisvolle leegte/pauze tussen dingen',
                'Een muziekinstrument',
                'Een kleur',
              ],
              correct: 1,
              explain: 'Ma is de actieve, dragende ruimte/stilte — niet zomaar "niets".',
            },
            {
              type: 'truefalse',
              prompt: 'Volgens het idee van ma hoeft niet elke stilte of ruimte opgevuld te worden.',
              answer: true,
              explain: 'Betekenis ontstaat juist ook in wat je weglaat — ruimte laten heeft waarde.',
            },
          ],
          summary: [
            'Ma = de betekenisvolle leegte/pauze; ruimte is actief, niet "niets".',
            'In muziek draagt de stilte tussen tonen mee (denk shakuhachi).',
            'Levensles: laat ruimte; niet alles hoeft gevuld.',
          ],
        },
      ],
    },
    {
      id: 'levenskunst',
      title: 'Levenskunst',
      orbs: [
        {
          id: 'j-5',
          title: 'Ikigai — echt en als mythe',
          body:
            '**Ikigai** betekent letterlijk zoiets als "datgene wat het leven de moeite waard maakt" — je reden om \'s ochtends op te staan. In Japan is het een alledaags woord, en het verwijst vaak naar **kleine, concrete bronnen van vreugde**: je ochtendkoffie, je hobby, je kinderen, je werk, een routine die je voldoening geeft. Niet per se iets groots of levensbepalends.\n\nMisschien ken je het beroemde **Venn-diagram** met vier overlappende cirkels (waar je goed in bent, van houdt, mee kunt verdienen, en wat de wereld nodig heeft). Belangrijk om te weten: dat diagram is een **westerse uitvinding** (rond 2014) en oorspronkelijk niet eens over ikigai — het is door bloggers met het Japanse woord vermengd. Het is een aardig denkkader voor loopbaankeuzes, maar níét wat ikigai in Japan betekent.\n\nDe echte boodschap is geruststellender: je ikigai hoeft geen perfecte combinatie van passie, missie en inkomen te zijn. Het mag klein en dichtbij zijn. Voor jou kan het net zo goed in je muziek, je gezin in wording of een vaste ochtendgewoonte zitten als in een grootse "levensmissie".',
          glossary: [
            { term: 'Ikigai', def: 'Dat wat het leven de moeite waard maakt; vaak kleine, dagelijkse bronnen van vreugde.' },
            { term: 'Het Venn-diagram', def: 'Westerse populariseringen (~2014), níét de oorspronkelijke Japanse betekenis.' },
          ],
          priming: 'Moet je "reden van bestaan" iets groots zijn, of mag het ook klein en alledaags?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat is waar over het bekende ikigai-Venn-diagram (4 cirkels)?',
              options: [
                'Het is de oorspronkelijke Japanse definitie',
                'Het is een latere westerse popularisering, niet de echte betekenis',
                'Het komt uit een Japans woordenboek',
                'Het gaat alleen over geld',
              ],
              correct: 1,
              explain: 'Het diagram is een westerse vermenging (~2014); echt ikigai is breder en alledaagser.',
            },
            {
              type: 'truefalse',
              prompt: 'Ikigai kan ook in kleine, dagelijkse dingen zitten, niet alleen in een grootse missie.',
              answer: true,
              explain: 'In Japans gebruik verwijst het vaak juist naar kleine bronnen van vreugde.',
            },
          ],
          summary: [
            'Ikigai = dat wat je leven de moeite waard maakt; vaak klein en alledaags.',
            'Het beroemde 4-cirkel-diagram is een westerse mythe, niet de echte betekenis.',
            'Je ikigai hoeft geen perfecte passie/missie/geld-combinatie te zijn.',
          ],
          sources: [
            { label: 'Over de ikigai-Venn-mythe (oorsprong Marc Winn, 2014)', url: 'https://en.wikipedia.org/wiki/Ikigai' },
          ],
        },
        {
          id: 'j-6',
          title: 'Kaizen & shokunin',
          body:
            'Twee Japanse begrippen vatten een houding van meesterschap samen. **Kaizen** betekent "verandering ten goede": continu verbeteren in **kleine stapjes**. Beroemd geworden in de fabrieken van Toyota, maar als idee veel breder toepasbaar. De kern: je hoeft niet in één keer alles om te gooien; elke dag een procent beter telt op tot grote vooruitgang. Dit sluit naadloos aan op gewoontes en de tweeminutenregel — klein en consistent verslaat groot en sporadisch.\n\n**Shokunin** verwijst naar de **ambachtsman** met diepe toewijding aan zijn vak. Een shokunin streeft niet naar roem of geld, maar naar het zo goed mogelijk beheersen en eren van zijn ambacht — of dat nu sushi maken, hout bewerken of een instrument bespelen is. Er zit ook een sociale kant aan: je vakmanschap inzetten ten dienste van anderen.\n\nSamen schetsen ze een aantrekkelijk pad: kies een ambacht of vaardigheid, verbeter er elke dag een beetje aan (kaizen), en benader het met de toewijding van een vakman (shokunin). Voor iemand die muziek maakt, klust en blijft leren is dat bijna een levensmotto: meesterschap is geen sprong maar een lange reeks kleine, toegewijde stappen.',
          glossary: [
            { term: 'Kaizen', def: 'Continu verbeteren in kleine stapjes; elke dag een beetje beter.' },
            { term: 'Shokunin', def: 'Ambachtsman met diepe toewijding aan het beheersen en eren van zijn vak.' },
          ],
          priming: 'Word je ergens meester in door één grote sprong, of door iets anders?',
          questions: [
            {
              type: 'mcq',
              prompt: 'Wat betekent "kaizen"?',
              options: [
                'In één keer alles veranderen',
                'Continu verbeteren in kleine stapjes',
                'Nooit iets veranderen',
                'Alleen verbeteren als het moet',
              ],
              correct: 1,
              explain: 'Kaizen = stapsgewijze, voortdurende verbetering; klein en consistent.',
            },
            {
              type: 'truefalse',
              prompt: 'Een shokunin streeft vooral naar toewijding aan en meesterschap in zijn vak.',
              answer: true,
              explain: 'De ambachtsman eert zijn vak, vaak ten dienste van anderen, boven roem of geld.',
            },
          ],
          summary: [
            'Kaizen: continu verbeteren in kleine stapjes — sluit aan op gewoontes.',
            'Shokunin: de toegewijde ambachtsman die zijn vak eert.',
            'Meesterschap = lange reeks kleine, toegewijde stappen.',
          ],
        },
      ],
    },
  ],
};

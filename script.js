const images = [
  { src: 'img/Ausgang.jpeg',
     alt: 'Katzen vor dem Gartentor',
      caption: 'Kiwi und Litchi besprechen ihr Vorgehen, die Welt zu erobern' },

  { src: 'img/BreakIsOver.jpeg',
     alt: 'Katze vor dem Fenster',
      caption: 'Nach einem gemütlichen Mittagsschlaf entschliesst sich Kiwi zu einem neuen Abenteuer' },

  { src: 'img/CatYoga.jpeg',
     alt: 'eingerollte Katze auf einem Sitzkissen',
      caption: 'Yoga macht Kiwi am liebsten gleich nach dem Aufstehen' },

  { src: 'img/Cuddleboy.jpeg',
     alt: 'schlafende Katze auf einem Bürostuhl',
      caption: 'Zuerst hat sich Kiwi sein Blatt geschnappt und ist dann nach dem Spielen damit auf seinem Lieblingsstuhl eingeschlafen' },

  { src: 'img/CutenessOverload.jpeg',
     alt: 'Katze in einem Reisekoffer',
      caption: 'Litchi findet, dass erste was man in den Koffer packen sollte, ist sie selbst' },

  { src: 'img/Cutie.jpeg',
     alt: 'süsse Katze auf dem Tisch im Gegenlicht',
     caption: 'Litchi beobachtet das Geschehen' },

  { src: 'img/FlagAndScrap.jpeg',
     alt: 'zwei Katzen in Flur',
      caption: 'Litchi und Kiwi auf ihrem Lieblingsplatz im Flur' },

  { src: 'img/GuardiansOfTheFlag.jpeg',
     alt: 'zwei Katzen entspannen auf der Scchweizer Fahne',
      caption: 'Kiwi und Litchi finden, es gibt nicht gemütlicheres, als die Schweizer Fahne und bewachen sie mit Adleraugen' },

  { src: 'img/HappyAmMac.jpeg',
     alt: 'Katze blinzelt vor dem Fenster',
      caption: 'Litchi blinzelt von ihrem Fensterplatz und bewacht den Mac' },

  { src: 'img/HmThatSmell.jpeg',
     alt: 'Katze liegt zur Hälfte auf 2 Paar Schuhen',
      caption: 'Kiwi kennt keinen herrlicheren Geruch als den von alten Schuhen' },

  { src: 'img/Hmmmmmmnomnom.jpeg',
     alt: 'Katze beschnuppert eine Schale Pistazien',
      caption: 'Kiwi beschnuppert die Unwiderstehlichkeit von Pistazien' },

  { src: 'img/Jellybeans.jpeg',
     alt: 'die Pfote einer Katze',
      caption: 'Kiwi beweist, dass seine Poten frisch geputzt sind' },

  { src: 'img/KiwiAnDerTür.jpeg',
     alt: 'Katze an einer Balkontüre',
      caption: 'Kiwi will wissen, was da draussen am Balkon los ist' },

  { src: 'img/KiwiAndLitchiOnTheFloor.jpeg',
     alt: 'two cats smiling in the camera',
      caption: 'Hey, das ist eine Katzensache!' },

  { src: 'img/KiwiAufDemBett.jpeg',
     alt: 'Katze in Sphinx-Stellung auf dem Bett',
      caption: 'Kiwi überlegt, ob er sein Refugium auf dem Bett teilen soll' },

  { src: 'img/KiwiOnTheHunt.jpeg',
     alt: 'Katze lauert an der Ecke eines Tisches',
      caption: 'Kiwi, der Herrscher des Tisches belauert seine Beute da unten' },

  { src: 'img/KiwiVerspielt.jpeg',
     alt: 'Katze auf dem Rücken liegend',
      caption: 'Kiwi entspannt vor der Wohnungstür' },

  { src: 'img/KiwiWartetamFenster.jpeg',
     alt: 'Katze hinter dem Fenster versteckt',
      caption: 'Kiwi schaut, wer da kommt' },

  { src: 'img/LeaveItUpToMe.jpeg',
     alt: 'Katze, die hinter dem Kissen etwas sucht',
      caption: 'Kiwi findet immer, wonach er sucht' },

  { src: 'img/LeaveMeAlone.jpeg',
     alt: 'Katze verdeckt sich ihr Augen',
      caption: 'Kiwi findet es einfach zu hell' },

  { src: 'img/Lipstick.jpeg',
     alt: 'Katze mit einem roten Gegenstand vor der Nase',
      caption: 'Litchi will mal eine neue Farbe für ihren Lippenstift probieren' },

  { src: 'img/LitchiLoaf.jpeg',
     alt: 'Katze vor einem Schrank',
      caption: 'Litchi in Brot-Pose' },

  { src: 'img/LitchiSpeist.jpeg',
     alt: 'Katze vor ihrer Futterschüssel',
      caption: 'Litchi: "Missachtung des Gerichts!"' },

  { src: 'img/LitchiTheCoder.jpeg',
     alt: 'Katze auf einem Laptop',
      caption: 'Litchi findet den Fehler in der Responsiveness' },

  { src: 'img/LithchiTheGuardian.jpeg',
     alt: 'Katze vor einem Gartentor',
      caption: 'Litchi bewacht den Garten' },

  { src: 'img/MasterIsMeditating.jpeg',
     alt: 'Katze schläft auf dem Tisch',
      caption: 'Kiwi hält sein Mittagsschläfchen' },

  { src: 'img/MumIsPlayingWithMe.jpeg',
     alt: 'Katze an Pistazienschalen',
      caption: 'Kiwi wird mit Pistazienschalen verziert' },

  { src: 'img/PeacefulRest.jpeg',
     alt: 'Katzen liegen auf einem gefliessten Boden',
      caption: '"Es ist warm, und der Boden kühl!"' },

  { src: 'img/Predators.jpeg',
     alt: 'Katzen auf dem Küchentisch',
      caption: '"Das ist unser Snack!"' },

  { src: 'img/ReadyForPeticure.jpeg',
     alt: 'Katzenpfoten',
      caption: '"Zeigt her Eure Füsse..."' },

  { src: 'img/Sunflower.jpeg',
     alt: 'Katzen mit einer Sonnenblume',
      caption: '"Hm, diese Blume riecht aber gut!"' },

  { src: 'img/SuoergirlWithPlant.jpeg',
     alt: 'Katze am Fenster',
      caption: 'Litchi, the Supergirl rises' },

  { src: 'img/TheMasterAwakes.jpeg',
     alt: 'Katze beim Nickerchen',
      caption: '"Nun, da meine Untertanen anwesend sind, kann ich aufstehen!"' },

  { src: 'img/ThereIsSomething.jpeg',
     alt: 'Katzen auf einem Küchentisch',
      caption: 'Snacks, Snacks, Snacks' }
]

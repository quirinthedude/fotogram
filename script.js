const IMAGES = [
  { src: 'img/full/Ausgang.jpeg',
     alt: 'Katzen vor dem Gartentor',
      caption: 'Kiwi und Litchi besprechen ihr Vorgehen, die Welt zu erobern' },

  { src: 'img/full/BreakIsOver.jpeg',
     alt: 'Katze vor dem Fenster',
      caption: 'Nach einem gemütlichen Mittagsschlaf entschliesst sich Kiwi zu einem neuen Abenteuer' },

  { src: 'img/full/CatYoga.jpeg',
     alt: 'eingerollte Katze auf einem Sitzkissen',
      caption: 'Yoga macht Kiwi am liebsten gleich nach dem Aufstehen' },

  { src: 'img/full/Cuddleboy.jpeg',
     alt: 'schlafende Katze auf einem Bürostuhl',
      caption: 'Zuerst hat sich Kiwi sein Blatt geschnappt und ist dann nach dem Spielen damit auf seinem Lieblingsstuhl eingeschlafen' },

  { src: 'img/full/CutenessOverload.jpeg',
     alt: 'Katze in einem Reisekoffer',
      caption: 'Litchi findet, dass erste was man in den Koffer packen sollte, ist sie selbst' },

  { src: 'img/full/Cutie.jpeg',
     alt: 'süsse Katze auf dem Tisch im Gegenlicht',
     caption: 'Litchi beobachtet das Geschehen' },

  { src: 'img/full/FlagAndScrap.jpeg',
     alt: 'zwei Katzen in Flur',
      caption: 'Litchi und Kiwi auf ihrem Lieblingsplatz im Flur' },

  { src: 'img/full/GuardiansOfTheFlag.jpeg',
     alt: 'zwei Katzen entspannen auf der Scchweizer Fahne',
      caption: 'Kiwi und Litchi finden, es gibt nicht gemütlicheres, als die Schweizer Fahne und bewachen sie mit Adleraugen' },

  { src: 'img/full/HappyAmMac.jpeg',
     alt: 'Katze blinzelt vor dem Fenster',
      caption: 'Litchi blinzelt von ihrem Fensterplatz und bewacht den Mac' },

  { src: 'img/full/HmThatSmell.jpeg',
     alt: 'Katze liegt zur Hälfte auf 2 Paar Schuhen',
      caption: 'Kiwi kennt keinen herrlicheren Geruch als den von alten Schuhen' },

  { src: 'img/full/Hmmmmmmnomnom.jpeg',
     alt: 'Katze beschnuppert eine Schale Pistazien',
      caption: 'Kiwi beschnuppert die Unwiderstehlichkeit von Pistazien' },

  { src: 'img/full/Jellybeans.jpeg',
     alt: 'die Pfote einer Katze',
      caption: 'Kiwi beweist, dass seine Poten frisch geputzt sind' },

  { src: 'img/full/KiwiAnDerTür.jpeg',
     alt: 'Katze an einer Balkontüre',
      caption: 'Kiwi will wissen, was da draussen am Balkon los ist' },

  { src: 'img/full/KiwiAndLitchiOnTheFloor.jpeg',
     alt: 'two cats smiling in the camera',
      caption: 'Hey, das ist eine Katzensache!' },

  { src: 'img/full/KiwiAufDemBett.jpeg',
     alt: 'Katze in Sphinx-Stellung auf dem Bett',
      caption: 'Kiwi überlegt, ob er sein Refugium auf dem Bett teilen soll' },

  { src: 'img/full/KiwiOnTheHunt.jpeg',
     alt: 'Katze lauert an der Ecke eines Tisches',
      caption: 'Kiwi, der Herrscher des Tisches belauert seine Beute da unten' },

  { src: 'img/full/KiwiVerspielt.jpeg',
     alt: 'Katze auf dem Rücken liegend',
      caption: 'Kiwi entspannt vor der Wohnungstür' },

  { src: 'img/full/KiwiWartetamFenster.jpeg',
     alt: 'Katze hinter dem Fenster versteckt',
      caption: 'Kiwi schaut, wer da kommt' },

  { src: 'img/full/LeaveItUpToMe.jpeg',
     alt: 'Katze, die hinter dem Kissen etwas sucht',
      caption: 'Kiwi findet immer, wonach er sucht' },

  { src: 'img/full/LeaveMeAlone.jpeg',
     alt: 'Katze verdeckt sich ihr Augen',
      caption: 'Kiwi findet es einfach zu hell' },

  { src: 'img/full/Lipstick.jpeg',
     alt: 'Katze mit einem roten Gegenstand vor der Nase',
      caption: 'Litchi will mal eine neue Farbe für ihren Lippenstift probieren' },

  { src: 'img/full/LitchiLoaf.jpeg',
     alt: 'Katze vor einem Schrank',
      caption: 'Litchi in Brot-Pose' },

  { src: 'img/full/LitchiSpeist.jpeg',
     alt: 'Katze vor ihrer Futterschüssel',
      caption: 'Litchi: "Missachtung des Gerichts!"' },

  { src: 'img/full/LitchiTheCoder.jpeg',
     alt: 'Katze auf einem Laptop',
      caption: 'Litchi findet den Fehler in der Responsiveness' },

  { src: 'img/full/LithchiTheGuardian.jpeg',
     alt: 'Katze vor einem Gartentor',
      caption: 'Litchi bewacht den Garten' },

  { src: 'img/full/MasterIsMeditating.jpeg',
     alt: 'Katze schläft auf dem Tisch',
      caption: 'Kiwi hält sein Mittagsschläfchen' },

  { src: 'img/full/MumIsPlayingWithMe.jpeg',
     alt: 'Katze an Pistazienschalen',
      caption: 'Kiwi wird mit Pistazienschalen verziert' },

  { src: 'img/full/PeacefulRest.jpeg',
     alt: 'Katzen liegen auf einem gefliessten Boden',
      caption: '"Es ist warm, und der Boden kühl!"' },

  { src: 'img/full/Predators.jpeg',
     alt: 'Katzen auf dem Küchentisch',
      caption: '"Das ist unser Snack!"' },

  { src: 'img/full/ReadyForPeticure.jpeg',
     alt: 'Katzenpfoten',
      caption: '"Zeigt her Eure Füsse..."' },

  { src: 'img/full/Sunflower.jpeg',
     alt: 'Katzen mit einer Sonnenblume',
      caption: '"Hm, diese Blume riecht aber gut!"' },

  { src: 'img/full/SuoergirlWithPlant.jpeg',
     alt: 'Katze am Fenster',
      caption: 'Litchi, the Supergirl rises' },

  { src: 'img/full/TheMasterAwakes.jpeg',
     alt: 'Katze beim Nickerchen',
      caption: '"Nun, da meine Untertanen anwesend sind, kann ich aufstehen!"' },

  { src: 'img/full/ThereIsSomething.jpeg',
     alt: 'Katzen auf einem Küchentisch',
      caption: 'Snacks, Snacks, Snacks' }
];

const THUMBNAIL = document.getElementById('thumbnail_container');
let currentObject = 0;

function thumbPath(fullScreen) {
    // img/full/x.jpeg -> img/thumbs/x.jpeg //
    return fullScreen.replace('img/full/', 'img/thumbs/')
}

function renderGallery() {
    let html ='';
    for (let i = 0; i < IMAGES.length; i++) {
        let img = IMAGES[i];
        html += `
        <article>
          <figure>
            <img src="${thumbPath(img.src)}" alt="${img.alt}"
              onclick="openByIndex(${i})">
            <figcaption>${img.caption}</figcaption>
          </figure>
        </article> 
        `;
    }
    THUMBNAIL.innerHTML = html; // alles auf einmal ins DOM //
}

// aside JS
// function openByIndex(i) { //openLightbox 2.0 //
//     currentObject = i;
//     const {src, alt, caption} = IMAGES[i];
//     const IMG = document.getElementById('lightbox_img');
//     const CAP = document.getElementById('lightbox_caption');
//     const VISIBILITY = document.getElementById('lightbox');


//     IMG.src = src;
//     IMG.alt = alt;
//     CAP.textContent = caption;

//     VISIBILITY.hidden = false;
// }

// function closeLightbox() {
//     const VISIBILITY = document.getElementById('lightbox');
//     VISIBILITY.hidden = true;
// }

// function prevButton() {
//     if (currentObject === 0) {
//         currentObject = IMAGES.length - 1;
//     }
//     else {
//         currentObject--;
//     }
//     openByIndex(currentObject);
// }

// function nextButton() {
//     if (currentObject === (IMAGES.length - 1)) {
//         currentObject = 0;
//     } 
//     else {
//         currentObject++;
//     }
//     openByIndex(currentObject);
// }

//  dialog JS 


function ensureDialogOpen(dlg) {
  if (!dlg.open) dlg.showModal();      // wir nutzen Modal mit Backdrop
}

function openByIndex(i) {
  currentObject = Number(i);
  const { src, alt, caption } = IMAGES[currentObject];

  const IMG = document.getElementById('lightbox_img');
  const CAP = document.getElementById('lightbox_caption');
  const DLG = document.getElementById('lightbox');

  IMG.src = src;
  IMG.alt = alt;
  CAP.textContent = caption;

  ensureDialogOpen(DLG);
}

function openLightbox(src, caption, alt) {
  const IMG = document.getElementById('lightbox_img');
  const CAP = document.getElementById('lightbox_caption');
  const DLG = document.getElementById('lightbox');

  IMG.src = src;
  IMG.alt = alt;
  CAP.textContent = caption;

  ensureDialogOpen(DLG);
}

function closeLightbox() {
  const DLG = document.getElementById('lightbox');
  if (DLG.open) DLG.close();
}

// Navigation (wie gehabt)
function changeImage(step) {
  currentObject = (currentObject + step + IMAGES.length) % IMAGES.length;
  openByIndex(currentObject);
}
function nextButton() { changeImage(1); }
function prevButton() { changeImage(-1); }

// end of dialog


renderGallery();
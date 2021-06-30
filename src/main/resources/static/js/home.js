const pianoKeysTranslator = {
  Digit1: "c2",
  Digit2: "d2",
  Digit3: "e2",
  Digit4: "f2",
  Digit5: "g2",
  Digit6: "a2",
  Digit7: "b2",
  Digit8: "c3",
  Digit9: "d3",
  Digit0: "e3",
  KeyQ: "f3",
  KeyW: "g3",
  KeyE: "a3",
  KeyR: "b3",
  KeyT: "c4",
  KeyY: "d4",
  KeyU: "e4",
  KeyI: "f4",
  KeyO: "g4",
  KeyP: "a4",
  KeyA: "b4",
  KeyS: "c5",
  KeyD: "d5",
  KeyF: "e5",
  KeyG: "f5",
  KeyH: "g5",
  KeyJ: "a5",
  KeyK: "b5",
  KeyL: "c6",
  KeyZ: "d6",
  KeyX: "e6",
  KeyC: "f6",
  KeyV: "g6",
  KeyB: "a6",
  KeyN: "b6",
  KeyM: "c7",
};

const acceptedPianoKeys = [
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",
  "KeyY",
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyP",
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM",
];

const ghostPlayKeyTranslator = {
  1: { keyCode: "Digit1", isShifted: false },
  2: { keyCode: "Digit2", isShifted: false },
  3: { keyCode: "Digit3", isShifted: false },
  4: { keyCode: "Digit4", isShifted: false },
  5: { keyCode: "Digit5", isShifted: false },
  6: { keyCode: "Digit6", isShifted: false },
  7: { keyCode: "Digit7", isShifted: false },
  8: { keyCode: "Digit8", isShifted: false },
  9: { keyCode: "Digit9", isShifted: false },
  0: { keyCode: "Digit0", isShifted: false },
  q: { keyCode: "KeyQ", isShifted: false },
  w: { keyCode: "KeyW", isShifted: false },
  e: { keyCode: "KeyE", isShifted: false },
  r: { keyCode: "KeyR", isShifted: false },
  t: { keyCode: "KeyT", isShifted: false },
  y: { keyCode: "KeyY", isShifted: false },
  u: { keyCode: "KeyU", isShifted: false },
  i: { keyCode: "KeyI", isShifted: false },
  o: { keyCode: "KeyO", isShifted: false },
  p: { keyCode: "KeyP", isShifted: false },
  a: { keyCode: "KeyA", isShifted: false },
  s: { keyCode: "KeyS", isShifted: false },
  d: { keyCode: "KeyD", isShifted: false },
  f: { keyCode: "KeyF", isShifted: false },
  g: { keyCode: "KeyG", isShifted: false },
  h: { keyCode: "KeyH", isShifted: false },
  j: { keyCode: "KeyJ", isShifted: false },
  k: { keyCode: "KeyK", isShifted: false },
  l: { keyCode: "KeyL", isShifted: false },
  z: { keyCode: "KeyZ", isShifted: false },
  x: { keyCode: "KeyX", isShifted: false },
  c: { keyCode: "KeyC", isShifted: false },
  v: { keyCode: "KeyV", isShifted: false },
  b: { keyCode: "KeyB", isShifted: false },
  n: { keyCode: "KeyN", isShifted: false },
  m: { keyCode: "KeyM", isShifted: false },
  "!": { keyCode: "Digit1", isShifted: true },
  "@": { keyCode: "Digit2", isShifted: true },
  $: { keyCode: "Digit4", isShifted: true },
  "%": { keyCode: "Digit5", isShifted: true },
  "^": { keyCode: "Digit6", isShifted: true },
  "*": { keyCode: "Digit8", isShifted: true },
  "(": { keyCode: "Digit9", isShifted: true },
  Q: { keyCode: "KeyQ", isShifted: true },
  W: { keyCode: "KeyW", isShifted: true },
  E: { keyCode: "KeyE", isShifted: true },
  T: { keyCode: "KeyT", isShifted: true },
  Y: { keyCode: "KeyY", isShifted: true },
  I: { keyCode: "KeyI", isShifted: true },
  O: { keyCode: "KeyO", isShifted: true },
  P: { keyCode: "KeyP", isShifted: true },
  S: { keyCode: "KeyS", isShifted: true },
  D: { keyCode: "KeyD", isShifted: true },
  G: { keyCode: "KeyG", isShifted: true },
  H: { keyCode: "KeyH", isShifted: true },
  J: { keyCode: "KeyJ", isShifted: true },
  K: { keyCode: "KeyL", isShifted: true },
  Z: { keyCode: "KeyZ", isShifted: true },
  C: { keyCode: "KeyC", isShifted: true },
  V: { keyCode: "KeyV", isShifted: true },
  B: { keyCode: "KeyB", isShifted: true },
};

const acceptedGhostKeys = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "!",
  "@",
  "$",
  "%",
  "^",
  "*",
  "(",
  "Q",
  "W",
  "E",
  "T",
  "Y",
  "I",
  "O",
  "P",
  "S",
  "D",
  "G",
  "H",
  "J",
  "K",
  "Z",
  "C",
  "V",
  "B",
];

const timeouts = [];

const ghostPlayTimeContainer = document.getElementById("ghost-play-time");
const pianoNotes = document.querySelectorAll(".note");
const ghostPlayButton = document.getElementById("ghost-play-button");
const ghostPlayInput = document.getElementById("ghost-play-input");
const makeSheetButton = document.getElementById("make-sheet-button");

function safePlay(sound) {
  let playPromise = sound.play();

  if (playPromise !== undefined) {
    playPromise
      .then((_) => {
        // Automatic playback started!
        return;
      })
      .catch((error) => {
        // Auto-play was prevented
        return;
      });
  }
}

let pianoSoundPack = "piano"

function preloadNotes() {
  for (const note of pianoNotes) {
    const sound = new Audio(`/js/piano/${note.id}.ogg`);
    sound.volume = 0;
    safePlay(sound);
  }
}

preloadNotes()

for (const note of pianoNotes) {
  note.addEventListener("click", () => {
    const sound = new Audio(`/js/piano/${note.id}.ogg`);
    sound.volume = 0.2;
    safePlay(sound);
    setTimeout(() => {
      sound.pause();
    }, 2000);
  });
}

makeSheetButton.addEventListener("click", () => {
    window.location.href='/user/ghostplay/create?text=' + encodeURIComponent(ghostPlayInput.value)
})

window.addEventListener("keydown", (Event) => {
  if (!Event.repeat && acceptedPianoKeys.includes(Event.code)) {
    if (Event.code && Event.shiftKey) {
      const sound = new Audio(
        `/js/piano/${pianoKeysTranslator[Event.code]}s.ogg`
      );
      sound.volume = 0.2;
      const key = document.getElementById(
        `${pianoKeysTranslator[Event.code]}s`
      );
      key?.classList.add("note-black-pressed");
      return safePlay(sound);
    }

    const sound = new Audio(
      `/js/piano/${pianoKeysTranslator[Event.code]}.ogg`
    );
    const key = document.getElementById(`${pianoKeysTranslator[Event.code]}`);
    key?.classList.add("note-white-pressed");
    sound.volume = 0.2;
    safePlay(sound);
    setTimeout(() => {
      sound.pause();
    }, 2000);
  }
});

window.addEventListener("keyup", (Event) => {
  if (acceptedPianoKeys.includes(Event.code)) {
    const naturalKey = document.getElementById(
      `${pianoKeysTranslator[Event.code]}`
    );
    naturalKey?.classList.remove("note-white-pressed");
    const sharpKey = document.getElementById(
      `${pianoKeysTranslator[Event.code]}s`
    );
    sharpKey ? sharpKey?.classList.remove("note-black-pressed") : "";
  }
});

// Ghost Play
ghostPlayButton.addEventListener("click", () => {
  function play(keyCode, isShifted) {
    if (isShifted) {
      const sound = new Audio(
        `/js/piano/${pianoKeysTranslator[keyCode]}s.ogg`
      );
      sound.volume = 0.2;
      const key = document.getElementById(`${pianoKeysTranslator[keyCode]}s`);
      key?.classList.add("note-black-pressed");
      setTimeout(() => {
        sound.pause();
        key?.classList.remove("note-black-pressed");
      }, 2000);
      return safePlay(sound);
    }

    const sound = new Audio(
      `/js/piano/${pianoKeysTranslator[keyCode]}.ogg`
      );
      const key = document.getElementById(`${pianoKeysTranslator[keyCode]}`);
    key?.classList.add("note-white-pressed");
    sound.volume = 0.2;
    safePlay(sound);
    setTimeout(() => {
      sound.pause();
      key?.classList.remove("note-white-pressed");
    }, 2000);
  }

  function updateTime(time) {
    const minutes = Math.floor(time / 60000)
    const seconds = Math.floor((time / 1000) % 60)
    const timeString = `${minutes <= 9 ? "0" : ""}${minutes}:${seconds <= 9 ? "0" : ""}${seconds}`
    ghostPlayTimeContainer.innerText = timeString
  }

  if (ghostPlayButton.innerText === "Play") {
    ghostPlayButton.innerText = "Stop"
    let timings = [1000];
    let isGrouping = false;
    let group = "";
    let notes = [""];
    let totalTime = 0;
    let currentTime = 0

    preloadNotes()

    for (const char of ghostPlayInput.value) {
      // Syntax Characters
      switch (char) {
        case " ":
          timings.push(50)
          notes.push("")
          break
        case ",":
          timings.push(100);
          notes.push("");
          break;
        case ".":
          timings.push(250);
          notes.push("");
          break;
        case "/":
          timings.push(500);
          notes.push("");
          break;
        case "|":
          timings.push(1000);
          notes.push("");
          break;
        case "[":
          isGrouping = true;
          break;
        case "]":
          isGrouping = false;
          notes.push(group);
          timings.push(100);
          group = "";
          break;
      }

      // Note Characters
      if (acceptedGhostKeys.includes(char)) {
        if (isGrouping) {
          group += char;
        } else {
          notes.push(char);
          timings.push(100);
        }
      }
    }

    if (timings.length > 0) {
      totalTime = timings.reduce((acc, curr) => acc + curr);
      currentTime = totalTime;
      const autoStop = setTimeout(() => {
        ghostPlayButton.innerText = "Play";
        ghostPlayTimeContainer.innerText = "--:--";
      }, totalTime + 100);
      timeouts.push(autoStop);
      updateTime(currentTime);

      let time = 0;

      for (let i = 0; i < timings.length; i++) {
        time += timings[i];
        const timeout = setTimeout(
          () => {
            for (const char of notes[i]) {
              const noteData = ghostPlayKeyTranslator[char];
              play(noteData?.keyCode, noteData?.isShifted);
            }
            currentTime -= timings[i];
            updateTime(currentTime);
          },
          time
        );
        timeouts.push(timeout);
      }
    }
  } else {
    for (const timeout of timeouts) {
      clearTimeout(timeout);
    };
    ghostPlayButton.innerText = "Play";
    ghostPlayTimeContainer.innerText = "--:--";
  }
})
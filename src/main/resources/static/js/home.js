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

const songs = {
  None: "",
  Sweden: `[6et]|7|[8yo]|0|[9r]|8|[I5y]||
[6etu]|7|[8yoa]|0|[I9ry]|8|[I5yp]||
[6etu]|7|[8yoa]|0|[I9ry]|8|[I5yp]||
[6etu]|[7d]/f/[8yoa]|0/o.p.[I9ry]|8/a.d.[I5yp]||
[6etu]/h/[7f]/d/[8yoa]|0/o.p.[I9ry]|8/d.a.[I5yp]||
[6etu]|[7d]/f/[8yoah]|0/[ok].[pj].[I9ry]|8/[ah].G.[I5ypd]||
[6etu]|[7d]/f/[8yoa]|0/o.p.[I9ry]|8/a.d.[I5yp]||
[6etu]|[7d]/f/[8yoa]|0/o.p.[I9ry]|8/a.d.[I5yp]||
[6etu]|[7d]/f/[8yoa]|0/o.p.[I9ry]|[8k]/a.d.[I5yp]||
[0uoa]||f/d/[T6eup]|p/o/[I9ey]||o.p.[8wtu]||
[0uoa]||f/d/[T6eup]|p/[oj]/[I9ey]|h/[ok].p.[wtu]`,

  "Wet-Hands": `6,,,0,,,e,,,r,,,T,,,r,,,e,,,0,,,9,,,Q,,,T,,,u,,,T,,,e|
6,,,0,,,e,,,r,,,T,,,r,,,e,,,0,,,9,,,Q,,,T,,,u,,,T,,,e|
[6O],,,0,,,e,,,r,,,T,,,r,,,[pe],,,0,,,[I9],,,Q,,,T,,,u,,,T,,,e,,,
u,,,I,,,[6O],,,0,,,e,,,r,,,T,,,r,,,[ea],,,[S0],,,9,,,[QI],,,T,,,u,,,T,,,e,,,
S,,,f,,,[h5],,,7,,,9,,,[GQ],,,[ed],,,Q,,,[9p],,,[7a],,,5,,,7,,,9,,,Q,,,e|/
[h5],,,7,,,[G9],,,Q,,,[ed],,,Q,,,[9p],,,[7a],,,5,,,7,,,9,,,Q,,,e/,,,
p/,,,[6u],,,0,,,e,,,r,,,T,,,r,,,e,,,0,,,6,,,0,,,e,,,r,,,T,,,
u,,,p,,,S|/,,,[7yd],,,9,,,Q,,,S,,,p/,,[uf],,,[IG],,,7,,,[9yd],,,Q,,,e,,,T/
p,,,S,,,[5d],,,7,,,S,,,d,,,e,,,G|[Sue06]||/r,,,e,,,
[3r],,,%,,,7,,,0,,,W,,,0,,,7,,,%,,,
3,,,%,,,7,,,0,,,W,,,0,,,6,,,5,,,7,,,9,,,Q,,,e,,,Q,,,9,,,7,,,6,,,*,,,0,,,e,,,T,,,r,,,e,,,0,,,
3,,,%,,,7,,,0,,,W,,,0,,,7,,,%,,,3,,,%,,,7,,,0,,,W,`,

  "Married-Life": `q.[et].[et].
8.[et].[et].
9.[et].[et].
8.9,g,[0j],g,
[qf].[et].[et].
8.[et],g,[etj],f,
[9d].[et],d,[etg],d,
[8s].[et].[et],d,
[7j].[9qwh].[9qw],d,
[7j].[9qwh].[9qwg].
[7d].[9qw].[9qw].
7.[9qw],g,[9qwh],g,
[0f].[wt].[wt].
9.[wt],f,[wth],f,
[8s].[0w],s,[0wf],s,
[^P].[0w],P,[0ws],P,
q.[etp].[etP].
[qs].[et],d,[etf].
8.[0ws].[0wd].
[80wf].g,j,g,
[qf].[et].[et].
8.[et],g,[etj],f,
[9d].[et],d,[etg],d,
[8s].[et].[et],d,
[7j].[9qwh].[9qw],d,
[7j].[9qwh].f.[9qwg].
[7d].[9qw].[9qw].
7.[9qw],g,[9qwh],g,
[0f].[wt].[wt].
9.[wt],f,[wth],f,
[8s].[0w],s,[0wf],s,
[^P].[0w],P,[0ws],P,
q.[etp].[etP].
[qs].[et],d,[etf].
8.[0ws].[0wd].
[80wf].g,j,g,
[qf].[et].[et].
8.[et],g,[etj],f,
[9d].[et],g,[etj],z,
[8x].[et].[et],z,
[7c].[9qwx].[9qw],z,
[7j].[9qwk].[9qwz],zx
[7c].[9qw].[9qw],c,x,
[7z].[9qw],c,[9qwv],c
[0wtx]|
[9wt].x.v.x.
[80wl].l.x.l.
[0w^J],l,z,x,v,b.
[8B]mBm[0wB]BmB[0wB]mBm
[5B].[0w].[0w].
[8B].[0wb].[0w],h,
[5z].[0wj].[0wh].
[4j].[qe].[qe].
[8g].[qe].[qe].
[4j].[qeh].[qe],g,
[2j].[qrG].[qrd].
[7a].[qrL].z,Z,x,
c,C,v,V,b,B,
[9B],b,[qrV],v,C,c,
x,Z,z,L,l,a/
[0wtf].h.d.
f.P.a.
[etus]..
l,z,x,c.v.b.c.
[qx].[et].,.
8.[et],c,b,x,
[9z].[et],z,c,b,
[8m].[et].c,,,
[7b].[wrv]..z,
[5b].[wrv].x,c.
[7z].[wr].
9.[wr],c,v,c,
[0x].[wt].
9.[wt],x,v,x,
[8l].[0w],l,x,l,
[^P].,.
[qet].p,j,P,J,s,
l,d,z,f,x.
[80w].s,l,d,z,f.
x.g.j.g.
[qf].[et].[et].
8.[et].[et].
9.[et].[et].,.
8.[et].g.j.g.
f.,.i.u.
i.,.
g.
j.g.
[qetf]|/
[0et].,g.,j,.f,.
[qetd],.d,.g,.d,.
[(ets],.a,.,,.,,.
[9wrj],.h,.d,.,,.
[9wj].,h.,g.,.,
[9wrd]|/
[9w].,g.,h.,g.,
[0wtf]|/
[9wt].,f.,h.,f.,
[80ws].,s.,f.,s.,
[0w^P]|/
[qet].,p.,P.,
s/,d.f.,
[0wt].,s.,d.,
f|/
[pg]|/
[pf]|/
[pg]|/
[pf].,c.,b.,c.,
[pgx]|/
[pf].,c.,b.,x.,
[pgz].,z.,c.,z.,
[Ypsl].,z.,,.,,.
[ryob].,v.,z.,,.
[eyob].,v.,c.,,.
[wryz]|/
[qry].,c.,v.,c.,
[sfx]|/
s.,x.,v.,x.,
[Posl].,l.,x.,l.,
[oPJ]|/
[tip].,j.,J.,
l/,z.x.,
[wtu].,l.,z.,
x.,c.,b.,c.,
[qetm]|/
[qetu]|/
[qet]|/
[qetu]|/
[8qeti]|/`,
  Damned: `[k30].f,,a,,k,,f,,a,,k,,f,,k,,f,,a,,k,,f,,a,,k,,f,,
[l81].f,,s,,l,,f,,s,,l,,f,,z,,f,,s,,l,,f,,s,,l,,f,,
[k30].f,,a,,k,,f,,a,,k,,f,,k,,f,,a,,k,,f,,a,,k,,f,,
[l81].f,,s,,l,,f,,s,,l,,f,,z,,f,,s,,l,,f,,s,,l,,f,,
[xk].f,,a,,k,,f,,a,,k,,f,,[nk].f,,a,,k,,f,,a,,k,,f,,
[ml].f,,s,,l,,f,,s,,l,,f,,z,,f,,s,,l,,f,,s,,l,,f,,
[xk].f,,a,,k,,f,,a,,k,,f,,[nk].f,,a,,k,,f,,a,,k,,f,,
[lb].f,,s,,l,,f,,s,,l,,f,,z,,f,,s,,l,,f,,s,,l,,f,,
[xk].f,,a,,k,,f,,a,,k,,f,,[nk].f,,a,,k,,f,,a,,k,,f,,
[ml].f,,s,,l,,f,,s,,l,,f,,z,,f,,s,,l,,f,,s,,l,,f,,
[xk].f,,a,,k,,f,,a,,k,,f,,[nk].f,,a,,k,,f,,a,,k,,f,,
[lb].f,,s,,l,,f,,s,,l,,f,,z,,f,,s,,l,,f,,s,,l,,
h,,j,,J,,h,,d,,J,,h,,d,,J,,h,,J,,h,,d,,J,,h,,d,,J,,h,,k,,h,,f,,k,,h,,f,,k,,h,,
[xk].h,,f,,[zk].h,,f,,[nk].h,,
[JB].h,,d,,J,,h,,d,,J,,h,,J,,h,,d,,J,,h,,d,,J,,h,,k,,h,,f,,k,,h,,f,,k,,h,,
[xk].h,,f,,[zk].h,,f,,k,,h,,J,,h,,d,,J,,h,,d,,J,,h,,
J,,G,,d,,J,,G,,d,,J,,G,,J,,G,,S,,J,,G,,S,,J,,G,,d,,
J,,G,,d,,J,,G,,S,,L,,J,,G,,z,,J,,G,,L,,J,,G,,z,,J,,
G,,L,,J,,G,,L,,J,,G,,L,,J,,G,,L,,J,,G,,L,,J,,G,,L,,`,
  Unforgiven: `e||
[u92]. y,e,u,y,e,u,y,e,u,y,e,i,y,e.
[u92]. y,e,u,y,e,u,y,e,u,y,e,i,y,e.
[u92]. y,e,u,y,e,u,y,e,u,y,e,i,y,e.
[u92]. y,e,u,y,e,u,y,e,u,y,e,i,y,e.
[ye92]|y.u.[ie].u,y,[ie].u,y,e,
[ue92]|y,e,y,u,[ie].u,y,i,u,y,e,
[ye92]|y,u,[ie].u,y,[ie].u,y,e,
[ue92]|y,e,y, u,[ie].u,y,i,u,y,e,
[y92]|e,y, u, [qi4]| e,t,i, i,
[i81]|u,t, w.[t60].,t,y, u,
[ye92]|y,u,y/[tqi4]|p|
[tp81].ou|u [eT6]|y,u,
[y92]|y,e,u,y,e,u,y,e,u,y,e,i,y,e.
[u92].y,e,u,y,e,u,y,e,u,y,e,,i.
[oe92].i,[ue92].i,[ut6]|[e6].[so],
[wso5].[oa].[woa5].[yi].[yi92]`,
};

const ghostPlayTimeContainer = document.getElementById("ghost-play-time");
const pianoNotes = document.querySelectorAll(".note");
const ghostPlayButton = document.getElementById("ghost-play-button");
const ghostPlayInput = document.getElementById("ghost-play-input");

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
    console.log(note.id)
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
      currentTime = totalTime
      const autoStop = setTimeout(() => {
        ghostPlayButton.innerText = "Play";
        ghostPlayTimeContainer.innerText = "--:--"
      }, totalTime + 100)
      timeouts.push(autoStop)
      updateTime(currentTime)

      for (let i = 0; i < timings.length; i++) {
        const timeout = setTimeout(
          () => {
            for (const char of notes[i]) {
              const noteData = ghostPlayKeyTranslator[char];
              play(noteData?.keyCode, noteData?.isShifted);
            }
            currentTime -= timings[i]
            updateTime(currentTime)
          },
          timings.slice(0, i + 1).reduce((acc, curr) => acc + curr)
        );
        timeouts.push(timeout);
      }
    }
  } else {
    for (const timeout of timeouts) {
      clearTimeout(timeout);
    };
    ghostPlayButton.innerText = "Play";
    ghostPlayTimeContainer.innerText = "--:--"
  }
})

document.getElementById("song-list").addEventListener("input", (Event) => {
  ghostPlayInput.value = songs[Event.target.value] ?? "Cannot fetch song"
})
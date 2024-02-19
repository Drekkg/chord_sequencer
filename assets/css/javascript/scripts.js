/* After DOM has loaded run a for loop on all the buttons
 and assign event listeners */

document.addEventListener("DOMContentLoaded", function () {
  mainKey();
  pop();
  // let modeType = "ionian";
  // modeTypefilter(modeType);

  let buttons = document.getElementsByClassName("mode-button");
  for (let button of buttons) {
    button.addEventListener("click", function () {
      modeType = this.getAttribute("data-type");
      modeTypefilter(modeType);
    });
  }
});

/*Selects the key from an array and displays the key  on the page.
The up and down arrows scrolls through the different keys  **/
function mainKey() {
  let keys = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  let up = document.getElementById("up-arrow");
  let down = document.getElementById("down-arrow");
  let keyIndex = 0;
  mainKeyDisplay(keys[keyIndex]);
  up.addEventListener("click", () => {
    keyIndex > 10 ? (keyIndex = 0) : keyIndex++;
    mainKeyDisplay(keys[keyIndex]);
  });

  down.addEventListener("click", () => {
    keyIndex < 1 ? (keyIndex = 11) : keyIndex--;
    mainKeyDisplay(keys[keyIndex]);
  });
}

/*Gets the main key from the box  **/
function mainKeyDisplay(mainKeyValue) {
  document.getElementById("select-key").textContent = mainKeyValue;
  modeTypefilter();
}
/*Selects the appropriate scale according to the main Key selected **/
function selectKey(modeType, modeName) {
  const notes = {
    c: ['c-4', 'c#4', 'd-4', 'd#4', 'e-4', 'f-4', 'f#4', 'g-4', 'g#4', 'a-4', 'a#4', 'b-4', 'c-5'],
  cshp: ['c#4', 'd-4', 'd#4', 'e-4', 'f-4', 'f#4', 'g-4', 'g#4', 'a-4', 'a#4', 'b-4', 'c-5', 'c#5'],
  d: ['d-4', 'd#4', 'e-4', 'f-4', 'f#4', 'g-4', 'g#4', 'a-4', 'a#4', 'b-4', 'c-5', 'c#5', 'd-5'],
  dshp: ['d#4', 'e-4', 'f-4', 'f#4', 'g-4', 'g#4', 'a-4', 'a#4', 'b-4', 'c-5', 'c#5', 'd-5', 'd#5'],
  e: ['e-4', 'f-4', 'f#4', 'g-4', 'g#4', 'a-4', 'a#4', 'b-4', 'c-5', 'c#5', 'd-5', 'd#5', 'e-5'],
  f: ['f-4', 'f#4', 'g-4', 'g#4', 'a-4', 'a#4', 'b-4', 'c-5', 'c#5', 'd-5', 'd#5', 'e-5', 'f-5'],
  fshp: ['f#4', 'g-4', 'g#4', 'a-4', 'a#4', 'b-4', 'c-5', 'c#5', 'd-5', 'd#5', 'e-5', 'f-5', 'f#5'],
  g: ['g-4', 'g#4', 'a-4', 'a#4', 'b-4', 'c-5', 'c#5', 'd-5', 'd#5', 'e-5', 'f-5', 'f#5', 'g-5'],
  gshp: ['g#4', 'a-4', 'a#4', 'b-4', 'c-5', 'c#5', 'd-5', 'd#5', 'e-5', 'f-5', 'f#5', 'g-5', 'g#5'],
  a: ['a-4', 'a#4', 'b-4', 'c-5', 'c#5', 'd-5', 'd#5', 'e-5', 'f-5', 'f#5', 'g-5', 'g#5', 'a-5'],
  ashp: ['a#4', 'b-4', 'c-5', 'c#5', 'd-5', 'd#5', 'e-5', 'f-5', 'f#5', 'g-5', 'g#5', 'a-5', 'a#5'],
  b: ['b-4', 'c-5', 'c#5', 'd-5', 'd#5', 'e-5', 'f-5', 'f#5', 'g-5', 'g#5', 'a-5', 'a#5', 'b-5']
  };
  let mainKey = document.getElementById("select-key").textContent.toLowerCase();
  mainKey[1] === "#" ? (mainKey = mainKey[0] + "shp") : mainKey;
  let selectedKey = notes[mainKey];
  filterScale(selectedKey, modeType, modeName);
}

function modeTypefilter(modeType) {
  let modes = {
    ionian: [0, 2, 4, 5, 7, 9, 11],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    phrygian: [0, 1, 3, 5, 7, 8, 10],
    lydian: [0, 2, 4, 6, 7, 9, 11],
    mixolydian: [0, 2, 4, 5, 7, 9, 10],
    aeolian: [0, 2, 3, 5, 7, 8, 10],
    locrian: [0, 1, 3, 5, 6, 8, 10]
  };
  let modeName;
  modeType != null ? (modeName = modeType) : (modeName = "ionian");
  modeType != null ? (modeType = modes[modeType]) : (modeType = modes["ionian"]);
  selectKey(modeType, modeName);
}

function filterScale(scale, mode, modeName) {
  let modeChords = mode.map((index) => scale[index]);

  let modeNameObj = {
    ionian: ["maj", "min", "min", "maj", "dom", "min", "dim"],
    dorian: ["min", "min", "maj", "maj", "min", "dim", "maj"],
    phrygian: ["min", "maj", "dom", "min", "dim", "maj", "min"],
    lydian: ["maj", "dom", "min", "dim", "maj", "min", "min"],
    mixolydian: ["dom", "min", "dim", "maj", "min", "min", "maj"],
    aeolian: ["min", "dim", "maj", "min", "min", "maj", "dom"],
    locrian: ["dim", "maj", "min", "min", "maj", "dom", "min"]
  };
  let modeNameToFilter = modeNameObj[modeName];

  let filteredModeChords = [];
  for (let i = 0; i < modeChords.length; i++) {
    filteredModeChords.push(modeChords[i] + modeNameToFilter[i]);
  }

  displayModeChords(filteredModeChords);
}

function displayModeChords(filteredModeChords) {
  for (let i = 0; i < filteredModeChords.length; i++) {
    document.getElementById(`deg${i + 1}`).innerHTML = filteredModeChords[i];
  }
  console.log("filteredModeChords" + filteredModeChords)
  chordTone();
}

/*Tone JS Tone generator **/
function getShape(val){
let chordShape = val;
console.log(chordShape);
return chordShape;
}
function pop(){
const synth = new Tone.PolySynth();
const reverb = new Tone.Reverb();
synth.connect(reverb);
reverb.toDestination();



let chordButtons = document.querySelectorAll(".chord-button");
chordButtons.forEach((button) => {
  button.addEventListener("click", triggerNote(shape));
 
})


// const synth = new Tone.Synth().toDestination();

function triggerNote(note) {
   return () => {
    if (Tone.context.state != "running") {
      Tone.start();
    }
    
    synth.triggerAttackRelease(note, "4n")
    
    
  }
  
}

}
function chordTone() {
const notes = {
  c: ['c4', 'c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5'],
  cshp: ['c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5'],
  d: ['d4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5'],
  dshp: ['d#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5'],
  e: ['e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5'],
  f: ['f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5'],
  fshp: ['f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5'],
  g: ['g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5'],
  gshp: ['g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5'],
  a: ['a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5', 'a5'],
  ashp: ['a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5', 'a5', 'a#5'],
  b: ['b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5', 'a5', 'a#5', 'b5']
};

const shapes = {
  maj: [0, 4, 7],
  min: [0, 3, 7],
  dom: [0, 4, 7],
  dim: [0, 3, 6]
};

let chordButtons = document.querySelectorAll(".chord-button");

chordButtons.forEach((button) => {
  let chordName = button.innerHTML[0].toLowerCase();
  let shapeName = button.innerHTML.toLowerCase().slice(3, 6);
  let chord = notes[chordName];
  let shape = shapes[shapeName].map(index => chord[index]);
  getShape(shape)
})



}

// 
// let chord = document.getElementById("deg1");
// chord.addEventListener("click", triggerNote(["c5", "c6", "e4"]));







// c: ['c4', 'c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5'],
// cshp: ['c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5'],
// d: ['d4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5'],
// dshp: ['d#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5'],
// e: ['e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5'],
// f: ['f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5'],
// fshp: ['f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5'],
// g: ['g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5'],
// gshp: ['g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5'],
// a: ['a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5', 'a5'],
// ashp: ['a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5', 'a5', 'a#5'],
// b: ['b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5', 'a5', 'a#5', 'b5']
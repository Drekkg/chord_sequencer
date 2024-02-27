
/*jshint esversion: 6 */ 
/* After DOM has loaded run a for loop and assign event listeners to all the mode buttons.
Call the mainKey to display the main key on the page.
Call the noteLength to display the note length on the page.
call the synth function to get it loaded and ready to play.
 */

document.addEventListener("DOMContentLoaded", function () {
  mainKey();
  noteLength();
  synth();

  /*The assign eventListener for loop  */
  let buttons = document.getElementsByClassName("mode-button");
  for (let button of buttons) {
    button.addEventListener("click", function () {
      modeType = this.getAttribute("data-type");

      /*set selected mode to localStorage */
      const chordSequencerMode = modeType;
      localStorage.setItem('chord_sequencer_mode', JSON.stringify(chordSequencerMode));
      modeTypefilter(modeType);
    });
  }
  /*Checks local storage to see if the stop showing button was clicked - if true modal stops showing on load */
if(JSON.parse(localStorage.getItem('stopShowing'))) {
  document.getElementById("modal").style.display = "none";
}

/*closes the instructional modal */
let closeModal = document.getElementById("close-modal");
closeModal.addEventListener("click", () => {  
  document.getElementById("modal").style.display = "none";
})

/*opens the instructional modal */
  let openModal = document.getElementById("open-modal");
    openModal.addEventListener("click", () => {
        document.getElementById("modal").style.display = "block";
    });

/*stops the modal from showing on load */
let stopShowing = document.getElementById("stop-showing-modal");
stopShowing.addEventListener("click", () => {
document.getElementById("modal").style.display = "none";
localStorage.setItem("stopShowing", true);
});
  




});

  /*Selects the note length from an array and displays the note length on the page.**/
  function noteLength() {
    const noteLengthArray = ["1/1", "1/2", "1/4", "1/16"];
   let noteLengthSelected = document.getElementById("select-note-length");
   noteLengthSelected.textContent = noteLengthArray[2];

    /* read noteLength from localStorage  chord_sequencer_note */
    if (localStorage.getItem('chord_sequencer_note')) {
      const noteLength = JSON.parse(localStorage.getItem('chord_sequencer_note'));
      noteLengthSelected.textContent = noteLength;
      noteLengthSelected.value=noteLength;
  }
   
   /*adds event listener to the note length button and changes the note length on click */
   noteLengthSelected.addEventListener("click", () => {
    let noteLengthIndex = noteLengthArray.indexOf(noteLengthSelected.textContent);
    noteLengthIndex < 3 ? noteLengthIndex++ : noteLengthIndex = 0;
    noteLengthSelected.textContent = noteLengthArray[noteLengthIndex];
    const chord_sequencer_note = noteLengthArray[noteLengthIndex];
    
/*set selected note to localStorage */
   localStorage.setItem('chord_sequencer_note', JSON.stringify(chord_sequencer_note));
   });
  }

/*Selects the key from an array and displays the key  on the page.
The up and down arrows scrolls through the different keys  **/
function mainKey() {
  let keys = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  let up = document.getElementById("up-arrow");
  let down = document.getElementById("down-arrow");
  let keyIndex = 0;
  /* read mainKey from localStorage  chord_sequencer_key */
  if (localStorage.getItem('chord_sequencer_key')) {
    const key = JSON.parse(localStorage.getItem('chord_sequencer_key'));
    keyIndex = keys.indexOf(key);
  }
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
  const mainKeyChordSequencer = localStorage.setItem('chord_sequencer_key', JSON.stringify(mainKeyValue));
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

   /* read nodeType from localStorage  chord_sequencer_node */
   if (localStorage.getItem('chord_sequencer_mode')) {
    modeName = JSON.parse(localStorage.getItem('chord_sequencer_mode'));
    modeType = modes[modeName];
    selectKey(modeType, modeName);
}
selectedButtonColor(modeName);
selectKey(modeType, modeName);
  

}
function selectedButtonColor(modeName) {
  let buttons = document.getElementsByClassName("mode-button");
  
  for (let button of buttons) {
    button.classList.remove("selected");
    if(button.getAttribute("data-type") === modeName){
      button.classList.add("selected");
    }; 
  }
}




function filterScale(scale, mode, modeName) {
  let modeChords = mode.map((index) => scale[index]);

  let modeNameObj = {
    ionian: ["maj", "min", "min", "maj", "maj", "min", "dim"],
    dorian: ["min", "min", "maj", "maj", "min", "dim", "maj"],
    phrygian: ["min", "maj", "maj", "min", "dim", "maj", "min"],
    lydian: ["maj", "maj", "min", "dim", "maj", "min", "min"],
    mixolydian: ["maj", "min", "dim", "maj", "min", "min", "maj"],
    aeolian: ["min", "dim", "maj", "min", "min", "maj", "maj"],
    locrian: ["dim", "maj", "min", "min", "maj", "maj", "min"]
  };
  let modeNameToFilter = modeNameObj[modeName];

  let filteredModeChords = [];
  for (let i = 0; i < modeChords.length; i++) {
    filteredModeChords.push(modeChords[i] + modeNameToFilter[i]);
  }

  displayModeChords(filteredModeChords, modeNameToFilter);
}

function displayModeChords(filteredModeChords, modeNameToFilter) {
  for (let i = 0; i < filteredModeChords.length; i++) {
    document.getElementById(`deg${i + 1}`).innerHTML = filteredModeChords[i].toUpperCase();
    document.getElementById(`deg${i + 1}`).classList = `button ${modeNameToFilter[i]}`;
   
  }
 
  
}

/*Tone JS Tone generator **/

function synth(){
const synth = new Tone.PolySynth();
const reverb = new Tone.Reverb();
synth.connect(reverb);
reverb.toDestination();


let chordIds = ['deg1', 'deg2', 'deg3', 'deg4', 'deg5', 'deg6', 'deg7'];
chordIds.forEach(id => { 
  let chord = document.getElementById(id);
  chord.addEventListener("click", () => {
    createChord(chord);
  });
});


function triggerNote(note) {
  let noteLengthObject = {
    "1/1": "1n",  
    "1/2": "2n",
    "1/4": "4n",
    "1/16": "16n"
  }
 let selectedNoteLengthtoPlay = noteLengthObject[document.getElementById("select-note-length").textContent]
   if (Tone.context.state != "running") {
      Tone.start();
    }
   
    synth.triggerAttackRelease(note, selectedNoteLengthtoPlay);
  
}


const notes = {
  'c-4': ['c4', 'c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5'],
  'c4shp': ['c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5'],
  'd-4': ['d4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5'],
  'd4shp': ['d#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5'],
  'e-4': ['e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5'],
  'f-4': ['f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5'],
  'f4shp': ['f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5'],
  'g-4': ['g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5'],
  'g4shp': ['g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5'],
  'a-4': ['a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5', 'a5'],
  'a4shp': ['a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5', 'a5', 'a#5'],
  'b-4': ['b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5', 'a5', 'a#5', 'b5'],
  'c-5': ['c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5', 'a5', 'a#5', 'b5', 'c6'],
  'c5shp': ['c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5', 'a5', 'a#5', 'b5', 'c6', 'c#6'],
  'd-5': ['d5', 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5', 'a5', 'a#5', 'b5', 'c6', 'c#6', 'd6'],
  'd5shp': ['d#5', 'e5', 'f5', 'f#5', 'g5', 'g#5', 'a5', 'a#5', 'b5', 'c6', 'c#6', 'd6', 'd#6'],
  'e-5': ['e5', 'f5', 'f#5', 'g5', 'g#5', 'a5', 'a#5', 'b5', 'c6', 'c#6', 'd6', 'd#6', 'e6'],
  'f-5': ['f5', 'f#5', 'g5', 'g#5', 'a5', 'a#5', 'b5', 'c6', 'c#6', 'd6', 'd#6', 'e6', 'f6'],
  'f5shp': ['f#5', 'g5', 'g#5', 'a5', 'a#5', 'b5', 'c6', 'c#6', 'd6', 'd#6', 'e6', 'f6', 'f#6'],
  'g-5': ['g5', 'g#5', 'a5', 'a#5', 'b5', 'c6', 'c#6', 'd6', 'd#6', 'e6', 'f6', 'f#6', 'g6'],
  'g5shp': ['g#5', 'a5', 'a#5', 'b5', 'c6', 'c#6', 'd6', 'd#6', 'e6', 'f6', 'f#6', 'g6', 'g#6'],
  'a-5': ['a5', 'a#5', 'b5', 'c6', 'c#6', 'd6', 'd#6', 'e6', 'f6', 'f#6', 'g6', 'g#6', 'a6'],
  'a5shp': ['a#5', 'b5', 'c6', 'c#6', 'd6', 'd#6', 'e6', 'f6', 'f#6', 'g6', 'g#6', 'a6', 'a#6'],
  'b-5': ['b5', 'c6', 'c#6', 'd6', 'd#6', 'e6', 'f6', 'f#6', 'g6', 'g#6', 'a6', 'a#6', 'b6']
  
};
 
const shapes = {
  maj: [0, 4, 7],
  min: [0, 3, 7],
  dom: [0, 4, 7],
  dim: [0, 3, 6]
};




function createChord(button) {
  let chordName = button.innerHTML.toLowerCase().slice(0, 3);
  chordName[1] === '#' ? (chordName = chordName += 'shp') : chordName;
  // chordName[2] === '5' ? (chordName = chordName + '5') : chordName;
  chordName[1] === '#' ? (chordName = chordName[0] + chordName.slice(2, 8)) : chordName;
  
  

  let shapeName = button.innerHTML.toLowerCase().slice(3, 6);
  let chord = notes[chordName];
  let shape = shapes[shapeName].map(index => chord[index]);
  
  triggerNote(shape);
  
}


}








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
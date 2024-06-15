/*jshint esversion: 6 */
/* After the  DOM has loaded, runs a for loop and assigns event listeners to all the mode buttons.
Call the mainKey to display the main key on the page.
Call the noteLength to display the note length on the page.
call the synth function to get it loaded and ready to play.
 */
document.addEventListener("DOMContentLoaded", function () {
  mainKey();
  noteLength();
  synth();

  /*The assign eventListener for loop  */
  let modeType;
  let buttons = document.getElementsByClassName("mode-button");
  for (let button of buttons) {
    button.addEventListener("click", function () {
      modeType = this.getAttribute("data-type");

      /*set selected mode to localStorage */
      const chordSequencerMode = modeType;
      localStorage.setItem("chord_sequencer_mode", JSON.stringify(chordSequencerMode));
      modeTypefilter(modeType);
    });
  }
  /*Checks local storage to see if the stop showing button was clicked - if true, modal stops showing on load */
  if (JSON.parse(localStorage.getItem("stopShowing"))) {
    document.getElementById("modal").style.display = "none";
  }

  /*closes the instructional modal */
  let closeModal = document.getElementById("close-modal");
  closeModal.addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
  });

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
  const noteLengthArray = ["1/1", "1/2", "1/4", "1/8", "1/16"];
  let noteLengthSelected = document.getElementById("select-note-length");
  noteLengthSelected.textContent = noteLengthArray[2];

  /* read noteLength from localStorage  chord_sequencer_note */
  if (localStorage.getItem("chord_sequencer_note")) {
    const noteLength = JSON.parse(localStorage.getItem("chord_sequencer_note"));
    noteLengthSelected.textContent = noteLength;
    noteLengthSelected.value = noteLength;
  }

  /*adds event listener to the note length button and changes the note length on click */
  noteLengthSelected.addEventListener("click", () => {
    let noteLengthIndex = noteLengthArray.indexOf(noteLengthSelected.textContent);
    if (noteLengthIndex < 4) {
      noteLengthIndex++;
    } else {
      noteLengthIndex = 0;
    }
    noteLengthSelected.textContent = noteLengthArray[noteLengthIndex];
    const chord_sequencer_note = noteLengthArray[noteLengthIndex];

    /*set selected note to localStorage */
    localStorage.setItem("chord_sequencer_note", JSON.stringify(chord_sequencer_note));
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
  if (localStorage.getItem("chord_sequencer_key")) {
    const key = JSON.parse(localStorage.getItem("chord_sequencer_key"));
    keyIndex = keys.indexOf(key);
  }
  /*up arrow event listener */
  mainKeyDisplay(keys[keyIndex]);
  up.addEventListener("click", () => {
    if (keyIndex > 10) {
      keyIndex = 0;
    } else {
      keyIndex++;
    }

    mainKeyDisplay(keys[keyIndex]);
  });
  /*down arrow event listener */
  down.addEventListener("click", () => {
    if (keyIndex < 1) {
      keyIndex = 11;
    } else {
      keyIndex--;
    }
    mainKeyDisplay(keys[keyIndex]);
  });
}

/*Gets the main key from mainKey function and displays it on the page  **/
function mainKeyDisplay(mainKeyValue) {
  document.getElementById("select-key").textContent = mainKeyValue;

  /*set selected key to localStorage */
  localStorage.setItem("chord_sequencer_key", JSON.stringify(mainKeyValue));
  modeTypefilter();
}
/*selects the notes for the mode type and displays the mode type on the page **/
function modeTypefilter(modeType) {
  let modes = {
    ionian: [0, 2, 4, 5, 7, 9, 11],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    phrygian: [0, 1, 3, 5, 7, 8, 10],
    lydian: [0, 2, 4, 6, 7, 9, 11],
    mixolydian: [0, 2, 4, 5, 7, 9, 10],
    aeolian: [0, 2, 3, 5, 7, 8, 10],
    locrian: [0, 1, 3, 5, 6, 8, 10],
  };
  /*if modeType is null set modeType to ionian */
  let modeName;
  if (modeType != null) {
    modeName = modeType;
  } else {
    modeName = "ionian";
  }
  if (modeType != null) {
    modeType = modes[modeType];
  } else {
    modeType = modes.ionian;
  }

  /* read modeType from localStorage  chord_sequencer_mode */
  if (localStorage.getItem("chord_sequencer_mode")) {
    modeName = JSON.parse(localStorage.getItem("chord_sequencer_mode"));
    modeType = modes[modeName];
    selectKey(modeType, modeName);
  }
  selectedButtonColor(modeName);
  selectKey(modeType, modeName);
}

/*Selects the appropriate scale according to the main Key selected **/
function selectKey(modeType, modeName) {
  const notes = {
    c: ["c-4", "c#4", "d-4", "d#4", "e-4", "f-4", "f#4", "g-4", "g#4", "a-4", "a#4", "b-4", "c-5"],
    cshp: [
      "c#4",
      "d-4",
      "d#4",
      "e-4",
      "f-4",
      "f#4",
      "g-4",
      "g#4",
      "a-4",
      "a#4",
      "b-4",
      "c-5",
      "c#5",
    ],
    d: ["d-4", "d#4", "e-4", "f-4", "f#4", "g-4", "g#4", "a-4", "a#4", "b-4", "c-5", "c#5", "d-5"],
    dshp: [
      "d#4",
      "e-4",
      "f-4",
      "f#4",
      "g-4",
      "g#4",
      "a-4",
      "a#4",
      "b-4",
      "c-5",
      "c#5",
      "d-5",
      "d#5",
    ],
    e: ["e-4", "f-4", "f#4", "g-4", "g#4", "a-4", "a#4", "b-4", "c-5", "c#5", "d-5", "d#5", "e-5"],
    f: ["f-4", "f#4", "g-4", "g#4", "a-4", "a#4", "b-4", "c-5", "c#5", "d-5", "d#5", "e-5", "f-5"],
    fshp: [
      "f#4",
      "g-4",
      "g#4",
      "a-4",
      "a#4",
      "b-4",
      "c-5",
      "c#5",
      "d-5",
      "d#5",
      "e-5",
      "f-5",
      "f#5",
    ],
    g: ["g-4", "g#4", "a-4", "a#4", "b-4", "c-5", "c#5", "d-5", "d#5", "e-5", "f-5", "f#5", "g-5"],
    gshp: [
      "g#4",
      "a-4",
      "a#4",
      "b-4",
      "c-5",
      "c#5",
      "d-5",
      "d#5",
      "e-5",
      "f-5",
      "f#5",
      "g-5",
      "g#5",
    ],
    a: ["a-4", "a#4", "b-4", "c-5", "c#5", "d-5", "d#5", "e-5", "f-5", "f#5", "g-5", "g#5", "a-5"],
    ashp: [
      "a#4",
      "b-4",
      "c-5",
      "c#5",
      "d-5",
      "d#5",
      "e-5",
      "f-5",
      "f#5",
      "g-5",
      "g#5",
      "a-5",
      "a#5",
    ],
    b: ["b-4", "c-5", "c#5", "d-5", "d#5", "e-5", "f-5", "f#5", "g-5", "g#5", "a-5", "a#5", "b-5"],
  };

  let mainKey = document.getElementById("select-key").textContent.toLowerCase();
  if (mainKey[1] === "#") {
    mainKey = mainKey[0] + "shp";
  } else {
    mainKey = mainKey;
  }
  let selectedKey = notes[mainKey];
  filterScale(selectedKey, modeType, modeName);
}

/*Changes the color of the selected mode button **/
function selectedButtonColor(modeName) {
  let buttons = document.getElementsByClassName("mode-button");

  for (let button of buttons) {
    button.classList.remove("selected");
    if (button.getAttribute("data-type") === modeName) {
      button.classList.add("selected");
    }
  }
}

/*Filters the scale according to the mode selected **/
function filterScale(scale, mode, modeName) {
  /*the map method filters the scale according to the mode selected
  it removes the notes that are not in the given mode **/
  let modeChords = mode.map((index) => scale[index]);

  let modeNameObj = {
    ionian: ["maj", "min", "min", "maj", "maj", "min", "dim"],
    dorian: ["min", "min", "maj", "maj", "min", "dim", "maj"],
    phrygian: ["min", "maj", "maj", "min", "dim", "maj", "min"],
    lydian: ["maj", "maj", "min", "dim", "maj", "min", "min"],
    mixolydian: ["maj", "min", "dim", "maj", "min", "min", "maj"],
    aeolian: ["min", "dim", "maj", "min", "min", "maj", "maj"],
    locrian: ["dim", "maj", "min", "min", "maj", "maj", "min"],
  };
  let modeNameToFilter = modeNameObj[modeName];
  /*adds maj, min, dim to the modeChords **/
  let filteredModeChords = [];
  for (let i = 0; i < modeChords.length; i++) {
    filteredModeChords.push(modeChords[i] + modeNameToFilter[i]);
  }

  displayModeChords(filteredModeChords, modeNameToFilter);
}
/*Displays the mode chords on the page **/
function displayModeChords(filteredModeChords, modeNameToFilter) {
  for (let i = 0; i < filteredModeChords.length; i++) {
    document.getElementById(`deg${i + 1}`).innerHTML = filteredModeChords[i].toUpperCase();
    document.getElementById(`deg${i + 1}`).classList = `button ${modeNameToFilter[i]}`;
  }
}

/*Tone JS Tone generator **/
/*The synth function creates the synth and reverb and connects them to the destination i.e speakers.*/
function synth() {
  const synth = new Tone.PolySynth();
  const reverb = new Tone.Reverb();
  synth.connect(reverb);
  reverb.toDestination();

  let chordIds = ["deg1", "deg2", "deg3", "deg4", "deg5", "deg6", "deg7"];
  chordIds.forEach((id) => {
    let chord = document.getElementById(id);
    chord.addEventListener("click", () => {
      createChord(chord);
    });
  });

  /*An object containing the arrays that will map to the correct notes to be played  */
  const notes = {
    "c-4": ["c4", "c#4", "d4", "d#4", "e4", "f4", "f#4", "g4", "g#4", "a4", "a#4", "b4", "c5"],
    c4shp: ["c#4", "d4", "d#4", "e4", "f4", "f#4", "g4", "g#4", "a4", "a#4", "b4", "c5", "c#5"],
    "d-4": ["d4", "d#4", "e4", "f4", "f#4", "g4", "g#4", "a4", "a#4", "b4", "c5", "c#5", "d5"],
    d4shp: ["d#4", "e4", "f4", "f#4", "g4", "g#4", "a4", "a#4", "b4", "c5", "c#5", "d5", "d#5"],
    "e-4": ["e4", "f4", "f#4", "g4", "g#4", "a4", "a#4", "b4", "c5", "c#5", "d5", "d#5", "e5"],
    "f-4": ["f4", "f#4", "g4", "g#4", "a4", "a#4", "b4", "c5", "c#5", "d5", "d#5", "e5", "f5"],
    f4shp: ["f#4", "g4", "g#4", "a4", "a#4", "b4", "c5", "c#5", "d5", "d#5", "e5", "f5", "f#5"],
    "g-4": ["g4", "g#4", "a4", "a#4", "b4", "c5", "c#5", "d5", "d#5", "e5", "f5", "f#5", "g5"],
    g4shp: ["g#4", "a4", "a#4", "b4", "c5", "c#5", "d5", "d#5", "e5", "f5", "f#5", "g5", "g#5"],
    "a-4": ["a4", "a#4", "b4", "c5", "c#5", "d5", "d#5", "e5", "f5", "f#5", "g5", "g#5", "a5"],
    a4shp: ["a#4", "b4", "c5", "c#5", "d5", "d#5", "e5", "f5", "f#5", "g5", "g#5", "a5", "a#5"],
    "b-4": ["b4", "c5", "c#5", "d5", "d#5", "e5", "f5", "f#5", "g5", "g#5", "a5", "a#5", "b5"],
    "c-5": ["c5", "c#5", "d5", "d#5", "e5", "f5", "f#5", "g5", "g#5", "a5", "a#5", "b5", "c6"],
    c5shp: ["c#5", "d5", "d#5", "e5", "f5", "f#5", "g5", "g#5", "a5", "a#5", "b5", "c6", "c#6"],
    "d-5": ["d5", "d#5", "e5", "f5", "f#5", "g5", "g#5", "a5", "a#5", "b5", "c6", "c#6", "d6"],
    d5shp: ["d#5", "e5", "f5", "f#5", "g5", "g#5", "a5", "a#5", "b5", "c6", "c#6", "d6", "d#6"],
    "e-5": ["e5", "f5", "f#5", "g5", "g#5", "a5", "a#5", "b5", "c6", "c#6", "d6", "d#6", "e6"],
    "f-5": ["f5", "f#5", "g5", "g#5", "a5", "a#5", "b5", "c6", "c#6", "d6", "d#6", "e6", "f6"],
    f5shp: ["f#5", "g5", "g#5", "a5", "a#5", "b5", "c6", "c#6", "d6", "d#6", "e6", "f6", "f#6"],
    "g-5": ["g5", "g#5", "a5", "a#5", "b5", "c6", "c#6", "d6", "d#6", "e6", "f6", "f#6", "g6"],
    g5shp: ["g#5", "a5", "a#5", "b5", "c6", "c#6", "d6", "d#6", "e6", "f6", "f#6", "g6", "g#6"],
    "a-5": ["a5", "a#5", "b5", "c6", "c#6", "d6", "d#6", "e6", "f6", "f#6", "g6", "g#6", "a6"],
    a5shp: ["a#5", "b5", "c6", "c#6", "d6", "d#6", "e6", "f6", "f#6", "g6", "g#6", "a6", "a#6"],
    "b-5": ["b5", "c6", "c#6", "d6", "d#6", "e6", "f6", "f#6", "g6", "g#6", "a6", "a#6", "b6"],
  };

  /*An object containing the arrays that will map to the correct shape of the chords to be played */
  const shapes = {
    maj: [0, 4, 7],
    min: [0, 3, 7],
    dom: [0, 4, 7],
    dim: [0, 3, 6],
  };

  /*Gets the chord name and shape from the clicked button
gets rif of the # and adds the chord shape 
sends the chord and shape to be triggered to the triggerNote function  */
  function createChord(button) {
    let chordName = button.innerHTML.toLowerCase().slice(0, 3);
    if (chordName[1] === "#") {
      chordName = chordName += "shp";
    } else {
      chordName = chordName;
    }
    if (chordName[1] === "#") {
      chordName = chordName[0] + chordName.slice(2, 8);
    } else {
      chordName = chordName;
    }

    let shapeName = button.innerHTML.toLowerCase().slice(3, 6);
    let chord = notes[chordName];
    let shape = shapes[shapeName].map((index) => chord[index]);

    triggerNote(shape);
  }

  /* gets chord and shape from create chord function
get the note length from the notelength HTML 
and triggers the sound */
  function triggerNote(note) {
    let noteLengthObject = {
      "1/1": "1n",
      "1/2": "2n",
      "1/4": "4n",
      "1/8": "8n",
      "1/16": "16n",
    };
    let selectedNoteLengthtoPlay =
      noteLengthObject[document.getElementById("select-note-length").textContent];
    if (Tone.context.state != "running") {
      Tone.start();
    }

    synth.triggerAttackRelease(note, selectedNoteLengthtoPlay);
  }
}

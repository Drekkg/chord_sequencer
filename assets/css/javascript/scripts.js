/* After DOM has loaded run a for loop on all the buttons
 and assign event listeners */

document.addEventListener("DOMContentLoaded", function () {
  let modeType = 'ionian';
  // mainKey(modeType);
  let buttons = document.getElementsByTagName("button");
  modeTypefilter(modeType);

  for (let button of buttons) {
    button.addEventListener("click", function () {
      modeType = this.getAttribute("data-type");
      modeTypefilter(modeType);
      
    });
  }
});

/*Selects the key from an array and displays the key  on the page.
The up and down arrows scrolls through the different keys  **/
function mainKey(modeValue) {
  let keys = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  let up = document.getElementById("up-arrow");
  let down = document.getElementById("down-arrow");
  let keyIndex = 0;
  mainKeyDisplay(keys[keyIndex], modeValue)
  up.addEventListener("click",() => {
    keyIndex > 10 ? keyIndex = 0 : keyIndex++;
    mainKeyDisplay(keys[keyIndex], modeValue);
  });

  down.addEventListener("click",() => {
    keyIndex < 1 ? keyIndex =  11 : keyIndex--;
    mainKeyDisplay(keys[keyIndex], modeValue);
  });
}

/*Gets the main key from the box  **/ 
function mainKeyDisplay(mainKeyValue, mainModeValue ) {
  document.getElementById("select-key").textContent = mainKeyValue;
console.log("inMainKeyDisplay " + mainKeyValue + " " + mainModeValue )
}
/*Selects the appropriate scale according to the main Key selected **/
function selectKey() {
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
    b: ['b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5', 'a5', 'a#5', 'b5'],
  };
let mainKey = document.getElementById("select-key").textContent.toLowerCase();
mainKey[1] === '#' ? mainKey = mainKey[0] + 'shp' : mainKey;
let selectedKey = notes[mainKey];
console.log(" key " + selectedKey + ' mode ' + modeType);
}

function modeTypefilter(modeType) {
let modes = {
  ionian: ['ionian' + 0 + 'maj', 2 +'min', 4 + 'min', 5 + 'maj', 7 + 'dom', 9 + 'min', 11 + 'dim'],
  dorian: ['dorian' + 0 + 'min', 2 +'min', 3 + 'maj', 5 + 'maj', 7 + 'min', 9 + 'dim', 10 + 'maj'],
  phrygian: ['phrygian' + 0 + 'min', 1 + 'maj', 3 + 'dom', 5 + 'min', 7 + 'dim', 8 + 'maj', 10 + 'min' ],
  lydian: ['lydian', + 0 + 'maj', 2 + 'dom', 4 + 'min', 6 + 'dim', 7 + 'maj', 9 + 'min', 11 + 'min' ],
  mixolydian: ['mixolydian', 0 + 'dom', 2 + 'min', 4 + 'dim', 5 + 'maj', 7 + 'min', 9 + 'min', 10 + 'maj'],
  aeolian: ['aeolian', 0 + 'min', 2 + 'dim', 3 + 'maj', 5 + 'min', 7 + 'min', 8 + 'maj', 10 + 'dom'],
  locrian: ['locrian', 0 + 'dim', 1 + 'maj', 3 + 'min', 5 + 'min', 6 + 'maj', 8 + 'dom', 10 + 'min']
}
let selectedModeType = modes[modeType];
mainKey(modeType);
console.log("in modeTypeFilter " + modeType)
}


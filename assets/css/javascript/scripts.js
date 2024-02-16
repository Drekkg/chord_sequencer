/* After DOM has loaded run a for loop on all the buttons
 and assign event listeners */

document.addEventListener("DOMContentLoaded", function () {
  mainKey();
  selectKey();
  console.log("loaded");
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      let modeType = this.getAttribute("data-type");
      console.log(modeType);
    });
  }
});

/*Selects the key from an array and displays it on the page.
The up and down arrows scrolls through the different keys  **/
function mainKey() {
  let keys = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  let up = document.getElementById("up-arrow");
  let down = document.getElementById("down-arrow");
  let keyIndex = 0;
  mainKeyDisplay(keys[keyIndex])
  up.addEventListener("click",() => {
    keyIndex > 10 ? keyIndex = 0 : keyIndex++;
    mainKeyDisplay(keys[keyIndex]);
  });

  down.addEventListener("click",() => {
    keyIndex < 1 ? keyIndex =  11 : keyIndex--;
    mainKeyDisplay(keys[keyIndex]);
  });
}


function mainKeyDisplay(val) {
  let keyToDisplay = document.getElementById("select-key").textContent = val;
  selectKey();
}

function selectKey() {
let selectedKey = document.getElementById("select-key").textContent.toLowerCase();
console.log(selectedKey);
}

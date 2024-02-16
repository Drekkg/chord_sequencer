/* After DOM has loaded run a for loop on all the buttons
 and assign event listeners */

document.addEventListener("DOMContentLoaded", function () {
  mainKey();
  console.log("loaded");
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      let modeType = this.getAttribute("data-type");
      console.log(modeType);
    });
  }
});

function mainKey() {
  let keys = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  let up = document.getElementById("up-arrow");
  let down = document.getElementById("down-arrow");
  let keyIndex = 0;
  mainKeyDisplay(keys[keyIndex])
  console.log(keyIndex);
  up.addEventListener("click",() => {
    if(keyIndex > 10) {
       keyIndex = 0;
      mainKeyDisplay(keys[keyIndex]);
    }else {
       keyIndex++;
    mainKeyDisplay(keys[keyIndex]);
    }
  });
  down.addEventListener("click",() => {
    if(keyIndex < 1){
    keyIndex = 11;
    mainKeyDisplay(keys[keyIndex]);
    }else{
      keyIndex--;
      mainKeyDisplay(keys[keyIndex]);
    }
  });
}

function mainKeyDisplay(val) {
  console.log(val);
  let keyToDisplay = document.getElementById("select-key").textContent = val;
}

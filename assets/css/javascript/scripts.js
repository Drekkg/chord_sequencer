/* After DOM has loaded run a for loop on all the buttons
 and assign event listeners */

document.addEventListener("DOMContentLoaded", function () {
  mainKey();
  console.log("loaded")
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      let modeType = this.getAttribute("data-type");
      console.log(modeType);
    });
  }
});

function mainKey() {
  let keys = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"];
  let up = document.getElementById("up-arrow");
  let down = document.getElementById("down-arrow");
  let keyIndex = 0;
  up.addEventListener("click", function keyArrayUp() {
    keyIndex ++;
    console.log(keys[keyIndex]);
  });
  down.addEventListener("click", function keyArrayDown() {
    keyIndex --;
    console.log(keys[keyIndex]);
  });
}

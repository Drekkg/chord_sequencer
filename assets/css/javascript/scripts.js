/* After DOM has loaded run a for loop on all the buttons
 and assign event listeners */

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
      button.addEventListener("click", function () {
          let modeType  = this.getAttribute("data-type");
          console.log(modeType);
      });
    }
    console.log(modeType);
});
   
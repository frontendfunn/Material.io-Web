require("../scss/style.scss");
require("../index.html");
import { MDCSwitch } from "@material/switch";

const switchesArray = document.querySelectorAll(".mdc-switch");

for (let switchElement of switchesArray) {
  let _switch = new MDCSwitch(switchElement);
}

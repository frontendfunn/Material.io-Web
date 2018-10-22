require("../scss/style.scss");
require("../index.html");

import { MDCSlider } from "@material/slider";

const slidersArray = document.querySelectorAll(".mdc-slider");

for (let sliderElement of slidersArray) {
  let slider = new MDCSlider(sliderElement);
  slider.listen("MDCSlider:change", () => {
    console.log(`value changed to ${slider.value}`);
  });
}

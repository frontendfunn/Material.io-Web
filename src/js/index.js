require("../scss/style.scss");
require("../index.html");
import { MDCFloatingLabel } from "@material/floating-label";
import { MDCLineRipple } from "@material/line-ripple";
import { MDCNotchedOutline } from "@material/notched-outline";
import { MDCSelect } from "@material/select";
import * as $ from "jquery/dist/jquery.min";

$(document).ready(function() {
  $(".mdc-select").each(function(index, selectMenu) {
    let floatingLabel = $(selectMenu).find(".mdc-floating-label")[0];
    let lineRipple = $(selectMenu).find(".mdc-line-ripple")[0];
    let notchedOutline = $(selectMenu).find(".mdc-notched-outline")[0];
    const select = new MDCSelect(selectMenu);

    if (floatingLabel) new MDCFloatingLabel(floatingLabel);
    if (lineRipple) new MDCLineRipple(lineRipple);
    if (notchedOutline) new MDCNotchedOutline(notchedOutline);
    select.listen("change", () => {
      console.log(
        `You Selected ${select.selectedIndex} and its value is ${select.value}`
      );
    });
  });
});

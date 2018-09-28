require("../scss/style.scss");
require("../index.html");

import { MDCFloatingLabel } from "@material/floating-label";
import { MDCLineRipple } from "@material/line-ripple";
import { MDCTextField } from "@material/textfield";
import { MDCNotchedOutline } from "@material/notched-outline";
import * as $ from "jquery/dist/jquery.min";

$(document).ready(function() {
  $(".mdc-text-field").each(function(index, textField) {
    new MDCTextField(textField);
    let floatingLabel = $(textField).find(".mdc-floating-label")[0];
    let lineRipple = $(textField).find(".mdc-line-ripple")[0];
    let notchedOutline = $(textField).find(".mdc-noutched-outline")[0];
    if (floatingLabel) new MDCFloatingLabel(floatingLabel);
    if (lineRipple) new MDCLineRipple(lineRipple);
    if (notchedOutline) new MDCNotchedOutline(notchedOutline);
  });
});

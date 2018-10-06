require("../scss/style.scss");
require("../index.html");

import { MDCFormField } from "@material/form-field";
import { MDCRadio } from "@material/radio";
import * as $ from "jquery/dist/jquery.min";

$(document).ready(function() {
  $(".mdc-form-field").each(function(index, formFieldEle) {
    let formField = new MDCFormField(formFieldEle);
    let radio = new MDCRadio($(formFieldEle).find(".mdc-radio")[0]);
    formField.input = radio;
  });
});

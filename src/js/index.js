require("../scss/style.scss");
require("../index.html");

import { MDCFormField } from "@material/form-field";
import { MDCCheckbox } from "@material/checkbox";
import * as $ from "jquery/dist/jquery.min";

$(document).ready(function() {
  $(".mdc-form-field").each(function(index, formFieldEle) {
    let checkbox = new MDCCheckbox($(formFieldEle).find(".mdc-checkbox")[0]);
    let formField = new MDCFormField(formFieldEle);
    formField.input = checkbox;
  });
});

require("../scss/style.scss");
require("../index.html");

import { MDCChip, MDCChipSet } from "@material/chips";
import * as $ from "jquery/dist/jquery.min";

$(document).ready(function() {
  $(".mdc-chip-set").each(function(index, element) {
    new MDCChipSet(element);
  });
});

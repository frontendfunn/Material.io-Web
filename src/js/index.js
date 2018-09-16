require("../scss/style.scss");
require("../index.html");

import { MDCDialog } from "@material/dialog";
import * as $ from "jquery/dist/jquery.min";
$(document).ready(function() {
  $(".block").each(function(index, blockElement) {
    let showDialogBtn = $(blockElement).find(".showDialogBtn");
    let dialog = new MDCDialog($(blockElement).find(".mdc-dialog")[0]);
    showDialogBtn.on("click", function() {
      dialog.show();
    });
    dialog.listen("MDCDialog:accept", function() {
      console.log("Accepted");
    });
    dialog.listen("MDCDialog:cancel", function() {
      console.log("Cancelled");
    });
  });
});

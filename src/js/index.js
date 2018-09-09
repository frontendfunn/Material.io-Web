require("../scss/style.scss");
require("../index.html");
import * as $ from "jquery/dist/jquery.min";

$(document).ready(function() {
  $(".toggler").on("click", function() {
    $(".exitedBtn").toggleClass("mdc-fab--exited");
  });
});

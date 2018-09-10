require("../scss/style.scss");
require("../index.html");
require("../images/icon.png");
require("../images/icon2.png");
import * as $ from "jquery/dist/jquery.min";
import * as mdc from "material-components-web";
$(document).ready(function() {
  $(".iconToggle").each(function() {
    new mdc.iconButton.MDCIconButtonToggle(this);
  });
});

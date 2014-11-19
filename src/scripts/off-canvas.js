/*
    MAIN SCRIPTS - Last updated: 19-11-14
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var TOUCH_ENABLED = $(".touch").length;
var touchEvent = TOUCH_ENABLED ? "touchstart" : "click";

//-----------------------------------------------------------------
// Off Canvas Menus - Uses MMenu library
//
// Notes: There is a conflict with fastclick.js - to overcome we
// need to prevent it handling the click by overriding with a
// touchstart event. This will keep things smooth
//
// Hamburger trigger buttons live inside the header
//-----------------------------------------------------------------

$(".lv-hamburger").bind(touchEvent, function(e) {

    $this = $(this);
    e.preventDefault();

    if ($this.attr('href') == '#off-canvas-menu-left') {
        $("#off-canvas-menu-left").trigger("open.mm");
    }

    if ($this.attr('href') == '#off-canvas-menu-right') {
        $("#off-canvas-menu-right").trigger("open.mm");
    }
});

$("#off-canvas-menu-left").mmenu({
   "offCanvas": {
      "position": "left"
   }
});

$("#off-canvas-menu-right").mmenu({
   "offCanvas": {
      "position": "right"
   }
});
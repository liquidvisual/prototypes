/*
    MAIN SCRIPTS - Last updated: 19-11-14
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var TOUCH_ENABLED = $(".touch").length;

//-----------------------------------------------------------------
// Tooltips
//-----------------------------------------------------------------

$(function() {
    $(".lv-tooltip").click(function () {
        var $title = $(this).find(".title");
        if (!$title.length) {
            $(".title").remove();
            $(this).append('<span class="title">' + $(this).attr("title") + '</span>');
        } else {
            $title.remove();
        }
    })
});
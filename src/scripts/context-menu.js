/*
    MAIN SCRIPTS - Last updated: 19-11-14
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Context Menu
//
// Note: 'context-menu-btn' lives inside the header.
// The context menu leverages the Transit animation library.
//-----------------------------------------------------------------

$('#context-menu-btn').click(function(e){

    var contextMenu = $('.lv-context-menu');
    var contextMenuVisible = contextMenu.is(':visible');
    var contextMenuWidth = contextMenu.width();

    e.preventDefault();

    // Slide the menu offscreen left
    if (contextMenuVisible) {
         contextMenu.transition({
            x: -contextMenuWidth,
            complete: function(){ contextMenu.removeClass('lv-show').css({ x: 0 }).attr('style', '') } });
    } else {
        // Slide onscreen right
        contextMenu.addClass('lv-show');
        contextMenu.css({ x: -contextMenuWidth }).transition({ x: 0 });
    }
});
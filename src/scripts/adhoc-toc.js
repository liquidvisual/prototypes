/*
    MAIN SCRIPTS - Last updated: 19-11-14
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// TOC Functionality - ** For simulation purposes only **
//
// This gets the TOC moving in a basic way so the functionality
// of drilling down is simulated.
//
// REPLACE WITH YOUR OWN IMPLEMENTATION
//-----------------------------------------------------------------

$('.toc-root .plus .collapsed, .toc-root .plus .expanded').click(function(){
    var $this = $(this);

    // Default 'closed' state
    if ($this.hasClass('collapsed')){

        $this.removeClass('collapsed').addClass('expanded');
        $('ul', $this.parent()).first().show();

    } else if ($this.hasClass('expanded')) {

        $this.removeClass('expanded').addClass('collapsed');
        $('ul', $this.parent()).first().hide();
    }
});
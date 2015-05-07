/*
    DROPDOWNS.JS - Last updated: 15-04-15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Content Expander
//-----------------------------------------------------------------

$('[data-dropdown]').each(function(event){
    var trigger = $(this); // dropdown trigger
    var triggerPos = trigger.position();
    var dropdown = trigger.next('[data-dropdown-content]');

    // Wrap both trigger and nearest dropdown for position reference
    trigger.next('[data-dropdown-content]').andSelf().wrapAll('<span class="lv-dropdown-wrapper"/>');

    dropdown.css({
    	top: trigger.height() + trigger.outerHeight() - 18 // magic
    });

    $(trigger, dropdown).wrapAll('<span class="lv-dropdown-wrapper"/>');



    trigger.click(function(event){
        event.preventDefault();
        dropdown.toggle();
    });
})
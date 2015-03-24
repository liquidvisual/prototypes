/*
    MAIN SCRIPTS - Last updated: 19-11-14
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var searchForm = $('.lv-partial-view');
var advancedOptions = $('.lv-advanced-options');

//-----------------------------------------------------------------
// Content Expander
//
// For: search templates, search results, document view
//
// Toggles the visibility of content by styling a max height
// used for showing 'advanced options' and hiding excessive content
//-----------------------------------------------------------------

// Toggle fields INSIDE of form

$('.lv-advanced-options-btn').click(function(e){
    var text = $(this).text() == "Show More" ? "Show Less" : "Show More";

    e.preventDefault();
    $(this).text(text);
    advancedOptions.toggleClass('hide');
});

//-----------------------------------------------------------------
// Partial View
//
// For all partial views, append a button to trigger expanding / collapsing
// in order to work, it has to add a class of 'collapsed' which really
// needs to be in the markup to prevent FLAUC
//-----------------------------------------------------------------

$('.lv-partial-view, #resultsContainerForm .result').each(function(){
    var $this = $(this);
    var expander = $('.lv-partial-view-btn.lv-non-legacy');
    var expanderOnPage = expander.length;

    // Test for expander btn on page, if legacy - append to markup (ew)
    if (!expanderOnPage) {
        expander = $('<a class="lv-partial-view-btn button pill tiny" href="#">Expand</a>');
        $this.append(expander);
    }
    $this.addClass('collapsed');

    expander.click(function(e){
        e.preventDefault();
        $this.toggleClass('collapsed');

        $this.hasClass('collapsed') ? $(this).text('Expand') : $(this).text('Minimize');
    });
});
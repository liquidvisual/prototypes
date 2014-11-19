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
    advancedOptions.toggle();
});

//-----------------------------------------------------------------
// Partial View
//-----------------------------------------------------------------

// Toggle form HEIGHT (mobile only - shows first 3 fields approx)
$('.lv-partial-view-btn').click(function(e){
    // var text = $(this).text() == "Show More" ? "Show Less" : "Show More";
    e.preventDefault();
    $(this).hide();
    searchForm.toggleClass('lv-partial-view');
});
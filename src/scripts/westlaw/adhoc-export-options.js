/*
    MAIN SCRIPTS - Last updated: 19-11-14
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Export Options - Currently represented by tiny icons above search and document.
//
// The export options are disabled until the user makes a selection.
// The following code looks for any checked checkboxes and removes
// the 'disabled' class from '.lv-doc-options' (or .lv-export-options)
//
// Might want to eventually replace this adhoc implementation with one that
// actually tests for the checkboxes values.
//-----------------------------------------------------------------

$("#tocNodes input[type='checkbox'], #resultsContainerForm input[type='checkbox']").on("click", function() {
    if ($("#tocNodes input:checked").length || $("#resultsContainerForm input:checked").length) {
        $('.lv-export-options').removeClass('disabled');
    } else {
        $('.lv-export-options').addClass('disabled');
    }
});
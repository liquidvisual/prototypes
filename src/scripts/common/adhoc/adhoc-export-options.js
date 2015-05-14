/*
    ADHOC-EXPORT-OPTIONS.JS - Last updated: 13-13-15
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
//-----------------------------------------------------------------

$("input[type='checkbox']").on("click", function() {
    if ($(".lv-page input[type='checkbox']:checked").length) {
        $('.lv-export-options').removeClass('disabled');
    } else {
        $('.lv-export-options').addClass('disabled');
    }
});
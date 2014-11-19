/*
    MAIN SCRIPTS - Last updated: 19-11-14
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Modal - Uses Magnific Popup
//
// USAGE: <a href="your-ajax-content.html" class="ajax-modal"></a>
//
// Place a 'data-header' attribute on your HTML content's wrapper to
// populate the heading of the modal. Eg. <div data-header="Help Tips">...</div>
//
// All modal content is currently located in src/modal_output/
//
// For more info, visit Magnific docs:
// http://dimsemenov.com/plugins/magnific-popup/documentation.html#ajax_type
//-----------------------------------------------------------------

$('.ajax-modal').magnificPopup({
    type: 'ajax',
    showCloseBtn: false,
    callbacks: {
    // wrap the ajax request with a div that we've styled to look good
    parseAjax: function (mfpResponse) {

        var modalTitle = $(mfpResponse.data).filter("[data-header]").attr('data-header');

        // The name of the modal will be taken from attribute 'data-header' - placed on the inner wrapper
        mfpResponse.data = '<div class="mfp-content-header">'+modalTitle+'<button title="Close (Esc)" type="button" class="mfp-close">×</button></div><div class="mfp-content-scroller">' + mfpResponse.data + '</div>';

        }, ajaxContentAdded: function () {
            return this.content;
        }
    },
});
/*
    MAIN SCRIPTS - Last updated: 19-11-14
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

// jQuery UI on SELECT elements
$(".ui-datepicker").datepicker({ dateFormat: "dd-mm-yy" });

//-----------------------------------------------------------------
// Adhoc Datepicker for Dashboard Below
//-----------------------------------------------------------------

// homepage datepicker - select to launch modal (faked)
$("#datepicker").datepicker({ changeMonth: true, changeYear: true, dateFormat: "dd-mm-yy",

    // SIMULATED FUNCTIONALITY ONLY
    onSelect: function(dateText, inst) {

        // Launch AJAX Popup

        $.magnificPopup.open({
          items: {
            src: '/modal_output/datepicker-example.html',
          },
          type: 'ajax',
          showCloseBtn: false,
          callbacks: {
          // wrap the ajax request with a div that we've styled to look good
          parseAjax: function (mfpResponse) {

              var modalTitle = $(mfpResponse.data).filter("[data-header]").attr('data-header') + ' ('+dateText+')';

              // The name of the modal will be taken from attribute 'data-header' - placed on the inner wrapper
              mfpResponse.data = '<div class="mfp-content-header">'+modalTitle+'<button title="Close (Esc)" type="button" class="mfp-close">×</button></div><div class="mfp-content-scroller">' + mfpResponse.data + '</div>';

              }, ajaxContentAdded: function () {
                  return this.content;
              }
          }
        }, 0);
}});
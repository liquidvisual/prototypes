/*
    TABLES.JS - Last updated: 12.05.15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Tables - Using the Footable library
//-----------------------------------------------------------------

$('.js-footable').footable({
    breakpoints: {
        phone: 480,
        tablet: 963-30 //-30
    }
}).removeClass('lv-loading').find('> tbody > tr:not(.footable-row-detail):nth-child(even)').addClass('zebra');

// $('.footable').footable().redraw();

//-----------------------------------------------------------------
// Update Footable
//-----------------------------------------------------------------

// $(function() { });

function updateFootable() {
    var paramTable = $('.js-footable');
    // paramTable.footable();
    // paramTable.trigger('footable_initialize'); //Reinitialize
    // paramTable.trigger('footable_redraw'); //Redraw the table
    paramTable.trigger('footable_resize'); //Resize the table
}

//-----------------------------------------------------------------
// Page Size Select
//-----------------------------------------------------------------

$('.js-footable-page-size-select').on('change', function(event){
    var displayCount = $(this).val();

    // Find footable and force redraw with new page-size
    $('.js-footable').data('page-size', displayCount).trigger('footable_initialized');
});

//-----------------------------------------------------------------
// Redraw Footable on tabs
//-----------------------------------------------------------------

// $(document).foundation({
//     tab: {
//       callback : function (tab) {

//       	// $('.footable').trigger('footable_redraw');
//         // console.log(tab);
//         // $('.footable').redraw();
//         // updateFootable();
//       }
//     }
//  });

//==================================================
//
//==================================================
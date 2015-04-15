/*
    TABLES.JS - Last updated: 11.03.14
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Tables - Using the Footable library
//-----------------------------------------------------------------


	$('.footable').footable({
        breakpoints: {
            phone: 480,
            tablet: 963-30 //-30
        }
    }).removeClass('lv-loading'); //.find('> tbody > tr:not(.footable-row-detail):nth-child(even)').addClass('zebra');

   // $('.footable').footable().redraw();


// $(function() { });

function updateFootable() {
    var paramTable = $('.footable');
    // paramTable.footable();
    // paramTable.trigger('footable_initialize'); //Reinitialize
    // paramTable.trigger('footable_redraw'); //Redraw the table
    paramTable.trigger('footable_resize'); //Resize the table
}


$(document).foundation({
    tab: {
      callback : function (tab) {

      	// $('.footable').trigger('footable_redraw');
        // console.log(tab);
        // $('.footable').redraw();
        updateFootable();
      }
    }
 });

//==================================================
//
//==================================================
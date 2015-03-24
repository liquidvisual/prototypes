/*
    ADHOC-LIST-DELETE.JS - Last updated: 11-03-15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Improvided for the demo of the sidebar
//-----------------------------------------------------------------

$('[data-edit]').click(function(event){
  event.preventDefault();

  var active = this.bool = !this.bool;
  var editTarget = $($(this).attr('data-edit'));
  var editBtns = editTarget.find('.js-delete-btn, .js-rename-btn');

  if (active) {
    editBtns.removeClass('hide');
  } else {
    editBtns.addClass('hide');
  }
});

$('.js-delete-btn').click(function(event){
  $(this).parent().remove();
});

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
/*
    DASHBOARD.JS - Last updated: 19-11-14
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var searchForm = $('.lv-partial-view');
var advancedOptions = $('.lv-advanced-options');

//-----------------------------------------------------------------
// Content Expander
//-----------------------------------------------------------------

$('.lv-dashboard-grid .lv-content-block').each(function(){

    var $this = $(this);
    var minimizer = $('.minimize-btn', $this);
    var content = $('.lv-content-block-inner', $this);

    minimizer.click(function(e){
        e.preventDefault();
        $this.toggleClass('is-collapsed');
    });
})
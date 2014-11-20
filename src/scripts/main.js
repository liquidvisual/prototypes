/*
    MAIN SCRIPTS - Last updated: 19-11-14
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

$(document).ready(function() {
    NProgress.start(); // Start preloader bar

    // Fastclick on touch
    FastClick.attach(document.body);

    // Init Tabs
    $("#docoptionstabs").tabs();
});

//==================================================
// Window Load
//==================================================

$(window).load(function() {
    NProgress.done(); // Complete preload once page loaded
});

//-----------------------------------------------------------------
// Dashboard (Move into its own file)
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

//-----------------------------------------------------------------
// <= IE8 Caution Message
//-----------------------------------------------------------------

//$('.lv-alert .close-btn').click(function(){$(this).parent().hide();});

//-----------------------------------------------------------------
// +++ HELPERS +++
//-----------------------------------------------------------------
//==================================================
// Developer: COMMAND+S for screen width
//==================================================

$(document).keypress(function(event) {
    if (event.which == 115 && (event.ctrlKey||event.metaKey)|| (event.which == 19)) {
        event.preventDefault();
        alert("(w) "+$(window).width()+" (h) "+$(window).height());
        return false;
    }
    return true;
});
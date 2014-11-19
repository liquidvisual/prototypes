/*
    MAIN SCRIPTS - Last updated: 19-11-14
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var TOUCH_ENABLED = $(".touch").length;
var sidebarStateStorage = localStorage.getItem("sidebarState");

//-----------------------------------------------------------------
// HTML Local Storage - Save state of sidebar
//
// Sidebar defaults to the 'is-collapsed' state (class on Master).
// Local storage will remember if user left it open or hasn't touched it.
// In either case, media queries will handle the state naturally, or the sidebar
// will initalize open.
//-----------------------------------------------------------------

if (sidebarStateStorage == "uncollapsed" || sidebarStateStorage == null) {
    $('.lv-sidebar').removeClass('is-collapsed');
}

//-----------------------------------------------------------------
// Sidebar Tabs
//-----------------------------------------------------------------

$('.lv-sidebar .tabs a').click(function(e){

    var $this = $(this);
    var tabHash = $this.attr('href');
    var sidebar = $this.parent().parent().parent().parent();
    var sidebarCollapsed = sidebar.hasClass('is-collapsed');
    var sidebarUncollapsed = sidebar.hasClass('is-uncollapsed');
    var sizeWhereSidebarIsInFlow = $(window).width() >= 1024;

    e.preventDefault();

    // Strip all tab LIs, apply 'active' to clicked LI
    $('.lv-sidebar .tabs .active').removeClass('active');
    $this.parent().addClass('active');

    // If 'collapse' is clicked (only possible when open)
    if (tabHash == "#collapse") {

        // user has engaged the sidebar. Remember preferences and override media queries
        sidebar.removeClass('is-uncollapsed').addClass('is-collapsed');

        // USER STORAGE - Remember user input
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("sidebarState", "collapsed");
        }

    // Clicking all other tabs - will ** UNCOLLAPSE ** sidebar
    } else {
        // Strip all content sections, apply 'active' to ID that matches tabHash
        $('.tabs-content .active').removeClass('active');
        $(tabHash).addClass('active');

        // 1. Sidebar is collapsed by user engagement directly OR
        // 2. If initalized by medium media query - in which case, there
        // are no explicit collapse/uncollapse classes applied.

        // Uncollapse the sidebar

        if (sidebarCollapsed || (!sidebarCollapsed && !sidebarUncollapsed)) {
            sidebar.removeClass('is-collapsed').addClass('is-uncollapsed');

            // sidebar.css({ x: sidebar.width() }).transition({ x: 0 }); can't make this work

            // USER STORAGE - Remember user input
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("sidebarState", "uncollapsed");
            }
        }

        // scroll to top on desktop, sidebar scrolls WITH page on medium-up
        if (sizeWhereSidebarIsInFlow) $.scrollTo(0, 300);
        //$(window).scrollTop(0); // alt method
        //$("html, body").animate({scrollTop: "0"}, 300); // alt method
    }
});
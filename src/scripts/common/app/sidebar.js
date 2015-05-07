/*
    SIDEBAR.JS - Last updated: 12-03-15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var sidebar = $('.lv-sidebar');
var sidebarContent = $('.lv-sidebar-inner');
var sidebarTabs = $('.lv-sidebar .lv-tabs').children();
var sidebarTabPanels = $('.lv-sidebar .tabs-content').children();

// --- API ---

// sidebarSlide(direction: true, event, tabIndex);

//-----------------------------------------------------------------
// Toggle Sidebar Transition
//-----------------------------------------------------------------

function sidebarSlide(direction, tabPanel) {
    var sidebarVisible = sidebar.is(':visible');
    var sidebarWidth = sidebar.width();
    var screenHeight = $(window).height();
    var screenWidth = $(window).width();
    var isMobile = screenWidth < 641;

    // Only switch when an index is passed - unless content turns up empty
    if (tabPanel != undefined) showSidebarTab(tabPanel);

    // If OPEN just fast switch content, not transition sidebar
    if (sidebarVisible && tabPanel != undefined) {
        var speed = isMobile ? 400 : 300;
        sidebarContent.css({ x: sidebarWidth }).transition({ x: 0, queue: false, complete:
            function(){
                sidebarContent.attr('style', '');
            } }, speed, 'snap');
        return;
    }

    // Start, fin positions
    var xStart = isMobile ? 0 : screenWidth;
    var yStart = isMobile ? screenHeight : 0;
    var xEnd = 0;
    var yEnd = 0;

    // Reverse for exit
    if (!direction) {
        xStart = 0;
        yStart = 0;
        xEnd = isMobile ? 0 : sidebarWidth;
        yEnd = isMobile ? screenHeight : 0;
    }

    sidebar.addClass('lv-show'); // show context menu

    // ENGAGE
    sidebar.css({ x: xStart, y: yStart }).transition({ x: xEnd, y: yEnd, queue: false, complete:
        function(){
            // sidebar.attr('style', ''); // for some reason this screwed up visibility on mobile only, on switch after transition
            // Remember to remove sidebar afterwards
            if (!direction) sidebar.removeClass('lv-show is-collapsed is-uncollapsed'); // just incase (is-collapsed etc..)
        } }, 400, 'ease'); // end complete
}

//-----------------------------------------------------------------
// Switch Between Sidebar Tabs
//-----------------------------------------------------------------

function showSidebarTab(targetIndex) {
    var target = sidebarTabs.eq(targetIndex);
    var sidebarCollapsed = sidebar.hasClass('is-collapsed');
    var sidebarUncollapsed = sidebar.hasClass('is-uncollapsed');
    var sizeWhereSidebarIsInFlow = $(window).width() >= 1025;

    // Will ALWAYS be the last one
    var isCollapseBtn = targetIndex == sidebarTabs.length-1;

    // Strip all tab LIs, apply 'active' to clicked LI
    sidebarTabs.removeClass('active').eq(targetIndex).addClass('active');

    // If 'collapse' is clicked (only possible when open)
    if (isCollapseBtn) {
        // user has engaged the sidebar. Remember explicit preferences override media queries
        sidebar.removeClass('is-uncollapsed').addClass('is-collapsed');
        // Clicking all other tabs - will ** UNCOLLAPSE ** sidebar
    } else {
        sidebarTabPanels.removeClass('active').eq(targetIndex).addClass('active');
        // 1. Sidebar is collapsed by user engagement directly OR
        // 2. If initalized by LARGE media query - in which case, there
        // are no explicit collapse/uncollapse classes applied.
        if (sidebarCollapsed || (!sidebarCollapsed && !sidebarUncollapsed)) {
            sidebar.removeClass('is-collapsed').addClass('is-uncollapsed');

            // sidebar.css({ x: sidebar.width()-100 }).transition({ x: 0, queue: false, complete:
            //     function(){
            //         sidebar.attr('style', '');
            //     } }, 300, 'snap');
        }
        // scroll to top on desktop, sidebar scrolls WITH page on medium-up
        if (sizeWhereSidebarIsInFlow) $.scrollTo(0, 300);
        //$(window).scrollTop(0); // alt method
    }
}

//-----------------------------------------------------------------
// @@@ Sidebar Tab Buttons Loop @@@
//-----------------------------------------------------------------

$(sidebarTabs).each(function(index){
    $(sidebarTabs[index]).click(function(event){
        event.preventDefault();
        this.index = index;
        showSidebarTab(this.index);
    });
});

//-----------------------------------------------------------------
// @@@ Touch Menu Loop @@@
//-----------------------------------------------------------------

var touchMenuBtns = $('#hints-btn, #favourites-btn, #history-btn');

touchMenuBtns.each(function(index){
    $(this).click(function(event){
        event.preventDefault();

        this.index = index;

        if ($(this).hasClass('active')){
            touchMenuBtns.removeClass('active');
            sidebarSlide(false);
        } else {
            touchMenuBtns.removeClass('active');
            $(this).addClass('active');
            sidebarSlide(true, this.index);
        }
    });
});
//==================================================
// Close Button
//==================================================

$('.js-close-btn').click(function(event){
    event.preventDefault();
    touchMenuBtns.removeClass('active');
    sidebarSlide(false);
});

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
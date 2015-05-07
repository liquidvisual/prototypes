/*
    MAIN SCRIPTS - Last updated: 19-11-14
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Search Filter (mini-toc)
//
// Note: There is an issue styling the filter TOC. In order for
// it to work, the markup needs to be altered slightly.
//
// Currently text resides outside of the anchor.
// Eg.
// <li class="hasChildren expanded">
//   <a id="productTypeLink" field="product.type" href="#" class="resultMetadocLink"> </a>
//   Text Here   <-- This is a problem
// </li>
//
// The code below is currently taking care of this by moving the text into the top adjacent anchor.
//
// Eg. <a id="productTypeLink" field="product.type" href="#" class="resultMetadocLink">Text Here</a>
//
// For More:
// http://stackoverflow.com/questions/3442394/jquery-using-text-to-retrieve-only-text-not-nested-in-child-tags
//-----------------------------------------------------------------

$("#searchsummary #metadocs > ul > li").each(function(){
    var textTitle = $(this).contents().filter(function(){return this.nodeType == 3})[0];
    $('a', $(this)).first().text(textTitle.nodeValue);
    textTitle.nodeValue = '';
});

//-----------------------------------------------------------------
// Filter TOC - appears in 'Filter Your Search' in the Context Menu
// THIS IS SIMPLY AD-HOC BEHAVIOR - replace with your own implementation.
//-----------------------------------------------------------------

$('#refinesearch .collapsed > .resultMetadocLink, #refinesearch .expanded > .resultMetadocLink').click(function(){

    var $this = $(this);

    // Default 'closed' state
    if ($this.parent().hasClass('collapsed')){

        $this.parent().removeClass('collapsed').addClass('expanded');
        $('ul', $this.parent()).first().show();

    } else if ($this.parent().hasClass('expanded')) {

        $this.parent().removeClass('expanded').addClass('collapsed');
        $('ul', $this.parent()).first().hide();
    }
});
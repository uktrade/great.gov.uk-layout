equalheight('.great-equal-hights-container');
setupLocaleSelector();
blurLinks();
resizeListner();
removeloading();


function blurLinks() {
    $('a').click(function(event) {
        $(this).blur();
    });
}

function setupLocaleSelector() {
    $('.great-locale-selctor__toggle').click(function(event) {
        event.preventDefault();
        slideToggle('.great-locale-selctor');
    });

    $('.great-locale-selctor').hide();
}

function removeloading() {
    $('.dit-loading').fadeOut(300);
}

function slideToggle(item) {
    // $(item).slideToggle("easeInOutSine");
    $(item).slideToggle('2000', 'easeInOutSine', function () {
        // Animation complete.
    });
};

function scrollingBG() {
    // Y axis scroll speed
    var velocity = 0.15;

    function update(){ 
    var pos = $(window).scrollTop(); 
    var $element = $(this);
    // subtract some from the height b/c of the padding
    var height = $element.height()+50;
        $('body').css('backgroundPosition', '0 ' + Math.round(-(height - pos) * velocity) + 'px'); 
    };

    $(window).bind('scroll', update);
    
};

function resizeListner() {
    $(window).resize(function() {
        equalheight('.great-equal-hights-container');
    });
}
//MixitUp


    

$('document').ready(function(){
    var mixer = mixitup('.grid-portfolio-container')
    animation: {
        effects: 'fade scale(0.1)'
    }
    
     $(function() {
        $.scrollify({
        section : ".scrollify",
        setHeights: false,
        scrollSpeed: 500,
        updateHash: false,
        });
    });
});

//smooth scroll

function openMenu(){
    document.getElementById('navbar').style.height="100%";
}

function closeMenu(){
    document.getElementById('navbar').style.height="0%";
}


//scroll top


$(function(){
    $('.menu-item a, .scroll-down a').on('click', function(){
        $('html,body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
});


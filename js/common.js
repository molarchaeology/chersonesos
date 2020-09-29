/*--------------------------------------------------------------------
    Common Javascript
--------------------------------------------------------------------*/



$(document).ready(function() {
    // Toggle Nav
    var menubtn        = $('.menubtn');
        menu             = $('nav.sidemenu');
        menuHeight        = menu.height();

    $(".colorbox").colorbox({iframe:true, width:"900px", height:"50%",  onClosed:function() { location.reload(true); }});
    $(".cboxlarge").colorbox({iframe:true, width:"587px", height:"80%", onClosed:function() { location.reload(true); }});
    $(".imagebox").colorbox({rel:'group', maxWidth:'95%', maxHeight:'95%'});

});

/*--- Mobile Nav ---*/
$(function() {
    var mobilenav    = $('.mobilenav');
        menu         = $('nav#navbar ul');
        menuHeight    = menu.height();

    $(window).resize(function(){
           var w = $(window).width();
           if(w > 320 && menu.is(':hidden')) {
               menu.removeAttr('style');
           }
    });
});
/*--- Sticky Nav ---*/
$(document).ready(function(){

    if ($("#navbar").is('*')) {
        var elem = $('#navbar');
        var offset = elem.offset();
        var leftValue = offset.left;
        var topValue =  offset.top + elem.height();

        $(window).scroll(function (event) {
            var y = $(this).scrollTop();
            if (y >= topValue) {  
                if ($('#navbar').hasClass('fixed')){     
                }else{
                    $('#navbar').addClass('fixed');
                    $('#navbar').css({
                        top: '-100px',
                    });
                    $('#navbar').animate({ 
                        top: '0',
                    }, 500, function() {    
                    });
                }
            } else {    
                if ($('#navbar').hasClass('fixed')){         
                    $('#navbar').removeClass('fixed');
                    /* $('#mainnav').fadeOut('fast', function(){ 
     $('#mainnav').fadeIn('slow');
       }); */
                }
            }
        });
    }

});

/*--- LP Additions ---*/
$(document).ready(function() {
    qst = parseQst(String(window.location))
    col_id =reqQst('col_id',qst);
    sf_id=reqQst('sf_id',qst);
    if (col_id && sf_id){
        col = $(".main_mcrview").children().eq(col_id);
        sf = col.children().eq(sf_id);
        if(typeof sf.offset() !== 'undefined'){
            targetOffset = $(sf.offset()).top - 70;
            $('html,body').animate({
                scrollTop: targetOffset
            });
        }
    }
    $("a.svtogl").click(function(e) {
        e.preventDefault();
        if (confirm("Unsaved data will be lost!")){
            window.location = $(this).attr('href');
        }
    });
    $("a.saveattr").change(function(e) {
        e.preventDefault();
        e.submit();
    });
    $("a.helptogl").click(function(e) {
        e.preventDefault();
        var help_id = $(this).attr('name');
        helptray = $('#'+help_id+'_help');
        console.log('#'+help_id+'_help');
        helptrayHeight    = helptray.height();
        console.log(helptray);
        helptray.toggle();
    });
});
$(document).ready(function(){
    $("[name='checkedby']").change(function(){
        $(this).parent().submit();
    });
});

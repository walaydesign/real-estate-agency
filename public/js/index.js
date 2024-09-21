// buton hover效果
$(".common-btn").mouseover(function(){
    $(this).removeClass("mouseleave").addClass("mouseover");
})
$(".common-btn").mouseleave(function(){
    $(this).addClass("mouseleave").removeClass("mouseover");
})

// gototop
$(".gototop").click(function(){
    $("html,body").animate({scrollTop:0},500);
})

// menu
$(".menu-icon").click(function(){
    $(this).toggleClass("active");
    $(".main-nav").fadeToggle(500)
})

// classify
$(".classify-box").click(function(){
    $(this).toggleClass("active");
    $(this).parents(".classify").children(".page-tab").fadeToggle(500);
})
$(document).click(function(event){
    var this_ele = $(".classify");
    if(!this_ele.is(event.target) && this_ele.has(event.target).length === 0) {
        if($(".classify-box").hasClass("active")){
            $(".page-tab").fadeOut(500);
        }
    }
})
$(".page-tab").children(".nav-item").click(function(){
    if($(window).width()<768){
        let active_classify = $(this).children("button").text();
        console.log(active_classify);
        $(".classify-active").text(active_classify);
        $(".page-tab").fadeOut(500);
    }
})
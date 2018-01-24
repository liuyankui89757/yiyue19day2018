/**
 * Created by Administrator on 18-1-19.
 */
var MT=10;
function go(){
    MT++;
    if(MT>90){
        MT=10
    }
    $("#sp1").css("margin-top",MT+"px")
}
function start(){
    setInterval(go,50)
}
start();


$("#nice-ios").hover(function(){
    $(this).css("backgroundPosition"," 0px -320px ")
},
function (){
    $(this).css("backgroundPosition"," -200px -320px ")
}
);
$("#nice-androad").hover(function (){
    $(this).css("backgroundPosition"," -199px -380px")

},
function (){
    $(this).css("backgroundPosition"," 0 -380px")
}
);

$("#nvVideo .naVideo-left").hover(function (){
    $(this).css( "backgroundPosition","0 -80px")
},function (){
    $(this).css( "backgroundPosition","0 0")
})
$("#nvVideo .naVideo-right").hover(function (){
    $(this).css( "backgroundPosition","0 -240px")
},function (){
    $(this).css( "backgroundPosition","0 -160px")
})

$("#nvVideo .times a").click(function (){
    $(".box").show();
    $(".box .video-box video")[0].play();
    $("#hid").show()
})
$(".box .video-close").click(function (){
    $(".box").hide();
    $(".box .video-box video")[0].currentTime=0;
    $(".box .video-box video")[0].pause();
    $("#hid").css("display","none");
})

var index=0;
//定时器函数
function changeTab(){
        index++;
    if (index>4){
        index=0
        $(".lun1").css("left","-603px");
        $(".lun1-UL ul li").eq(0).addClass("on")
    }
        var movePx=-603*index-603+"px";
        $(".lun1-UL ul li").removeClass("on");
        $(".lun1-UL ul li").eq(index).addClass("on")
        $(".lun1").animate({left:movePx},1000);




}
var mytime1=setInterval(changeTab,2000);

$(".content-top-left").hover(function (){
    clearInterval(mytime1)
},function (){
    clearInterval(mytime1)
     mytime1=setInterval(changeTab,2000);
})

$(".lun1-UL ul li").click(function (){
    index=$(this).index();
    var movePx=-603*index-603+"px";
    $(".lun1-UL ul li").removeClass("on");
    $(".lun1-UL ul li").eq(index).addClass("on")
    $(".lun1").animate({left:movePx},1000);

})








$(".content-top-right .nav-news li:not(.disss)").hover(function (){
    $(".content-top-right .nav-news li:not(.disss)").each(function (){
        $(this).find("a").removeClass("vew").addClass("va");
    });
    $(this).find("a").removeClass("va").addClass("vew");
    var index=$(this).index();
    var new_left=-565*index+"px";
        $(".swiper-wrapper .swiper-content").stop().animate({
            left:new_left
        },200)

})


/*游戏攻略*/



$(".game .listTab .glTab").mouseover(function (){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".blockLine .tmp_del1").css("display","block");
    $(".blockLine .tmp_del2").css("display","none");

})



$(".game .listTab .zlTab").mouseover(function (){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".blockLine .tmp_del1").css("display","none");
    $(".blockLine .tmp_del2").css("display","block")

})




/*最下面的图片*/
$("#content5 a:not(.more)").hover(function(){
    $(this).find(".fade").stop().animate({opacity:1},"slow")
},function(){
    $(this).find(".fade").stop().animate({opacity:0},"slow")
})

$("#content5 a.more").hover(function (){
    $(this).stop().animate({
        width: "350px",
        height: "292px",
        left: "575px",
        top: "-25px"
    },"slow");
   $(".secher").css({
        color: "#e0cd9f",
        border: "2px solid #a67342",
        background:" #a67342"
   })


},function (){
    $(".secher").css({
        color: "#272624",
    border: "2px solid #272624",
        background:" none"
    })

    $(this).stop().animate({
        width: "335px",
        height: "279px",
        left: "582px",
        top: "-18px",
        background:"url(../imgs/ziliao/more_hov_55d201c.png)"
    },"slow");
    $(this).find("secher").stop().animate({
        color:"#272624" ,
        background:"none"
    },"slow")
})


$(".points span").click(function (){
    $(".points span").removeClass("pu");
    $(this).addClass("pu");
    var index=$(this).index();
    var newLeft=-1208*index+"px";
    $(".tmp_del1").animate({
        left:newLeft
    },1000);

    $(".tmp_del2").animate({
        left:newLeft
    },1000)

})

$(".block").hover(function (){
    $(this).stop().animate({
       top: "-20px"
    },"fast")
},function (){
    $(this).stop().animate({
        top: "0px"
    },"fast")
})



$(".circle-jw").hover(function (){
    $(".circle").find(".c-head").css("display","none");

    $(".circle").css({
        paddingLeft: "25px",
        color: "#7a868c"
    })
    $(this).css({
        paddingLeft: "50px",
        color: "#9b8c75"
    })
    $(this).find(".c-head").css("display","block");
    $(".role").hide()
    $(".role").eq(0).show();
})

$(".circle-ps").hover(function (){
    $(".circle").find(".c-head").hide();
    $(this).find(".c-head").css("display","block");
    $(".circle").css({
        paddingLeft: "25px",
        color: "#7a868c"
    })
    $(this).css({
        paddingLeft: "50px",
        color: "#9b8c75"
    })
    $(".role").hide()
    $(".role").eq(1).show();
})

$(".circle-sj").hover(function (){
    $(".circle").find(".c-head").hide();
    $(this).find(".c-head").css("display","block");
    $(".circle").css({
        paddingLeft: "25px",
        color: "#7a868c"
    })
    $(this).css({
        paddingLeft: "50px",
        color: "#9b8c75"
    })
    $(".role").hide();
    $(".role").eq(2).show();


})

$(".circle-zb").hover(function (){
    $(".circle").find(".c-head").hide();
    $(this).find(".c-head").css("display","block");
    $(".circle").css({
        paddingLeft: "25px",
        color: "#7a868c"
    })
    $(this).css({
        paddingLeft: "50px",
        color: "#9b8c75"
    })
    $(".role").hide()
    $(".role").eq(3).show();
},function (){

})






$(".ji").hover(function (){
    $(".ji").find(".tro-block").hide()
    $(this).find(".tro-block").show();
    $(this).find(".tro-block").animate({
        top:"83px"
    },500);

},function (){
    $(".ji").find(".tro-block").hide();
    $(this).find(".tro-block").animate({
        top:"0px"
    },10)
})















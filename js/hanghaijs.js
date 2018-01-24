/**
 * Created by Administrator on 18-1-24.
 */



$("#share_desc  a").click(function (){
    $(".box").css("display","block");
    $(".box .video-box video")[0].play();
    $("#hid").css("display","block")
    $("#hid").animate({
        opacity:".8"
    },"slow")
})


$(".box .video-close").click(function (){
    $(".box").hide();
    $(".box .video-box video")[0].currentTime=0;
    $(".box .video-box video")[0].pause();
    $("#hid").animate({
        opacity:"0"
    },"slow")
    $("#hid").css("display","none")
})



$(".cont-bot span").hover(function (){
    $(".cont-bot span").stop().animate({
        top:"0px"
    },"fast");
    $(this).stop().animate({
        top:"-20px"
    },"fast")
},function (){
    $(this).stop().animate({
        top:"0px"
    },"fast")
})



$(".cont2-bot .td-item").click(function (){
    $(".cont2-bot .td-item").find(".small").show()
    $(this).find(".small").hide();

    $(".cont2-bot .td-item").find(".big").hide()
    $(this).find(".big" ).show();




    $(".cont2-bot .td-item").css({
        width:"143px"
    });
    $(this).stop().animate({
        width:"740px"
    },"fast")

    $(this).find(".big").stop().animate({
            width:"740px"
    },"fast")
})






$(".liwu .close").click(function (){
    $(".liwu").hide();
    $("#hid").animate({
        opacity:"0"
    },"slow")
    $("#hid").css("display","none")
})


$("#content1 .cont .cont-bot span").click(function (){
    $(".liwu").show()
    $("#hid").css("display","block")
    $("#hid").animate({
        opacity:".8"
    },"slow")
})


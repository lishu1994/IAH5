$(function () {//when DOM is loaded,this part will be loaded.
    //fastClick in Mobile
    FastClick.attach(document.body);

    //adjust rem & client
    // var main = document.getElementById('main');
    // var winW = window.innerWidth;
    // var winH = window.innerHeight;
    // var desW = 750;
    // var desH = 1207;
    // if(winW/winH <=desW/desH){
    //     main.style.webkitTransform = "scale("+winH/desH+")";
    // }else{
    //     main.style.webkitTransform = "scale("+winW/desW+")"
    // }

    (function (desW) {
        var winW = document.documentElement.clientWidth;
        document.documentElement.style.fontSize = winW/desW * 100 +'px';
    })(750);
    //create new Swiper
    var swp = new Swiper('.swiper-container',{
        effect:'fade', 
        //onlyExternal:true
    });
    //logic part
    




});
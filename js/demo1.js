// code js here
// confirm("Bạn chắc chắn chưa?")
// prompt("Nhap tên người yêu của bạn");
function demoXXX(){

}

setTimeout(function(){
    // alert("Hello world!");
},1000);

// alert("XYZ");
var min =10;
var sec = 0;
var s = setInterval(function(){
    // console.log(min+":"+sec);
    var ssxx = document.getElementById("ss");
    ssxx.innerText = sec;
    var mmxx = document.getElementById("mm");
    mmxx.innerText = min;
    // mmxx.innerHTML = "<i>"+min+"</i>";
    var colors = ["red","deeppink","orange","green"];
    ssxx.style.color = colors[sec%4];
    sec--;
    if(sec<0){
        sec = 59;
        min--;
    }
    if(min <0){
        clearInterval(s);
    }
},1000);

var dg = 0;
var fanVN;
var speed = 0;
function fan(){
    if(fanVN != null){
        return;
    }
    fanVN = setInterval(function(){
        var bar = document.getElementById("bar");
        bar.style.transform = `rotate(${dg}deg)`;
        dg+=speed;
        if(dg==360)
            dg=0;
    },1);
}
function lv1(){
    speed = 5;
    fan();
}
function lv2(){
    speed = 10;
    fan();
}
function lv3(){
    speed= 20;
    fan();
}
function turnOff(){
    if(fanVN != null)
        clearInterval(fanVN);
        fanVN = null;
        dg= 0;
        var bar = document.getElementById("bar");
        bar.style.transform = `rotate(${dg}deg)`;
}

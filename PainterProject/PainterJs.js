var color="#rgb(255,255,255)";
var draw_now=false;
var [mainX,mainY]=[0,0];
var promises=[];

//setInterval(executePromises,5);

var wait_for_load = new Promise(function (resolve,reject) {
    return window.onload=function () {
        alert("done loading!");
        loadColorPalette();
        resolve();
    }
}).then(function (resolve,reject) {

    let rect=canvas.getBoundingClientRect();
    let cvs = document.getElementById("canvas");
    let ctx=cvs.getContext("2d");
    cvs.addEventListener("mouseup",function (evt) {
      draw_now=false;
    });
    cvs.addEventListener("mouseout",function (evt) {
        draw_now=false;
    });
    cvs.addEventListener("mousemove",function (evt) {
        draw(getMousePos(rect,evt),ctx);
    });
    cvs.addEventListener("mousedown",function (evt) {
        draw_now=true;
    });

});

function loadColorPalette(){
    let table = document.getElementById("color_palette");
    for(let i=0;i<table.rows.length;i++){
        for(let j=0;j<table.rows[i].cells.length;j++){
            let col = table.rows[i].cells[j];
            let current_color = window.getComputedStyle(col).backgroundColor;
            document.getElementById(col.id).addEventListener("click",function onColorClick(){changeColor(current_color)});
        }
    }
}

function executePromises() {
    Promise.all(promises);
}

function draw([x,y],ctx){
    ctx.fillStyle = color;
    if (draw_now===true) {
        ctx.fillRect(x, y, 3, 3);
    }
}
function changeColor(x){
    color=x;
}


function getMousePos(rect,evt)
{
    return [evt.clientX-rect.left,evt.clientY-rect.top];
}

/*function drawColor() {
    let canvas = document.getElementById("canvas");
    let draw_obj = canvas.getContext("2d");
    canvas.addEventListener("click", function () {
        alert(draw_obj.coords);
    });
}*/
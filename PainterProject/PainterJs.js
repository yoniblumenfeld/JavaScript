var color="#rgb(255,255,255)";

var wait_for_load = new Promise(function (resolve,reject) {
    return window.onload=function () {
        alert("done loading!");
        loadColorPalette();
        resolve();
    }
}).then(function (resolve,reject) {
    let cvs = document.getElementById("canvas");
    alert(cvs.id);
    cvs.addEventListener("mousedown",function (evt) {
        draw(getMousePos(cvs,evt),cvs);
    })
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


function draw(pos,canvas){
    ctx = canvas.getContext("2d");
    ctx.fillStyle=color;
    ctx.fillRect(pos.x,pos.y,2,2);
}
function changeColor(x){
    color=x;
    alert(x);
}


function getMousePos(canvas,evt)
{
    var rect=canvas.getBoundingClientRect();
    return {x:evt.clientX-rect.left,y:evt.clientY-rect.top};
}
/*function drawColor() {
    let canvas = document.getElementById("canvas");
    let draw_obj = canvas.getContext("2d");
    canvas.addEventListener("click", function () {
        alert(draw_obj.coords);
    });
}*/
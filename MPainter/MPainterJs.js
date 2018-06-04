var CURRENT_COLOR = "#rgb(255,255,255)";
var painters_count=0;
var draw_now=false;

window.onload = function waitLoadingWindow() {
    loadColorPalette();
    createCanvas(["300px","300px"]);
};

function createCanvas([width,height]) {
    let new_canvas = document.createElement("div");
    new_canvas.id = `painterCanvas${painters_count}`;
    new_canvas.style.width=`${width}`;
    new_canvas.style.height=`${height}`;
    new_canvas.style.border="solid";
    new_canvas.style.alignContent="center";
    new_canvas.addEventListener("mousedown",function () {
       draw_now=true;
    });
    new_canvas.addEventListener("mouseup",function () {
       draw_now=false;
    });
    painters_count++;

    for (let i = 0; i < (parseInt(height)*parseInt(width))/9; i++) {
            let new_div = document.createElement("div");
            new_div.className = "painterDivs";
            new_div.id = `div${i}`;
            new_div.ondragstart=function(){return false;};
            new_div.ondrop=function(){return false;};
            new_div.addEventListener("mouseover",function () {
                if(draw_now===true)
                    new_div.style.backgroundColor=CURRENT_COLOR;
            });
            new_canvas.appendChild(new_div);
    }
    document.body.appendChild(new_canvas);
}


function loadColorPalette(){
    let table = document.getElementById("color_table");
    for(let i=0;i<table.rows.length;i++){
        for(let j=0;j<table.rows[i].cells.length;j++){
            let col = table.rows[i].cells[j];
            let current_color = window.getComputedStyle(col).backgroundColor;
            document.getElementById(col.id).addEventListener("click",function onColorClick(){CURRENT_COLOR=current_color});
        }
    }
}

var canvas= document.getElementById("grafico");
var lienzo = canvas.getContext("2d");
const width= window.innerWidth;
const height= window.innerHeight;
canvas.width= width;
canvas.height= height;
var R = 200;
var X = 300;
var Y = 300;
var L = 6;
var j = 0;
var color = 238;
var giro = 0;

var rad =(Math.PI / 180) *60;

lienzo.translate(X,Y);
while(j < 20){
    lienzo.strokeStyle ="RGB ("+color+", 130, 238)";
    lienzo.beginPath();
    lienzo.rotate(giro);
    for(var i=0; i<= L; i++){
        x=R* Math.cos(rad+i);
        y=R* Math.sin(rad+i);
        lienzo.lineTo(x,y);
    }
    lienzo.stroke();
    lienzo.closePath();
    j++;
    color = color-20;
    R=R-6;
    if(j > 1){
        R=R -6.5;
    }
    giro = giro +1;
}
document.addEventListener('DOMContentLoaded', init);

function init(){
    
    //Canvas
    const canvas=document.getElementById("dibujo");
    const lienzo= canvas.getContext("2d");
    const rect=canvas.getBoundingClientRect();
    var x=0, y=0, dibujando=false;
    const width= window.innerWidth;
    const height= window.innerHeight;
    canvas.width= width;
    canvas.height= height;


    canvas.addEventListener('mousedown', (e) =>{
        x= e.clientX - rect.left; 
        y= e.clientY - rect.top;
        dibujando= true;
    });
    
    canvas.addEventListener('mousemove', (e) =>{
        if(dibujando===true){
            dibujar(x, y, e.clientX - rect.left , e.clientY - rect.top);
            x= e.clientX - rect.left;
            y= e.clientY - rect.top;
        }    
    });

    canvas.addEventListener('mouseup', (e) =>{
        if(dibujando===true){
            dibujar(x, y, e.clientX - rect.left , e.clientY - rect.top);
            x= 0; 
            y= 0;
            dibujando= false;
        }
    });

    function dibujar( x1, y1, x2, y2){
        lienzo.beginPath();
        lienzo.lineWidth =2;
        lienzo.moveTo(x1, y1);
        lienzo.lineTo(x2, y2);
        lienzo.stroke();
        lienzo.closePath();
    }
}



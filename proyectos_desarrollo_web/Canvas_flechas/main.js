document.addEventListener('DOMContentLoaded', init);

function init(){
    const canvas= document.getElementById("tablero");
    const lienzo = canvas.getContext("2d");

    const range = document.getElementById('rango');
    const valor = document.getElementById('value');
    const iris = document.getElementById('random');
    const rgb = document.getElementById('color');

    const width= window.innerWidth;
    const height= window.innerHeight;
    canvas.width= width;
    canvas.height= (height / 1.25);
    var X=(canvas.width/2), Y= (canvas.height /2);
    var color, grosor=1, trazo=1;

    let teclas={
        up: 38,
        down: 40,
        left: 37,
        right: 39,
    };
    
    valor.innerHTML=range.value;

    range.oninput = function(){
        grosor=this.value;
        valor.innerHTML=this.value;
    }

    rgb.oninput = function(){
        color=this.value;
    }

    iris.oninput = function(){
        trazo=this.value;
        console.log(trazo); 
    }

    document.addEventListener('keyup', dibujoTeclado);

    colocarPunto();

    function dibujoTeclado(evento){
        var mov= 10;
        switch(evento.keyCode){
            case teclas.up:
                if(trazo==1){
                    dibujarLinea(color, X, Y, X, Y - mov);
                    Y = Y - mov;
                }
                if(trazo==2){
                    dibujarLinea(colorRGB(), X, Y, X, Y - mov);
                    Y = Y - mov;
                }
                console.log("moviendo arriba");
            break;
            case teclas.down:
                if(trazo==1){
                    dibujarLinea(color, X, Y, X, Y + mov);
                    Y = Y + mov;
                }
                if(trazo==2){
                    dibujarLinea(colorRGB(), X, Y, X, Y + mov);
                    Y = Y + mov;
                }
                console.log("moviendo abajo");
            break;
            case teclas.left:
                if(trazo==1){
                    dibujarLinea(color, X, Y, X - mov, Y);
                    X = X - mov;
                }
                if(trazo==2){
                    dibujarLinea(colorRGB(), X, Y, X - mov, Y);
                    X = X - mov;
                }
                console.log("moviendo izquierda");
            break;
            case teclas.right:
                if(trazo==1){
                    dibujarLinea(color, X, Y, X + mov, Y);
                    X= X + mov;
                }
                if(trazo==2){
                    dibujarLinea(colorRGB(), X, Y, X + mov, Y);
                    X= X + mov;
                }
                console.log("moviendo derecha");
            break;
            default:
                console.log("No es una tecla direccional");
            break;
        }
    }

    function dibujarLinea (col, x1, y1, x2, y2){
        lienzo.beginPath(); // Iniciar trazado
        lienzo.strokeStyle = col; // Propiedad => Color de la línea
        lienzo.lineWidth= grosor;
        lienzo.moveTo(x1,y1); // Inicio del punto de trazado
        lienzo.lineTo(x2,y2); // Final del punto de trazado
        lienzo.stroke(); // Dibuja la línea
        lienzo.closePath(); // Cerrar el trazo, levantar el lápiz
    }

    function colocarPunto(){
        var Xi=(canvas.width/2), Yi= (canvas.height /2);
        var Xf=(canvas.width/2), Yf= (canvas.height /2);
        dibujarLinea(color, parseInt(Xi-1), parseInt(Yi-1), parseInt(Xf+1), parseInt(Yf+1));
    }

    // funcion #2 en invocarse
    function colorRGB(){
        var coolor = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
        return "rgb" + coolor;
    }

    // funcion #3 en invocarse
    function generarNumero(numero){
        return (Math.random()*numero).toFixed(0);
    }

}
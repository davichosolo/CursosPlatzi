document.addEventListener('DOMContentLoaded', init);

function init(){
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
    var pri = 283;
    var sec = 130;
    var tri = 238;
    var color = "("+pri+"," +sec+"," +tri+")";
    var giro = 0;

    var rad =(Math.PI / 180) *60;

    lienzo.translate(X,Y);
    while(j < 20){
        lienzo.strokeStyle =color;
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
 //       color = color-20;
        R=R-6;
        if(j > 1){
            R=R -6.5;
        }
        giro = giro +1;
    }
    
    /*// funcion #2 en invocarse
    function obtenerColorAleatorio(){
        hexadecimalArray = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
        colorAleatorio="#"; // Inicia el primer valor del color hexadecimal

        // Generar un color aletario para cada línea
        for (i=0;i<6;i++){
            numero = numeroAletario(0, hexadecimalArray.length); // define un número aleatorio entre 0 el tamaño del array de los colores hexadecimales
            colorAleatorio += hexadecimalArray[numero]; // Concatena el string del color
        }
        return colorAleatorio;
    }

    // funcion #3 en invocarse
    function numeroAletario(inferior, superior){
        numPosibilidades = superior-inferior;
        numero = Math.floor(Math.random()*numPosibilidades);
        return parseInt(inferior) + numero;
    }
*/

}




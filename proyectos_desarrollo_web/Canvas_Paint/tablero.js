document.addEventListener('DOMContentLoaded', init);

function init(){
    const canvas= document.getElementById("tablero");
    const lienzo = canvas.getContext("2d");
    const rect= canvas.getBoundingClientRect();

    const range = document.getElementById('rango');
    const valor = document.getElementById('value');

    const width= window.innerWidth;
    const height= window.innerHeight;
    canvas.width= width;
    canvas.height= (height /1.25);
    
    var grosor=1;
    var t=1;

    let mouse = {
        click: false,
        move: false,
        posi: {x :0, y :0}
    };
  
    valor.innerHTML=range.value;

    range.oninput = function(){
        grosor=this.value;
        valor.innerHTML=this.value;
    }
  
    canvas.addEventListener('mousedown', (e) => {
        mouse.posi.x=e.clientX - rect.left;
        mouse.posi.y=e.clientY - rect.top;
        mouse.click= true;
    });

    canvas.addEventListener('mousemove', (e) => {
        mouse.move= true;
        dibujar(obtenerColorAleatorio(),mouse.posi.x, mouse.posi.y, e.clientX - rect.left, e.clientY - rect.top);
        mouse.posi.x=e.clientX - rect.left;
        mouse.posi.y=e.clientY - rect.top;
        mouse.move= false;
    });

    canvas.addEventListener('mouseup', (e) => {
        mouse.posi.x=0;
        mouse.posi.y=0;
        mouse.click=false;
    });


    function dibujar(col, x1, y1, x2, y2){
        lienzo.beginPath(); // Iniciar trazado
        lienzo.strokeStyle = col; // Propiedad => Color de la línea
        lienzo.lineWidth= grosor;
        lienzo.moveTo(x1,y1); // Inicio del punto de trazado
        lienzo.lineTo(x2,y2); // Final del punto de trazado
        lienzo.stroke(); // Dibuja la línea
        lienzo.closePath(); // Cerrar el trazo, levantar el lápiz

    }

    // funcion #2 en invocarse
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
}


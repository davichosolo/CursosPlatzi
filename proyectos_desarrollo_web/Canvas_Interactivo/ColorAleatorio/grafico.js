//alert("Sí funciona");

const canvas = document.getElementById("dibujo"); // Obtener valor desde el html
const lienzo = canvas.getContext("2d"); // Parte del lienzo

const caja = document.getElementById("tamaño");
const graf = document.getElementById("lineas");
const boton = document.getElementById("accion");
const rgb = document.getElementById("color");

boton.addEventListener('click', DibujoClick);

function DibujoClick(){

	var dimension = parseInt(caja.value);
	var lineas= parseInt(graf.value);
	var color= rgb.value;
	canvas.width = dimension; 
	canvas.height = dimension;
	console.log(dimension);
	console.log(color);
	var l = 0;
	var esp = dimension / lineas;
	var yi,xf;

	if(color!= "#000000"){
		for( l=0; l< lineas; l++){
			yi = esp * l;
			xf = esp * (l+1);
			dibujarLinea(color, 0, yi, xf,dimension);
			dibujarLinea(color, dimension, yi, xf,0);
		}
		// Borde inferior izquierdoobtenerColorAleatorio()
		dibujarLinea(color, 1,1,1,dimension-1);
		dibujarLinea(color, 1,dimension-1,dimension-1,dimension-1);
		
		// Borde superior derecho
		dibujarLinea(color, dimension-1,dimension-1,dimension-1,1);
		dibujarLinea(color, dimension-1,1,1,1);

	} else{
		for( l=0; l< lineas; l++){
			yi = esp * l;
			xf = esp * (l+1);
			dibujarLinea(colorRGB(), 0, yi, xf,dimension);
			dibujarLinea(colorRGB(), dimension, yi, xf,0);
		}
		// Borde inferior izquierdoobtenerColorAleatorio()
		dibujarLinea(colorRGB(), 1,1,1,dimension-1);
		dibujarLinea(colorRGB(), 1,dimension-1,dimension-1,dimension-1);
		
		// Borde superior derecho
		dibujarLinea(colorRGB(), dimension-1,dimension-1,dimension-1,1);
		dibujarLinea(colorRGB(), dimension-1,1,1,1);
	}
}


// funcion #1 en invocarse
function dibujarLinea (col, x1, y1, x2, y2){
	lienzo.beginPath(); // Iniciar trazado
	lienzo.strokeStyle = col; // Propiedad => Color de la línea
	lienzo.moveTo(x1,y1); // Inicio del punto de trazado
	lienzo.lineTo(x2,y2); // Final del punto de trazado
	lienzo.stroke(); // Dibuja la línea
	lienzo.closePath(); // Cerrar el trazo, levantar el lápiz
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


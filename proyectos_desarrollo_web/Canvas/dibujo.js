//alert("Sí funciona");

var d = document.getElementById("dibujo"); // Obtener valor desde el html
var lienzo = d.getContext("2d"); // Parte del lienzo
var l = 0;
var l2 = 0;
var lineas=50;
var yi,xf;

//dibujarLinea("red", 0,0,10,300);
console.log(lienzo);

while(l<lineas){
	yi = 10 * l;
	xf = 10 * (l+1);
	dibujarLinea(obtenerColorAleatorio(), 0, yi, xf,500);
	dibujarLinea(obtenerColorAleatorio(), 500, yi, xf,0);
	//dibujarLinea(color3, 500, yi, xf,0);
	console.log("Linea es: "+l);
	l++;
}
// Borde inferior izquierdoobtenerColorAleatorio()
dibujarLinea(obtenerColorAleatorio(), 1,1,1,499);
dibujarLinea(obtenerColorAleatorio(), 1,499,499,499);

// Borde superior derecho
dibujarLinea(obtenerColorAleatorio(), 499,499,499,1);
dibujarLinea(obtenerColorAleatorio(), 499,1,1,1);

function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal){
	lienzo.beginPath(); // Iniciar trazado
	lienzo.strokeStyle = color; // Propiedad => Color de la línea
	lienzo.moveTo(xinicial,yinicial); // Inicio del punto de trazado
	lienzo.lineTo(xfinal,yfinal); // Final del punto de trazado
	lienzo.stroke(); // Dibuja la línea
	lienzo.closePath(); // Cerrar el trazo, levantar el lápiz
}

function numeroAletario(inferior, superior){
	numPosibilidades = superior-inferior;
	numero = Math.floor(Math.random()*numPosibilidades);
	return parseInt(inferior) + numero;
}

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

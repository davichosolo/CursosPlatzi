var usuario= prompt("¿Cual es tu peso?");
var planeta= prompt("Elige un planeta. \n 1 para Marte y 2 para Jupiter");
var peso= parseFloat(usuario);
var g_tierra= 9.8;
var g_marte= 3.7;
var g_jupiter= 24.8;
var peso_final;
document.write("<br>");
if(planeta==1){
    peso_final= peso * g_marte / g_tierra;
    peso_final= parseFloat(peso_final.toFixed(2));
    planeta= "Marte"
    document.write("Su peso en la tierra es: <strong>" + peso + " Kilos </strong> <br>");
    document.write("Por ende su peso en " + planeta + " es: <strong>" + peso_final + " Kilos </strong> <br>");
    }
else if(planeta==2){
    peso_final= peso * g_jupiter / g_tierra;
    peso_final= parseFloat(peso_final.toFixed(2));
    planeta= "Jupiter"
    document.write("Su peso en la tierra es: <strong>" + peso + " Kilos </strong> <br>");
    document.write("Por ende su peso en " + planeta + " es: <strong>" + peso_final + " Kilos </strong> <br>");
}
else{
    document.write("Los datos ingresados no son correctos. <br> Pruebe intentando de nuevo");
}
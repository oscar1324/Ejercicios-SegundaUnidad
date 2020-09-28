function segundo(){
    alert("¡Hola Mundo 2!");
}

function proooo(){
    
}

function pedir(){
    var pedido = prompt("escoje el numero");
    switch (pedido) {
        case 'uno':
            alert("has escodigo el 1");
            break;
    
        case 'dos':
            alert("has escodigo el 1");
           break;
    
         case 'tres':
            alert("has escodigo el 1");
             break;
    
        case 'cuatro':
            alert("has escodigo el 1");
            break;
    
        default:
            alert("adios");
            break;
    }
    
}


function mostrarVariables(){
    variable1 = 10;
    alert('variable 1: ' + variable1);

    variable2 = null;
    alert('variable 2: ' + variable2);

    variable1 = 34;
    alert('variable 1: ' + variable1);

    variable3 = 15.9;
    alert('variable 3: ' + variable3);

    variable3= "ahora soy un texto";
    alert('variable 3: ' + variable3);

    alert(variable3*35);
}

function comprobarOperadores(){
    var variable1 = 4;
    var variable2 = 7;

    alert(' variable1 == variable2: ' + variable1 == variable2);
    alert(' variable1 < variable2:  ' + variable1 < variable2);
    alert(' variable1 > variable2:  ' + variable1 > variable2);
    alert(' variable1 != variable2: ' + variable1 != variable2);
}

function ejercicio5(){
    var dia = prompt("¿Qué día es?");
    var mes = prompt("¿Qué mes es?");
    var año = prompt("¿Qué año es?");
    alert("hoy es el día " + dia + " del mes de " + mes + ", del año " + año);

}

function ejercicio5dos(){
    var numero1 = prompt("introduce el primer número: ");
    var numero2 = prompt("introduce el segundo número: ");
    
    var resultado = numero1*numero2;
    alert("la multiplicación de estos es: " + resultado);

    var division = numero1/numero2;
    alert("la división es: " + division);

    var resta = numero1 - numero2;
    alert("la resta es: " + resta);


}

function seis(){
    var array = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto"];

    for(i=0;i< array.length;i++){
        alert("mes: " + i);
    }

}

function seisdos(){
    var edad = prompt("introduce edad");

    if(edad < 7){
        alert("patrulla canina");
    }else if(7 < edad > 13){
        alert("pokemon");
    }else if(14 < edad < 18){
        alert("doraimon");
    }else{
        alert("dragon ball");
    }
}

function nueve(){
    var inumero = 35;
    if (iNumero%2!=0){
        return true;
    }else{
        return false;
    }
   


}

// esta se crea por qué sera llamada por la otra función, que a su vez
// cuando haya un error lo muestre por pantalla
function principal(){
    try {
        diez();
    } catch (error) {
        console.log("error");
    }
}
// creación de la primera variable. Como la segunda vamos a estar continuamente pidiendola para
// sumarla haceos uso de do - while lanzando un error por si no es un valor numerico

function diez(){
    var num1 = Number(prompt("Introduce el numero: " ));
    var num2;
    var r ;

    do{
       num2 = Number(prompt("introduzca el segundo numero: " ));
       if(isNaN(num2)){
            throw new Error("El valor introducido no es numerico");
       }
       r = num1 + num2;
       console.log("el resultado de la suma es: " + r);
    }while(true);
}

// acabarlo mas tarde


function pagar(){

        var precioArticulo= parseInt(prompt("introduce el precio: "));
        var tipoIva = prompt("Selecciona el tipo, G,R,S: ");
        if(typeof precioArticulo == 'number' && tipoIva == 'string'){
            // la función doceIva recibe como parametros de entrada el precio
            // además de el tipo de iva para que se realice la función
            alert("El precio final es: " + doceIVA(precioArticulo,tipoIva))
        } else{
            alert("Error al introducirse los datos");
        }
    
   
    
}

function doceIVA(precioArticulo){
    var resultado = 0;
    console.log("precio: " + precioArticulo);
    console.log("Tipo de IVA: " + tipoIva);

    switch (tipoIva) {
        case 'G': resultado = precioArticulo*1.21;
            
            break;
        case 'R': resultado = precioArticulo*1.10;
            
             break;
        case 'S': resultado = precioArticulo* 1.04;
            
             break;
                
        default:
            alert("Error al introducir los datos.")
            break;
    }
    console.log("final: " + resultado);
    return resultado;
}

function trece(){
    var num1 = prompt("introduce numero 1: " );
    var num2 = prompt("introduce numero 2: ");
    var re = num1 * num2;
    console.log("resultado: " + re )
}

function treceb(){
    var usuario = prompt("introduce usuario: " );
    

    do{
        var contraseña = prompt("introduce contraseña: " );
        if(contraseña != 'abc'){
            alert("siga intentandolo")
        }else{
            alert("correcto");
        }
        alert("Usuario: " + usuario + "\nContraseña: " + contrasena);
        
    }while(true)
}

function trecec(){
    var numFilas = Number(prompt("introduce numero 1: " ));
    var numColumnas = Number(prompt("introduce numero 2: "));
    var letra = prompt("introduce letra: ");
    var rrrr = " ";

    while(numeroFilas > 0){
        let columnas = Ncolumnas;
        while(columnas > 0){
            rrrr = rrrr + letra;
            columna--;
        }
        rrrr = rrrr + "\n";
        numeroFilas--;
    }
    alert(rrrr);
}

// ejercicio 14

function MiError(error){
    /**
     * En JavaScript una función es un objeto, 
     * y como tal tiene propiedades a las que se puede asignar valor.
     */
    this.message = "Error: " + error;
}
MiError.prototype = Object.create(Error.prototype);
MiError.prototype.name = "MiError";
    
function principal(){
    var deporte1 = prompt("Introduce un deporte: ");
    var deporte2 = prompt("Introduce otro deporte: ");
    var deporte3 = prompt("Introduce un tercer deporte: ");

    try {
        concatenarDeportes(deporte1, deporte2, deporte3);        
    } catch (error) {
        console.error(error.message);
    } finally {
        alert("FIN");
    }
}

function concatenarDeportes(){
    var resultado = "";
    for (var i = 0; i<arguments.length; i++) {
        if(arguments[i] == ""){
            throw new MiError("No se ha introducido valor para el deporte número " + (i+1));
        }
        if(arguments[i] == "fútbol" || arguments[i] == "futbol") {
            throw new Error("El deporte número " + (i+1) +" es Fútbol");
        }
        if(resultado == ""){
            resultado = arguments[i];
        } else {
            resultado = resultado + ", " + arguments[i];
        }
    }
    alert(resultado);
}



function segundo(){
    alert("¡Hola Mundo 2!");
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


function aaaa(){
    var precioArticulo= prompt("introduce el precio: ");
}
function doce(){
    function docePrecio(){
        var precioArticulo= prompt("introduce el precio: ");
    }
    function doceIVA(precioArticulo){
        var letra = prompt("Selecciona el tipo, G,R,S: ");
        var a,b,c;
    
        if(letra == 'G'){
            alert("I.V.A de tipo general: " +   precioArticulo* 21);
        }else if(letra == 'R'){
            alert("I.V.A de tipo reducido: " + precioArticulo* 10);
        } else if(letra == 'S'){
            alert("I.V.A de tipo superreducido: " + precioArticulo* 4);
        } else{
            alert("Error al introducir la letra")
        }
    }
    
}




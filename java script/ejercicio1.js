function segundo(){
    alert("¡Hola Mundo 2!");
}

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
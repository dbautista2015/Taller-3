//Punto 1
parar:
while (true) {
    var num1 = parseInt(prompt("Ingrese el número 1"));
    var num2 = parseInt(prompt("Ingrese el número 2"));
    if (num1!==num2) {
        console.log(comparacion(num1, num2));
        break parar;
    }
}
function comparacion(num1, num2) {
    if(num1>num2){
        return `El número 1: ${num1} es mayor que el número 2: ${num2}`;
    }else{
        return `El número 2: ${num2} es mayor que el número 1: ${num1}`;
    }
}
let numero = parseInt(prompt("Ingresar el numero "));
let divisor = 1;
let suma = 0;

do{
    if (numero%divisor==0){
        suma += divisor;
    }
    divisor++;

}while(divisor<numero)
if(suma == numero){
    alert(`El número ${numero} es perfecto`);
}else{
    alert(`El número ${numero} no es perfecto`);
}

let numeros_pares = [];
let numeros_impares = [];
let suma_par=0;
let producto_impar=1;
let continuar=true;
parar:
while(continuar){
    let n = parseInt(prompt("Ingresa un número"));
    if(n%2==0){
        numeros_pares.push(n);
        //console.log(numeros_pares);
    }else{
        numeros_impares.push(n);
        //console.log(numeros_impares);
    }
    let opciones = parseInt(prompt("Desea ingresar otro número. \n 1. Si \n 2. No"));
    switch (opciones) {
        case 1:
            continue parar;
        case 2:
            console.log(`Cantidad de números ingresados pares ${numeros_pares.length} y números impares ${numeros_pares.length}`);
            continuar=false;
            break;    
        default:
            alert("Es opción no existe, ingrese una opción válida");
            break;
    }
} 
for(let numero of numeros_pares){
    console.log(numero);
    suma_par= numero + suma_par;
}
console.log(`El resultado de la suma es ${suma_par}`);
for(let num of numeros_impares){
    producto_impar= num * producto_impar;
}
console.log(`El resultado de la multiplicación es ${producto_impar}`);
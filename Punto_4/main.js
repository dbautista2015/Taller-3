let num1 = parseInt(prompt("Ingrese el número A"));
let num2 = parseInt(prompt("Ingrese el número B"));
let num3 = parseInt(prompt("Ingrese el número C"));

if(num1>num2 && num1>num3){
    console.log(`El número A ${num1} es mayor que todos`);
}else if(num2>num1 && num1>num3){

}else{
    console.log(`El número C ${num3} es mayor que todos`);
}

if(num1<num2 && num1<num3){
    console.log(`El número A ${num1} es menor que todos`);
}else if(num2<num1 && num1<num3){
    console.log(`El número B ${num2} es menor que todos`);
}else{
    console.log(`El número C ${num3} es menor que todos`);
}
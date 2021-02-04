let numero = [];

parar:
do {
    let n = parseInt(prompt("Ingresa un número"));
    numero.push(n);
    let opciones = parseInt(prompt("Desea ingresar otro número. \n 1. Si \n 2. No"));
    switch (opciones) {
        case 1:
            continue parar;
        case 2:
            console.log(`Cantidad de números ingresados ${numero.length}`);
            console.log(`${numero}`);
            break parar;    
        default:
            alert("Es opción no existe, ingrese una opción válida");
            break;
    }
} while (true);
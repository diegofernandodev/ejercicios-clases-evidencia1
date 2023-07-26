import {Cuenta} from "./cuenta";

let cuentaBancolombia = new Cuenta("Fernando Walteros", 100000)

cuentaBancolombia.ingresar(20000)
cuentaBancolombia.ingresar(21900)
console.log(cuentaBancolombia.mostrar());
cuentaBancolombia.retirar(-500000)
//cuentaBancolombia.ingresar(200000)
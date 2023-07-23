import {Operaciones} from "./operaciones";

let operacion1 = new Operaciones(20,10)
let operacion2 = new Operaciones(100,35)
let operacion3 = new Operaciones(23,45)
let operacion4 = new Operaciones(36,15)
let operacion5 = new Operaciones(80,56)

let suma = operacion1.sumar()
let resta = operacion2.restar()
let multiplicacion = operacion3.multiplicar()
let division = operacion4.dividir()

console.log(`la suma de ${operacion1.getNumero1()} + ${operacion1.getNumero2()} = ${suma}\n
la resta de ${operacion2.getNumero1()} - ${operacion2.getNumero2()} = ${resta}\n
la multiplicacion de ${operacion3.getNumero1()} X ${operacion3.getNumero2()} = ${multiplicacion}\n
la division de ${operacion4.getNumero1()} / ${operacion4.getNumero2()} = ${division}`);

operacion5.setNumero1(88)
operacion5.setNumero2(45)
console.log(operacion5.getNumero1(), " ", operacion5.getNumero2());

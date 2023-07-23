import {Persona} from "./persona";

let persona1 = new Persona("Diego", 32, "3012343212","cll 5 13 24", "Popayan")
let persona2 = new Persona("Fernando", 30, "3014321098","cra 4 1 23", "Popayan")
let persona3 = new Persona("Katherine", 32, "3012234562","cra 3 12 32", "cali")
let persona4 = new Persona("Daniela", 25, "3201234321","cll 13 2 34", "Popayan")
let persona5 = new Persona("Jorge", 26, "3501234565","cra 1 23 12", "bogota")

let ciudad = persona1.getCiudad()
console.log(ciudad);

persona2.setCiudad("pereira")
console.log(persona2.getCiudad());

console.log(persona3);

let myorOmnor = persona4.mayorOmenorDeEdad()
console.log(myorOmnor);

persona5.mostrarDatosPersona()
persona2.mostrarDatosPersona()





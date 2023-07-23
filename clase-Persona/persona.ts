/*
         PERSONA
___________________________
- nombre:string
- edad:number
- telefono:string
- direccion: string
- ciudad: string
___________________________
+ mostrarDatosPersona(): void
+ mayorOmenorDeEdad(): string
*/

export class Persona {
    private nombre:string
    private edad:number
    private telefono:string
    private direccion: string
    private ciudad: string
    constructor(nombre:string, edad:number, telefono:string, direccion:string, ciudad:string) {
        this.nombre = nombre
        this.edad = edad
        this.telefono = telefono
        this.direccion = direccion
        this.ciudad = ciudad
    }
    mostrarDatosPersona(): void{
        console.log(`DATOS\n Nombre = ${this.nombre}\n edad = ${this.edad}\n telefono = ${this.telefono}\n direccion = ${this.direccion}\n ciudad = ${this.ciudad}`);
        
    }
    mayorOmenorDeEdad(): string{
        let respuesta:string
        if (this.edad < 18) {
            respuesta = "Es menor de edad"
        } else {
            respuesta = "Es mayor de edad"
        }
        return respuesta
    }
    getNombre():string{
        return this.nombre
    }
    getEdad():number{
        return this.edad
    }
    getTelefono():string{
        return this.telefono
    }
    getDireccion():string{
        return this.direccion
    }
    getCiudad():string{
        return this.ciudad
    }
    setNombre(nombre:string){
        this.nombre = nombre
    }
    setEdad(edad:number){
        this.edad = edad
    }
    setTelefono(telefono:string){
        this.telefono = telefono
    }
    setDireccion(direccion:string){
        this.direccion = direccion
    }
    setCiudad(ciudad:string){
        this.ciudad = ciudad
    }
}
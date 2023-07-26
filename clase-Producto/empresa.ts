/*
         EMPRESA
___________________________
- productos: Producto[] = []
- nit: string
- nombreE: string
- direccion: string
- telefono: string
___________________________
+ ingresarProducto()
+ contarProductos()
+ sumarPreciosProductos()
*/

import { Producto } from "./producto"


export class Empresa {
    private productos: Producto[] = []
    private nit: string
    private nombreE: string
    private direccion: string
    private telefono: string
    constructor(nit:string,nombreE:string, direccion:string, telefono:string) {
        this.nit = nit
        this.nombreE = nombreE
        this.direccion = direccion
        this.telefono = telefono
    }
    getNit():string{
        return this.nit
    }
    getNombreE(): string{
        return this.nombreE
    }
    getDireccion():string{
        return this.direccion
    }
    getTelefono(): string{
        return this.telefono
    }
    setNit(nit:string):void{
        this.nit = nit
    }
    setNombreE(nombreE: string): void {
        this.nombreE = nombreE
    }
    setDireccion(direccion:string):void{
        this.direccion = direccion
    }
    setTelefono(telefono:string):void{
        this.telefono = telefono
    }
    ingresarProducto(id:number, nombre:string, tipo:string, precio:number, pais:string, cantidad:number):void{
        
        const nuevoProducto = new Producto(id, nombre, tipo, precio, pais, cantidad);
        this.productos.push(nuevoProducto);
    }
    contarProductos():number{
        return this.productos.length
    }
    sumarPreciosProductos():number{
        let totalPrecios:number=0
        for (const producto of this.productos) {
            totalPrecios += producto.getPrecio() * producto.getCantidad()
        }
        return totalPrecios
    }
}
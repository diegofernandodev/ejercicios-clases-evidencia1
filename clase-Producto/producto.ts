export class Producto {
    private id: number
    private nombre: string
    private tipo: string
    private precio: number
    private pais: string
    private cantidad: number
    constructor(id:number, nombre:string, tipo:string, precio:number, pais:string, cantidad:number) {
        this.id = id
        this.nombre = nombre
        this.tipo = tipo
        this.precio = precio
        this.pais = pais
        this.cantidad = cantidad
    }
    getId(): number{
        return this.id
    }
    getNombre(): string{
        return this.nombre
    }
    getTipo():string{
        return this.tipo
    }
    getPrecio(): number{
        return this.precio
    }
    getPais(){
        return this.pais
    }
    getCantidad(){
        return this.cantidad
    }
    setId(id:number){
        this.id = id
    }
    setNombre(nombre:string){
        this.nombre = nombre
    }
    setTipo(tipo:string){
        this.tipo = tipo
    }
    setPrecio(precio:number){
        this.precio = precio
    }
    setPais(pais:string){
        this.pais = pais
    }
    setCantidad(cantidad:number){
        this.cantidad = cantidad
    }
    
}
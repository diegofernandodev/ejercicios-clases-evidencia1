/*
         CUENTA
___________________________
- titular:string
- valorActual:number
___________________________
+ mostrar(): string
+ ingresar(cantidad:number): void
+ retirar(retiro:number): void
*/

export class Cuenta {
    private titular: string
    private valorActual: number
    constructor(titular:string, valorActual:number) {
        this.titular = titular
        this.valorActual = valorActual
    }
    setTitular(titular:string){
        this.titular = titular
    }
    setValorActual(valorActual:number){
        this.valorActual = valorActual
    }
    getTitular(): string{
        return this.titular
    }
    getValorActual(): number{
        return this.valorActual
    }
    mostrar(): string{
        return `Titular de la cuenta = ${this.titular}\n
 El saldo actual de la cuenta es = $${this.valorActual}`
    }
    ingresar(cantidad:number): void{
        if (cantidad <= 0 || cantidad > this.valorActual) {
            console.log("El valor ingresado no es válido");
            
        } else {
            
            console.log("$",this.valorActual += cantidad);
           
        }
    }
    retirar(retiro:number): void{
       let valorInicial = this.valorActual
       if (retiro > 0) {
        /*let nuevoSaldo:number*/this.valorActual -= retiro
        console.log("_______________________________________");
        
        console.log(`Saldo inicial = ${valorInicial}\n
Valor retiro = ${retiro}\n
Nuevo saldo = ${this.valorActual}`)
       } else {
        console.log("_______________________________________");
        console.log("El valor ingresado no es válido");
       }  
    }
}
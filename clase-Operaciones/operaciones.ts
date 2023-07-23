/*
         PERSONA
___________________________
- numero1: number
- numero2: number
___________________________
+ sumar(): number
+ restar(): number
+ multiplicar(): number
+ dividir(): number
*/

export class Operaciones {
    private numero1: number
    private numero2: number
    constructor(numero1:number, numero2:number) {
        this.numero1 = numero1
        this.numero2 = numero2
    }
    sumar(): number{
        return this.numero1 + this.numero2
    }
    restar(): number{
        return this.numero1 - this.numero2
    }
    multiplicar(): number{
        return this.numero1 * this.numero2
    }
    dividir(): number{
        return this.numero1 / this.numero2 
    }
    getNumero1(): number{
        return this.numero1
    }
    getNumero2(): number{
        return this.numero2
    }
    setNumero1(numero1:number){
        this.numero1 = numero1
    }
    setNumero2(numero2:number){
        this.numero2 = numero2
    }
}
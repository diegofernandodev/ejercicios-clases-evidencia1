import { Empresa } from "./empresa";

let empresa_X: Empresa = new Empresa("901023432","Empresa X", "Cll 3 4 56", "3231212345")

empresa_X.ingresarProducto(1,"Xiaomi","movil", 1250000, "china", 10)
empresa_X.ingresarProducto(2,"Samsumg","movil",1450000,"corea",8)
empresa_X.ingresarProducto(3,"Apple","movil",3500000,"EEUU",5)

let cantidad:number = empresa_X.contarProductos()
let valorCantidad = empresa_X.sumarPreciosProductos()

console.log(empresa_X);


console.log("Cantidad = ",cantidad, " Valor total = ",valorCantidad);





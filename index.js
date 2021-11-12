let autos= require("./autos");
let personas= require("./personas");
let concesionaria = {
    autos: autos,
    personas: personas,
    buscarAuto: function (patente) {
         for (i= 0; i<autos.length; i++) {
             if (this.autos[i].patente===patente) {
                return this.autos[i];
             }
        }
    },
    venderAuto: function(patente) {
        let autoEncontrado= this.buscarAuto(patente).vendido=true;
        return autoEncontrado;
    },
    autosParaLaVenta: function() {
     let autosAVender= this.autos.filter(auto => auto.vendido===false);
     return autosAVender;
    },
    autosNuevos: function(){
        let autosDisponibles= this.autosParaLaVenta();//para guardar en una variable lo que una funcion retorna se la debe ejecutar con parentesis
        let autos0KM= autosDisponibles.filter(autos=> autos.km<100);
        return autos0KM;
    },
    listaDeVentas: function() {
      let autosVendidos= this.autos.filter(autos=> autos.vendido);
      let listaDePrecios= autosVendidos.map (auto=>auto.precio)//Map se usa para transformar los valores de una propiedad a lo largo de un array volcandolos en otro array
               return listaDePrecios
           },
    totalDeVentas: function() {
        let listaVentas= this.listaDeVentas();
        let sumaTotalVentas= listaVentas.reduce((acum, precio)=> acum + precio, 0);//Si los parametros del metodos son mas de uno no olvidar declararlos entre parentesis
        return sumaTotalVentas;//Si el array al que se le aplica el reduce no tiene elementos, en la condicion o logica del metodo luego de una coma se debe especificar que el valode acum empieza en 0
    },
    /*Agregando funcionalidades
        Muy contento el equipo por cómo viene el desarrollo, por la tarde, María te comenta que se agrega una funcionalidad muy importante: la de verificar si una persona puede comprar o no un auto. 
        Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. 
        Una es el costo total: si el total de un auto excede lo que la persona considera caro, no va a comprar el auto. 
        Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. Si ambas condiciones se cumplen, se realiza la compra.
        Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.
        Una persona va a ser representada mediante un objeto literal de la siguiente forma:
        {
            nombre: “Juan”,
            capacidadDePagoEnCuotas: 20000,
            capacidadDePagoTotal: 100000
        }
        */
        puedeComprar (auto, persona) {//El parametro auto y persona se reemplaza luego con los datos que pone el usuario y se convierte en el objeto entero
            let valorDeCuota = auto.precio / auto.cuotas;
            let condicionSolvenciaPrecio= persona.capacidadDePagoTotal >= auto.precio;
            let condicionSolvenciaPagoEnCuotas= persona.capacidadDePagoEnCuotas >= valorDeCuota;
            let puedeComprar= condicionSolvenciaPrecio && condicionSolvenciaPagoEnCuotas;
                if (puedeComprar){
                    return true;
            }
            else {
                return false;
            };
        },
       autosQuePuedeComprar: function (persona) {
           let listaDeDisponibles= this.autosParaLaVenta()
           let autosQuePuedeComprar= listaDeDisponibles.filter(this.puedeComprar)
           return autosQuePuedeComprar;
        }
};
// 7. puedeComprar
console.log(concesionaria.autosQuePuedeComprar("Damián"));
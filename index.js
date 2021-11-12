let autos= require("./autos");

let concesionaria = {
    autos: autos,
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
    autosNuevos (){
        let autosDisponibles= this.autosParaLaVenta();
        let autos0KM= autosDisponibles.filter(autos=> autos.km<100);
        return autos0KM;
    },
/*Más funcionalidades
    El cliente le pidió saber cuánto dinero generaron las ventas.
    María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido. 
    A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo".
    Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
    */
listaDeVentas() {
      let autosVendidos= this.autos.filter(autos=> autos.vendido=== true);
      let listaDePrecios= autosVendidos.precio
               return listaDePrecios
           }
};
// 5. listaDeVentas
console.log(concesionaria.listaDeVentas());
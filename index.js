const autos= require("./autos");

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
        let autosVendidos= this.autosParaLaVenta();
        let autos0KM= autosVendidos.filter(autos=> autos.km<100);
        return autos0KM;
    }
};

//console.log(concesionaria.buscarAuto("JJK116"));
//console.log(concesionaria.venderAuto("JJK116"));
//console.log(concesionaria.autosParaLaVenta());
console.log(concesionaria.autosNuevos("JJK116"));
//console.log(concesionaria.autos);

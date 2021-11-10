let autos= [
    {
        marca: "Ford",
        modelo: "Fiesta",
        precio: "150000",
        km: "200",
        color: "azul",
        cuotas: 12,
        anio: 2019,
        patente: "APL123",
        vendido: false,
        buscarAuto: function(patente) {
            if (this.patente=== patente) {
                return this.marca;
            } else {
                return null;
            };
        }
    },
    {
        marca: "Toyota",
        modelo: "Corolla",
        precio: "100000",
        km: "0",
        color: "blanco",
        cuotas: 14,
        anio: 2019,
        patente: "JJK116",
        vendido: false,
        buscarAuto: function (patente) {
            if (this.patente=== patente) {
                return this.marca;
            } else {
                return null;
            };
        }
    }
]
module.exports= autos;

console.log(typeof buscarAuto);
let autos= [
    {
        marca: "Ford",
        modelo: "Fiesta",
        precio: 150000,
        km: 200,
        color: "azul",
        cuotas: 12,
        anio: 2019,
        patente: "APL123",
        vendido: false,
    },
    {
        marca: "Toyota",
        modelo: "Corolla",
        precio: 100000,
        km: 0,
        color: "blanco",
        cuotas: 14,
        anio: 2019,
        patente: "JJK116",
        vendido: false,
    }
]
module.exports= autos;

/*puedeComprar: function(unAuto, unaPersona){
    let valorDeCuota = unAuto.precio / unAuto.cuotas;
        if (unaPersona.capacidadDePagoEnCuotas >= valorDeCuota && unaPersona.capacidadDePagoTotal >= unAuto.precio){
            return true
       }  
       else {
           return false
       }  
       }*/
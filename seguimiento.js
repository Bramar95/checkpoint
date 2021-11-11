const autos = require("./autos");

let concesionaria = {
	autos: autos,

	buscarAuto: function (patente) {
   for (let i = 0; i < this.autos.length; i++){
      if (this.autos[i].patente === patente){
         return this.autos[i]
      } 
   }
   	return null
	},

	venderAuto: function (patente) {
		console.log('Completar este método');
	},

	autosParaLaVenta: function () {
		console.log('Completar este método');
	},

	autosNuevos: function () {
		console.log('Completar este método');
	},

	listaDeVentas: function () {
		console.log('Completar este método');
	},

	totalDeVentas: function () {
		console.log('Completar este método');
	},

	puedeComprar: function (unAuto, unaPersona) {
		console.log('Completar este método');
	},

	autosQuePuedeComprar: function (unaPersona) {
		console.log('Completar este método');
	},

	autosNuevos: function(){
		console.log('Completar este método');
	} 
}


// Pruebas

// Esta persona les servirá para probar los métodos: puedeComprar y autosQuePuedeComprar
const fulanita = {
	capacidadDePagoTotal: 230000,
	capacidadDePagoEnCuotas: 14000,
}


// 1. buscarAuto
console.log(concesionaria.buscarAuto('ABC123'));
console.log(concesionaria.buscarAuto('JJK116'));
console.log(concesionaria.buscarAuto('AUTOFALSO'));

// 2. venderAuto
console.log(concesionaria.venderAuto());

// 3. autosParaLaVenta
console.log(concesionaria.autosParaLaVenta());

// 4. autosNuevos
console.log(concesionaria.autosNuevos());

// 5. listaDeVentas
console.log(concesionaria.listaDeVentas());

// 6. totalDeVentas
console.log(concesionaria.totalDeVentas());

// 7. puedeComprar
console.log(concesionaria.puedeComprar());

// 8. autoQuePuedeComprar
console.log(concesionaria.autoQuePuedeComprar());

// 9. autosNuevos
console.log(concesionaria.autosNuevos())






//María presenta al equipo un nuevo proyecto para una concesionaria de automóviles, cuya principal línea de negocios es la compra y venta de automóviles. La concesionaria necesita construir una lista con todos los vehículos que tiene registrados. Por cada vehículo necesita conocer la siguiente información:

//¡Al fin es momento de codear!
//En base a las definiciones técnicas tomadas con el equipo deberás declarar la variable autos. Esta debe contener los siguientes vehículos:

/*El primer auto es un Ford Fiesta Azul, del 2019, con 200 kilómetros, cuyo precio es 150000, disponible en 12 cuotas, con la patente APL123 que no está vendido.
El segundo auto es un Toyota Corolla Blanco, del 2019, 0 kilómetros, cuyo precio es 100000, disponible en 14 cuotas, con la patente JJK116 que no está vendido.
Cada auto debe tener los siguientes atributos: marca, modelo, precio, km, color, cuotas, anio, patente, vendido.*/


 /*let autos= [
    {
        marca: "Ford",
        modelo: "Fiesta",
        precio: "150000",
        km: "200",
        color: "azul",
        cuotas: 12,
        anio: 2019,
        patente: "APL123",
        vendido: false
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
        vendido: false
    }
]
module.exports= autos;
console.log(autos);

/*A la semana, el proyecto avanza y María nos pide otro requerimiento, esta vez un poco más avanzado. 
Nos comenta que la concesionaria ahora necesita poder buscar los automóviles por patente y venderlos.
 Para esto, María nos encargó pensar la forma en que representaremos a la concesionaria.

 Etapa 1
 En esta primera etapa, necesitamos requerir tu módulo autos que se encuentra en la misma carpeta del archivo donde estás trabajando.
 
 Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita.
 
 Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.*/
 const autos= require ("./objeto");
 function buscar(patente) {
     return autos.patente
 }
console.log(buscar("JJK116"));
console.log(autos.patente);
/*const concesionaria = {
     buscar: function (autos) {
         return  
     },
   autos: autos
};
console.log(concesionaria.autos);*/
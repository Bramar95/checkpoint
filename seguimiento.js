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
    /*Etapa 3
    Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.
    ¿Cómo lo resuelven?
    Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto.
    */
    venderAuto: function(patente) {
        let autoEncontrado= this.buscarAuto(patente).vendido=true;
        return autoEncontrado;
    },
    /*Funcionalidad extra
    La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista de autos para la venta. A lo cual, María, cree que es una tarea sencilla que Juan y vos pueden encarar solos, usando la función autosParaLaVenta, aunque por las dudas ella les recuerda que no deberían de aparecer los autos que ya fueron vendidos.
    Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior. Tené en cuenta que estamos optimizando nuestro código, por lo cual, deberíamos utilizar el método filter.
    */
    autosParaLaVenta: function() {
     let autosAVender= this.autos.filter(auto => auto.vendido===false);
     return autosAVender;
    },
    /*Una nueva funcionalidad extra
    María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km. 
    Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que desarrollar la funcionalidad autosNuevos.
    ¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?
    Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior.
    */
    autosNuevos (){
        let autosVendidos= this.autosParaLaVenta();
        let autos0KM= autosVendidos.filter(autos=> autos.km<100);
        return autos0KM;
    },
    /*Más funcionalidades
    El cliente le pidió saber cuánto dinero generaron las ventas.
    María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido. A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo".
    Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
    */
    listaDeVentas() {
        let listaVacia= []
          let autosVendidos= this.autos.filter(auto=> auto.vendido=== true);
          if (autosVendidos===true) {
           autosVendidos.precio
               } else {
                   return listaVacia
               }
            },
        /*Total de ventas
        Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas. 
        Acá el único requerimiento técnico explícito es que utilices la función reduce, ¡a codear!*/
        totalDeVentas: function () {
          console.log('Completar este método');
            },

        /*Agregando funcionalidades
        Muy contento el equipo por cómo viene el desarrollo, por la tarde, María te comenta que se agrega una funcionalidad muy importante: la de verificar si una persona puede comprar o no un auto. Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. Una es el costo total: si el total de un auto excede lo que la persona considera caro, no va a comprar el auto. Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. Si ambas condiciones se cumplen, se realiza la compra.
        Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.
        Una persona va a ser representada mediante un objeto literal de la siguiente forma:
        {
            nombre: “Juan”,
            capacidadDePagoEnCuotas: 20000,
            capacidadDePagoTotal: 100000
        }
        Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.*/
        puedeComprar: function (unAuto, unaPersona) {
            console.log('Completar este método');
            },
        /*Agregando funcionalidades
        Ahora, te comprometiste a realizarla. Así que manos a la obra. Hay que escribir la función autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.
        La función debe de realizar los siguientes pasos:
        1) Obtener los autos para la venta
        2) Por cada uno de los autos debe de probar si la persona puede comprarlo, ¿ya hay alguna funcionalidad que me permita hacer esto?.
        3) Luego debemos retornar los que pueda comprar, ¿hay alguna manera de poder filtrar la lista de autos para la venta del punto 1 con el paso 2?
        Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.*/
        autosQuePuedeComprar: function (unaPersona) {
            console.log('Completar este método');
        }
    };
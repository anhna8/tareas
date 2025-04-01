/* Proyecto: Introducción a ECMAScript */

// Descripción
// Este proyecto es un planificador simple de viajes que permite a los usuarios 
// registrar destinos y fechas, así como calcular el costo total de un viaje. 
// El objetivo es practicar conceptos básicos de JavaScript y aplicar características de ECMAScript (ES6).

/* Objetivo */
// Permitir que los estudiantes practiquen conceptos básicos de JavaScript y luego puedan 
// aplicar las nuevas características de ECMAScript (ES6 y posteriores) para mejorar el código.

/* Problema */
// Los usuarios deben poder registrar destinos de viaje, la fecha en que desean viajar 
// y calcular el costo total estimado del viaje según las opciones de alojamiento y transporte.

/* Instrucciones */
// 1. Registrar destinos llamando a registrarDestino(destino, fecha, transporte).
// 2. Calcular el costo con la función calcularCosto(destino, transporte).
// 3. Mostrar el itinerario con mostrarItinerario() para revisar los viajes registrados.
// 4. Aplicar características de ES6: funciones de flecha, reemplazo de `var` por `let/const` y modularización opcional.

/* Código actualizado con ECMAScript (ES6): */

const destinos = []; 

const registrarDestino = (destino, fecha, transporte) => {
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte)
    };
    destinos.push(nuevoViaje);
};


const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    
    if (destino === "Paris") costoBase = 500;
    else if (destino === "Londres") costoBase = 400;
    else if (destino === "New York") costoBase = 600;

    
    if (transporte === "Avión") costoBase += 200;
    else if (transporte === "Tren") costoBase += 100;

    return costoBase;
};


const mostrarItinerario = () => {
    destinos.forEach(viaje => {
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log("---------------------------");
    });
};


const iniciarApp = () => {
    
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");

    
    mostrarItinerario();
};


iniciarApp();

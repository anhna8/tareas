
const listaDeCompras = []; 


const agregarProducto = (producto) => {
    if (!listaDeCompras.includes(producto)) { 
        listaDeCompras.push(producto);
        console.log(`Producto agregado: ${producto}`);
    } else {
        console.log(`El producto "${producto}" ya está en la lista.`);
    }
};


const eliminarProducto = (producto) => {
    const indice = listaDeCompras.indexOf(producto);
    if (indice !== -1) { 
        listaDeCompras.splice(indice, 1); 
        console.log(`Producto eliminado: ${producto}`);
    } else {
        console.log(`El producto "${producto}" no está en la lista.`);
    }
};

const mostrarLista = () => {
    if (listaDeCompras.length > 0) {
        console.log("Lista de compras:");
        listaDeCompras.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto}`);
        });
    } else {
        console.log("La lista de compras está vacía.");
    }
};


console.log("Gestión de Lista de Compras:");
agregarProducto("Manzanas");
agregarProducto("Leche");
agregarProducto("Pan");
mostrarLista();
agregarProducto("Manzanas"); 
eliminarProducto("Leche");
mostrarLista();
eliminarProducto("Chocolate"); 

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

const productosEconomicos = productos.filter(producto => producto.precio < 100);
console.log("Productos con precio menor a $100:");
console.log(productosEconomicos);

const productosOrdenados = productosEconomicos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Productos económicos ordenados alfabéticamente:");
console.log(productosOrdenados);


const nombresDeProductos = productosOrdenados.map(producto => producto.nombre);
console.log("Nombres de los productos económicos:");
console.log(nombresDeProductos);


const totalPrecioEconomicos = productosEconomicos.reduce((total, producto) => total + producto.precio, 0);
console.log(`Total de precios de productos económicos: $${totalPrecioEconomicos}`);


const todosMayorDiez = productos.every(producto => producto.precio > 10);
console.log(`¿Todos los productos tienen precio mayor a $10? ${todosMayorDiez ? "Sí" : "No"}`);

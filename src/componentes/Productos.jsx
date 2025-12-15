function Productos() {
 const catalogo = [
    { id: 1, nombre: "Válvula Fiat", precio: 12000 },
    { id: 2, nombre: "Válvula Ford", precio: 13500 },
    { id: 3, nombre: "Válvula Chevrolet", precio: 12800 }
  ];

  return (
    <>

      <h2>Catálogo de Productos</h2>

      {catalogo.map((producto) => (
        <div key={producto.id}>
          <h3>{producto.nombre}</h3>
          <p>Precio: ${producto.precio}</p>
        </div>
      ))}
    </>
  );
}

export default Productos
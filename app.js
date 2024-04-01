const express = require('express');
const app = express();

// Ruta para mostrar 3 clientes
app.get('/clientes', (req, res) => {
  const clientes = [
    { nombre: 'Cliente 1', ciudad: 'Lima' },
    { nombre: 'Cliente 2', ciudad: 'Arequipa' },
    { nombre: 'Cliente 3', ciudad: 'Trujillo' },
  ];
  res.json(clientes);
});

// Ruta para mostrar 3 productos
app.get('/productos', (req, res) => {
  const productos = [
    { nombre: 'Producto 1', precio: 100 },
    { nombre: 'Producto 2', precio: 200 },
    { nombre: 'Producto 3', precio: 300 },
  ];
  res.json(productos);
});

app.listen(1200, () => {
  console.log('Servidor escuchando en el puerto 1200');
});

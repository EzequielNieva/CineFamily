const CarritoCompra = require('../index');

describe('CarritoCompra', () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  test('inicializa con un carrito vacío', () => {
    expect(carrito.carrito).toEqual([]);
  });

  test("agregarProducto() sea una funcion", ()=>{
    expect(carrito.agregarProducto).toBeInstanceOf(Function);
  });

  test('agregarProducto() agrega un producto al carrito', () => {
    const producto = { nombre: 'Producto 1', precio: 100 };
    carrito.agregarProducto(producto);
    expect(carrito.carrito).toContain(producto);
  });

  test("calcularTotal() sea una funcion", ()=>{
    expect(carrito.calcularTotal).toBeInstanceOf(Function);
  });

  test('calcularTotal() calcula el total de los productos en el carrito', () => {
    const producto1 = { nombre: 'Producto 1', precio: 100 };
    const producto2 = { nombre: 'Producto 2', precio: 50 };
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    expect(carrito.calcularTotal()).toBe(150);
  });

  test("aplicarDescuento() sea una funcion", ()=>{
    expect(carrito.aplicarDescuento).toBeInstanceOf(Function);
  });

  test('aplicarDescuento() aplica un descuento correctamente', () => {
    const producto1 = { nombre: 'Producto 1', precio: 100 };
    const producto2 = { nombre: 'Producto 2', precio: 50 };
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    const totalConDescuento = carrito.aplicarDescuento(10); 
    expect(totalConDescuento).toBe(135);
  });

  test('aplicarDescuento() con 0% no cambia el total', () => {
    const producto1 = { nombre: 'Producto 1', precio: 100 };
    carrito.agregarProducto(producto1);
    const totalConDescuento = carrito.aplicarDescuento(0);
    expect(totalConDescuento).toBe(100);
  });

  test('aplicarDescuento() con 100% devuelve total 0', () => {
    const producto1 = { nombre: 'Producto 1', precio: 100 };
    carrito.agregarProducto(producto1);
    const totalConDescuento = carrito.aplicarDescuento(100);
    expect(totalConDescuento).toBe(0);
  });
});

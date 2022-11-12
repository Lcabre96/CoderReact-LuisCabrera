



let obj = [
  {id: '1', name: 'Producto 1', categoria: 'Zapatillas', stock: '100', price: '40000', img: '../public/assets/nike01.png'},
  {id: '2', name: 'Producto 2', categoria: 'Zapatillas', stock: '100', price: '40000', img: '../public/assets/nike02.png'},
  {id: '3', name: 'Producto 3', categoria: 'Zapatillas', stock: '100', price: '40000', img: '../public/assets/nike03.png'},
  {id: '4', name: 'Producto 4', categoria: 'Zapatillas', stock: '100', price: '40000', img: '../public/assets/nike04.png'},
  {id: '5', name: 'Producto 5', categoria: 'Zapatillas', stock: '100', price: '40000', img: '../public/assets/nike05.png'},
  {id: '6', name: 'Producto 6', categoria: 'Zapatillas', stock: '100', price: '40000', img: '../public/assets/nike06.png'},
  {id: '7', name: 'Producto 7', categoria: 'Zapatillas', stock: '100', price: '40000', img: '../public/assets/nike07.png'},
  {id: '8', name: 'Producto 8', categoria: 'Zapatillas', stock: '100', price: '40000', img: '../public/assets/nike08.png'},
  {id: '9', name: 'Producto 9', categoria: 'Zapatillas', stock: '100', price: '40000', img: '../public/assets/nike09.png'},
  {id: '10', name: 'Producto 10', categoria: 'Zapatillas', stock: '100', price: '40000', img: '../public/assets/nike10.png'},
  {id: '11', name: 'Producto 11', categoria: 'Buzos', stock: '100', price: '40000', img: '../public/assets/buzo01.png'},
  {id: '12', name: 'Producto 12', categoria: 'Buzos', stock: '100', price: '40000', img: '../public/assets/buzo02.png'},
  {id: '13', name: 'Producto 13', categoria: 'Buzos', stock: '100', price: '40000', img: '../public/assets/buzo03.png'},
  {id: '14', name: 'Producto 14', categoria: 'Buzos', stock: '100', price: '40000', img: '../public/assets/buzo04.png'},
  {id: '15', name: 'Producto 15', categoria: 'Buzos', stock: '100', price: '40000', img: '../public/assets/buzo05.png'},
];



export const gFetch = (id) => {
  return new Promise((resuelto, rechazada) => {
    setTimeout(() => {
      resuelto(obj)
    }, 1000);
  })
}

export const getItem = (id) => {
  return new Promise ((resuelto, rechazada) => {
    setTimeout(() => {
      resuelto(obj)
    }, 1000);
  })
}
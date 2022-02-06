import React, {Fragment, useState} from 'react';
import Burger from './components/Burger.jsx';
import Cart from './components/Cart';

function App() {
  
  //* Estado de burgers con listado de burgers
  const[burgers, setBurgers] = useState([
    { id: 1, nombre: 'Burger Normal', precio: 50},
    { id: 2, nombre: 'Burger Big', precio: 70},
    { id: 3, nombre: 'Alitas', precio: 55},
    { id: 4, nombre: 'Alitas BRQ', precio: 70},
    { id: 5, nombre: 'Alitas Bufalo', precio: 250},
  ])
  
  //*Estado del carrito
  const [cart, setCart]= useState([])

  return (
    <Fragment>

      <h3>Hamburguesas</h3>
      {burgers.map((burger) => (
        <Burger
        key={burger.id}
        burger={burger}
        cart={cart}
        setCart={setCart}
        burgers={burgers}
        />
      ))}

      <Cart
      cart= {cart}
      setCart={setCart}
      />
    </Fragment>
  );
}

export default App;

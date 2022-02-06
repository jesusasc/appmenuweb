import React from "react";

const Burger = ({ burger, cart, setCart, burgers }) => {
    //*Constante que guarda los propiedades del listado burgers
    const { nombre, precio, id } = burger;

    //*Funcion para agregar burgers al cart
    const addBurger = (id) => {
        const burger = burgers.filter((burger) => burger.id === id);
        setCart([...cart, ...burger]);
    };


//*Funcion para Eliniar una amburguesa en el carrito
    const delBurger = (id) => {
        const burgers = cart.filter(burger => burger.id !== id)
        setCart(burgers)
    }
    return (
        <div>
            <ul>
                <li>{nombre}</li>
                <li>{precio}</li>
                {burgers ? (
                    <button type="button" onClick={() => addBurger(id)}>
                        Agregar al carrito
                    </button>
                ) : (
                    <div>
                        <button type="button" onClick = {() => addBurger(id)}>
                            Confirmar
                        </button>
                        <button type="button" onClick={() => addBurger(id)}>
                            Eliminar
                        </button>
                    </div>
                )}
            </ul>
        </div>
    );
};

export default Burger;

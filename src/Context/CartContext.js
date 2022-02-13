import React, {createContext, useEffect, useState} from "react";
import Productos from '../productos/productos'

export const CartContext = createContext();

export const ProdProvider = ({children}) =>{

    const [productos, setProductos] = useState([]);
    const [cartProd, setCartProd] = useState([]);

    useEffect(()=>{

        const promiseListProd = new Promise((resolve, reject) =>{
            resolve(Productos);
        })

        promiseListProd.then((res)=>setProductos(res)).catch((err)=>console.log(err))

    },[]);

    const addProd = (prodId, cantProd) => {

        const updateProd = productos.find((product) => product.id === prodId); //Busco por id el producto en el array donde se encuantran almacenados.

        if(cartProd.length===0){ //Verifico si el array del carrito contiene previamente un elemento. 

            updateProd.cantidad += cantProd;  //En el caso de que no tenga ninguno, sumo la cantidad elegida para comprar del producto y lo pusheo al array del carrito.
            cartProd.push(updateProd);

            inTheCart(updateProd.id);

            setCartProd(cartProd);

        }else{ 

            const updateCart = cartProd.find((cart) => cart === updateProd); //Si tiene previamente un elemento, busco por id el producto en el array carrtio.

            if(updateCart===undefined){ //En el caso de que no esté, sumo la cantidad elegida para comprar del producto y lo pusheo al array del carrito.
                updateProd.cantidad+=cantProd;
                cartProd.push(updateProd);
                inTheCart(updateProd.id);
            }else{
                updateProd.cantidad += cantProd;//En el caso de que esté, solamente sumo la cantidad elegida para comprar del producto.
            }
        }

        modifyStock(updateProd, cantProd); //Modifico el stock del producto.

        setCartProd(cartProd);
    }

    const removeProd = (prodId) => {
        const actCart = cartProd.filter((prod) => prod.id !== prodId)
        
        inTheCart(prodId);
        setCartProd(actCart);

        const resetCant = productos.find((prod) => prod.id === prodId)
        resetCant.stock += resetCant.cantidad
        resetCant.cantidad=0;

    }

    const clearCart = () =>{
        setCartProd([]);
    }

    const inTheCart =(prodId)=>{

        const prodInCart = productos.find((prod) => prod.id === prodId)
        if(prodInCart.estado===''){
            prodInCart.estado='En Carrito'
        }else{
            prodInCart.estado=''
        }
    }

    const modifyStock =(prod, prodCart)=>{
        prod.stock-=prodCart;
    }

    const totalProducts=()=>{
        return cartProd.reduce((acc, value) => acc + value.cantidad, 0);
    }

    return <CartContext.Provider value={{cartProd, setCartProd, addProd, removeProd, clearCart, inTheCart, totalProducts}}>{children}</CartContext.Provider>

}
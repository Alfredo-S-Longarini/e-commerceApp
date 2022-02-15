import React, {createContext, useEffect, useState} from "react";
import Productos from '../productos/productos'

export const CartContext = createContext();

export const ProdProvider = ({children}) =>{

    const [productos, setProductos] = useState([]);
    const [cartProd, setCartProd] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

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

            inTheCart(updateProd.id); //Indica que producto esta en el carrito y cual no.

            setCartProd(cartProd);

            console.log(productos)

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

        modifyStock(updateProd, cantProd);

        setTotal(totalProducts());

        setTotalPrice(precioTotal());

        setCartProd(cartProd);
    }

    const removeProd = (prodId) => { //Remueve un producto en especifico.
        const actCart = cartProd.filter((prod) => prod.id !== prodId)
        
        inTheCart(prodId);
        setCartProd(actCart);

        const resetCant = productos.find((prod) => prod.id === prodId)
        resetCant.stock += resetCant.cantidad
        resetCant.cantidad=0;

        setTotal(totalProducts());

        setTotalPrice(precioTotal());

    }

    const clearCart = () =>{ //Elimina todos los productos del carrito y resetea valores.
        for(let i=0; i<productos.length; i++){ 
            productos[i].stock+=productos[i].cantidad;
            productos[i].cantidad=0;
            productos[i].estado='';
        }

        cartProd.length=0
        setCartProd(cartProd);
        setTotal(totalProducts());
        setTotalPrice(precioTotal());

        console.log(cartProd);
        console.log(productos);

    }

    const inTheCart =(prodId)=>{ //Establece si un producto se encuentra en el carrito o no.

        const prodInCart = productos.find((prod) => prod.id === prodId)
        if(prodInCart.estado===''){
            prodInCart.estado='En Carrito'
        }else{
            prodInCart.estado=''
        }
    }

    const modifyStock =(prod, prodCart)=>{ //Modifica el stock del producto.
        prod.stock-=prodCart;
    }

    const totalProducts=()=>{ //Calcula el total de los productos.
        return cartProd.reduce((acc, value) => acc + value.cantidad, 0);
    }

    const precioTotal=()=>{ //Calcula el precio total de los productos en el carrito
        let aPagar=0
        for(let i=0; i<cartProd.length; i++){
            aPagar+=(cartProd[i].cantidad*parseFloat(cartProd[i].precio));
        }
        return aPagar;
    }

    return <CartContext.Provider value={{cartProd, setCartProd, addProd, removeProd, clearCart, inTheCart, total, totalPrice}}>{children}</CartContext.Provider>

}
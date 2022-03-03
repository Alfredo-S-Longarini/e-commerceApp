import React, {createContext, useEffect, useState} from "react";

import { collection, query, getDocs, doc, updateDoc} from 'firebase/firestore';
import { db } from "../Firebase/firebaseConfig";

export const CartContext = createContext();

export const ProdProvider = ({children}) =>{

    const [productos, setProductos] = useState([]);
    const [cartProd, setCartProd] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{

        const getProducts = async () => {
            const q = query (collection(db, 'productosApp'));
            const docs = [];
            const querySnapshot = await getDocs(q);
    
            querySnapshot.forEach((doc) => {
              docs.push({...doc.data(), id: doc.id});
            }); 
    
            setProductos(docs);
        }
    
        getProducts();

    },[]);

    const addProd = (prodId, cantProd) => {

        const updateProd = productos.find((product) => product.id === prodId); //Busco por id el producto en el array donde se encuantran almacenados.
        updateProd.stock-=cantProd // Modifico el stock

        updateStock(prodId, updateProd.stock); // Envío en valor actual de stock para modifcarlo en firebase

        if(cartProd.length===0){ //Verifico si el array del carrito contiene previamente un elemento.

            cartProd.push(updateProd); //En el caso de que no tenga ninguno, lo pusheo al array del carrito.

            updateCant(prodId, cantProd) //Establece la cantidad de un producto en el carrito.

        }else{

            const updateCart = cartProd.find((cart) => cart === updateProd); //Si tiene previamente un elemento, busco por id el producto en el array carrito.

            if(updateCart===undefined){ //En el caso de que no esté, lo pusheo al array del carrito y sumo la cantidad elegida para comprar del producto.

                cartProd.push(updateProd);

                updateCant(prodId, cantProd)

            }else{ //En el caso de que esté, solamente sumo la cantidad elegida para comprar del producto.

                updateCant(prodId, cantProd)

            }

        }

        inTheCart(prodId);

        setTotal(totalProducts());

        setTotalPrice(precioTotal());

        setCartProd(cartProd);
    }


    const removeProd = (prodId, cant) => { //Remueve un producto en especifico.
        const resetStock = productos.find((prod) => prod.id === prodId)
        resetStock.stock+=cant

        updateStock(prodId, resetStock.stock);

        const resetCant = cartProd.find((prod) => prod.id === prodId) //Reseteo la cantidad a 0 del producto eliminado.
        resetCant.cantidad=0;

        const actCart = cartProd.filter((prod) => prod.id !== prodId) //Creo un nuevo array sin el producto eliminado.
        
        inTheCart(prodId);
        setCartProd(actCart);

        setTotal(totalProducts());

        setTotalPrice(precioTotal());

    }

    const updateCant=(prodId, cantProd)=>{
        const cantActualizada = cartProd.find((cant) => cant.id === prodId);
        cantActualizada.cantidad+=cantProd;
    }

    const updateStock=(productoId, stockActualizado)=>{ //Modifica el stock del producto.
        const productRef = doc(db, "productosApp", productoId);

        updateDoc(productRef, {
            stock: stockActualizado
        }, {merge: true})
    }

    const resetCart=(productoId, stockActualizado, cantidadActualizada, stateActualizado)=>{
        const productRef = doc(db, "productosApp", productoId);
        updateDoc(productRef, {
            stock: stockActualizado ,
            cantidad : cantidadActualizada,
            state: stateActualizado
        }, {merge: true})
    }

    const clearCart = () =>{ //Elimina todos los productos del carrito y resetea valores.

        for(let i=0; i<productos.length; i++){ 
            productos[i].stock+=productos[i].cantidad;
            productos[i].cantidad=0;
            productos[i].estado="";

            resetCart(productos[i].id, productos[i].stock, productos[i].cantidad, productos[i].state)
        }

        cartProd.length=0
        setCartProd(cartProd);
        setTotal(totalProducts());
        setTotalPrice(precioTotal());

        console.log(cartProd);
        console.log(productos);

    }

    const inTheCart =(prodId)=>{ //Establece si un producto se encuentra en el carrito o no.

        const prodInCart = cartProd.find((prod) => prod.id === prodId)
        if(prodInCart){

            if(prodInCart.state===""){
                prodInCart.state="En Carrito"
                return "En Carrito";

            }else if(prodInCart.state==="En Carrito"){
                prodInCart.state=""
                return "";
            }
        }
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

    const compraOk=()=>{ //Funciona igual que la funcion clearCart pero la diferencia es que no modifica el stock, ya que los productos fueron comprados.
        for(let i=0; i<productos.length; i++){ 
            productos[i].cantidad=0;
            productos[i].estado="";

            resetCart(productos[i].id, productos[i].stock, productos[i].cantidad, productos[i].state);
        }

        cartProd.length=0
        setCartProd(cartProd);
        setTotal(totalProducts());
        setTotalPrice(precioTotal());

    }

    return <CartContext.Provider value={{cartProd, setCartProd, addProd, removeProd, clearCart, inTheCart, total, totalPrice, compraOk}}>{children}</CartContext.Provider>

}
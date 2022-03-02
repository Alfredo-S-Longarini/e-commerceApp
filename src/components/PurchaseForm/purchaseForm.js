import React, {useContext, useState} from 'react'
import { Label, Input, Button} from 'reactstrap'
import { CartContext } from '../../Context/CartContext'

import './purchaseForm.css'
import { db } from '../../Firebase/firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'

const PurchaseForm = () => {

    const {cartProd, totalPrice, compraOk} = useContext(CartContext);
    const [name, setName]=useState("");
    const [number, setNumber]=useState("");
    const [correo, setCorreo]=useState("");

    console.log(cartProd);

    let hoy=new Date(); //Variable creada para poder obtener la fecha.

    // -----------------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------

    // Variable que contiene lo valores necesarios para la compra, con su estado inicial.
    let initialState={ 
        comprador:{
            nombre:'',
            number:'',
            email:'',
        },
    
        items:[],
    
        date:'',
    
        total:''
    }

    const [values, setValues]=useState(initialState); 
    const [buttonSend, setButtonSend] = useState(true);
    const [idCompra, setIdCompra] = useState('');

    // -----------------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------

    // Funcion llamada por handleOnChange para almacenar los valores del formulario y carrito, en sus respectivas variables.
    const cargaDatos =(nombre, numero, email, productos, date, totalPagar)=>{ 

        setName(nombre);
        setNumber(numero);
        setCorreo(email);

        if((name.length>1) && (number.toString().length>1) && (correo.length>1)){
            initialState={
                comprador:{
                    Name:nombre,
                    Number:numero,
                    Correo:email,
                },
            
                items:productos,
            
                fecha:date,
            
                total:totalPagar
            }

            setButtonSend(false);
        }else{
            setButtonSend(true);
        }

        setValues(initialState);
    }

    // -----------------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------

    //Función que se encarga de recopilar la informacion del formulario, siempre y cuando este todo completo, y almacenmarla en la variable InitialState.
    const handleOnChange = () =>{

        
        cargaDatos(
            document.getElementById('nombreyapellido').value,
            document.getElementById('numero').value,
            document.getElementById('email').value,
            cartProd, 
            hoy.toLocaleDateString(),
            totalPrice
        )

        

        console.log(values);

    }

    // -----------------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------

    //Función que se encarga de almacenar la informacion tanto de la compra realizada, como la del comprador (Nombre, Número, email).
    const onSubmit = async (e) => {
		e.preventDefault();
		console.log(values);
		const docRef = await addDoc(collection(db, 'compras'), {
			values,
		});
		console.log('id de compra ', docRef.id);

        document.getElementById('formPurchase').reset();

        setIdCompra(docRef.id)

		setValues(initialState);

        setButtonSend(true)

        setTimeout(() => {
            compraOk()
        }, 10000);
	};

    return (
        <div className='sectionForm'>
            <form id='formPurchase' onSubmit={onSubmit}>
                <Label for="exampleText">
                    Nombre y Apellido
                </Label>
                <Input
                    id='nombreyapellido'
                    name='nombre'
                    value={values.nombre}
                    placeholder="Nombre y Apellido"
                    type="text"
                    onChange={handleOnChange}
                />

                <Label for="exampleNumber">
                    Número de Teléfono
                </Label>
                <Input
                    id='numero'
                    name='number'
                    value={values.number}
                    placeholder="Número de Teléfono"
                    type="number"
                    onChange={handleOnChange}
                />

                <Label for="exampleEmail">
                    E-mail
                </Label>
                <Input
                    id='email'
                    name='email'
                    value={values.email}
                    placeholder="E-mail"
                    type="email"
                    onChange={handleOnChange}
                />
                <Button disabled={buttonSend} color="success">Finalizar</Button>
            </form>
            {idCompra && <div className='compraOk'><div>Compra realizada con exito! Puede ver su pedido en el apartado Compras de la página</div>
            <div>Codigo de compra: {idCompra}</div>
            <div>La página se actualizara en 1min</div></div>}
        </div>
    )
}

export default PurchaseForm
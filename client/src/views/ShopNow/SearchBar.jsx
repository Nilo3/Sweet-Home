import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { getProducts } from "../../Redux/actions/product/productActions";

export default function SearchBar({page}) {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputChange(event) { //funcion manejadora de eventos onChange
        event.preventDefault() //evita que el formulario se envie y se recargue la pagina
        setName(event.target.value) //obtengo el valor actualizado del campo de entrada y se actualiza el estado 'name' utilizando 'setName'
    }

    function handleSubmit(event) {
        event.preventDefault();
        page(1)
        if(name.trim() === '') { //verifica si el valor de 'name' es una cadena vacia
            alert('Ingrese una búsqueda válida.'); //Mostrar mensaje de alerta si el campo esta vacío
        } else {
            dispatch(getProducts(name)) //si el campo del mueble no esta vacio se llama a la función dispatch
                .then((response) => {
                    if(response.payload.length === 0){ //si el payload tiene longitud 0, se muestra el mensjae de rechazo
                        alert('No se encontraron resultados. Intente nuevamente'); //Mostar mensaje de alerta si no se encontraron recetas
                    }
                })
                .catch((error) => {
                    console.log(error);
                    alert('Se produjo un error. Intente nuevamente.'); //Mostrar mensaje de alerta si hay un errro en la solicitud
                })
        }
    }

    return (        
            <div className=" mx-auto my-auto">
            <input //se renderiza un elemento input
                type="text" 
                className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-blue-500"
                placeholder="Ingrese su búsqueda..."
                onChange={(event) => handleInputChange(event)} //este evento llama a la función handleInputChange CUANDO EL VALOR DE ENTRADA CAMBIA
            />
            <button
                type="submit" //se indica que este boton es el que envia el formulario 
                className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-blue-500"
                onClick={(event) => handleSubmit(event)} //esta configurado para llamar a la función 'handleSubmit' cuando se hace clic en el botón
            >
                Buscar
            </button>
        </div>
       
    )
}


import React , {useEffect, useState} from "react";
import {condicionesAtmosfericas} from '../functions/Funciones'
import {useParams} from 'react-router-dom'

const Condiciones = () => {

    const [condiciones1, setCondiciones1] = useState(null);

    const params = useParams()
    useEffect(()=>{
        condicionesAtmosfericas(params._id, setCondiciones1)
    },[])

    return(
        <div>
            {condiciones1 !== null ? (
                <div>
                    <h2>Estado con el id {params._id}</h2>
                    <p>Nombre del estado: {condiciones1.name}</p>
                </div>
            ):('ho hay nda')}
        </div>
    )
}

export default Condiciones;
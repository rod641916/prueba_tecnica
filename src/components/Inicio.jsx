import React , {useEffect, useState} from "react";
import {condicionesAtmosfericas} from '../functions/Funciones'
import App from '../App.css';

const Inicio = () => {

    const [condiciones, setCondiciones] = useState (null)

    useEffect(()=>{
        condicionesAtmosfericas(setCondiciones)
    },[])

    return(
        <>
            {condiciones !== null ? (
                condiciones.map (condicion =>(
                    <div key={condicion._id}>
                        <table border="1px" bordercolor='blue' width='100' height='100'>
                            <tr background="blue">
                            <td>ID</td>
                            <td>Nombre</td>
                            <td>Probabilityofprecip</td>
                            <td>relativehumidity</td>
                            <td>lastreportime</td>
                            <td>condiciones</td>
                            </tr>

                            <tr>
                            <td><a href={`condicion/${condicion._id}`}>{condicion._id}</a></td>
                            <td><li>{condicion.name}</li></td>
                            <td><li>{condicion.probabilityofprecip}</li></td>
                            <td><li>{condicion.relativehumidity}</li></td>
                            <td><li>{condicion.lastreporttime.substr(0,8)}</li> </td>
                            <td><li>{condicion.cityid}</li> </td>  
                            </tr>
                        </table>      
                    </div>
                ))
            ):('No hay datros') }
        </>
    )
}

export default Inicio;
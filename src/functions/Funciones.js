import axios from "axios";

const condicionesAtmosfericas = async (state) =>{
    const peticion = await axios.get ('https://api.datos.gob.mx/v1/condiciones-atmosfericas/')
    console.log(peticion.data.results)
    state(peticion.data.results)
}


const datosCondiciones = async (state) =>{
    const peticion = await axios.get (`https://api.datos.gob.mx/v1/condiciones-atmosfericas/`);
    console.log(peticion.data)
    state (peticion.data)
}
export {condicionesAtmosfericas}
export {datosCondiciones}
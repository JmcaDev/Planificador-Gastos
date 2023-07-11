import Proptypes from "prop-types"
import { useState } from "react"
import Mensaje from "./Mensaje"

function NuevoPresupuesto({presupuesto, setPresupuesto, setIsValidPresupuesto}) {

    const [mensaje, setMensaje] = useState("")

    const handlePresupuesto = (e) =>{
        e.preventDefault()

        if(!presupuesto || presupuesto < 0){
            setMensaje("No es un presupuesto valido")

            return
        }
        setMensaje("")

        setIsValidPresupuesto(true)
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form action="" className="formulario" onSubmit={handlePresupuesto}>
            <div className="campo">
                <label htmlFor="">Definir Presupuesto</label>

                <input
                    className="nuevo-presupuesto"
                    type="number"
                    placeholder="Añade tu presupuesto"
                    value={presupuesto}
                    onChange={(e) => setPresupuesto(Number(e.target.value))}
                />
            </div>

            <input type="submit" value="Añadir"/>

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

NuevoPresupuesto.propTypes = {
    presupuesto: Proptypes.any,
    setPresupuesto: Proptypes.func,
    setIsValidPresupuesto: Proptypes.func
}

export default NuevoPresupuesto
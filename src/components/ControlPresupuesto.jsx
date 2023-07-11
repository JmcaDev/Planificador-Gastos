import PropTypes from "prop-types"
import { useEffect } from "react"

function ControlPresupuesto({gastos, presupuesto}) {

    useEffect(() =>{
        console.log("Componente listo")
    }, [gastos])

    const formatearCantidad = (cantidad) =>{
        return cantidad.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Grafica aqui</p>
        </div>

        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>

            <p>
                <span>Disponible: </span> {formatearCantidad(0)}
            </p>

            <p>
                <span>Gastado: </span> {formatearCantidad(0)}
            </p>
        </div>
    </div>
  )
}

ControlPresupuesto.propTypes = {
    gastos: PropTypes.array,
    presupuesto: PropTypes.any
}

export default ControlPresupuesto
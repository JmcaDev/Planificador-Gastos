import Proptypes from "prop-types"
import Gasto from "./Gasto"

function ListadoGastos({gastos}) {
  return (
    <div className="listado-gastos contenedor">
        <h2>{gastos.length ? "Gastos": "No hay gastos aun"}</h2>

        {gastos.map( gasto => (
            <Gasto
                key={gasto.id}
                gasto = {gasto}
            />
        ))}
    </div>
  )
}

ListadoGastos.propTypes = {
    gastos: Proptypes.array
}

export default ListadoGastos
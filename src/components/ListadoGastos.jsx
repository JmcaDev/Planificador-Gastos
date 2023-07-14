import Proptypes from "prop-types"
import Gasto from "./Gasto"

function ListadoGastos({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) {
  return (
    <div className="listado-gastos contenedor">
        

        {
          filtro ? (
            <>
              <h2>{gastosFiltrados.length ? "Gastos": "No hay gastos en esta categoria"}</h2>
              { gastosFiltrados.map( gasto => (
                  <Gasto
                      key={gasto.id}
                      gasto = {gasto}
                      setGastoEditar = {setGastoEditar}
                      eliminarGasto = {eliminarGasto}
                  />
                )) }
            </>
          ) : (
            <>
              <h2>{gastos.length ? "Gastos": "No hay gastos aun"}</h2>
              { gastos.map( gasto => (
                  <Gasto
                      key={gasto.id}
                      gasto = {gasto}
                      setGastoEditar = {setGastoEditar}
                      eliminarGasto = {eliminarGasto}
                  />
                ))}
            </>
          )
        }
    </div>
  )
}

ListadoGastos.propTypes = {
    gastos: Proptypes.array,
    setGastoEditar: Proptypes.func,
    eliminarGasto: Proptypes.func,
    filtro : Proptypes.string,
    gastosFiltrados: Proptypes.array
}

export default ListadoGastos
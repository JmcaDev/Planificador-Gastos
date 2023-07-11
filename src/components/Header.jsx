
import Proptypes from "prop-types"
import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"


function Header({gastos, presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        {isValidPresupuesto ? (
            <ControlPresupuesto
                gastos = {gastos}
                presupuesto = {presupuesto}
            />
        ) : (
            <NuevoPresupuesto
                presupuesto = {presupuesto}
                setPresupuesto = {setPresupuesto}
                setIsValidPresupuesto = {setIsValidPresupuesto}
            />
        )}

        
    </header>
  )
}

Header.propTypes = {
    gastos: Proptypes.array,
    presupuesto: Proptypes.any,
    setPresupuesto: Proptypes.func,
    isValidPresupuesto: Proptypes.bool,
    setIsValidPresupuesto: Proptypes.func
}

export default Header
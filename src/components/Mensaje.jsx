import Proptypes from "prop-types"


function Mensaje({children, tipo}) {
  return (
    <div className={`alerta ${tipo}`}>
        {children}
    </div>
  )
}

Mensaje.propTypes = {
    children: Proptypes.any,
    tipo: Proptypes.any
}

export default Mensaje
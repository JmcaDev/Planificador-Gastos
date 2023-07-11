import Proptypes from "prop-types"
import { useState } from "react"
import Mensaje from "./Mensaje"
import CerrarModal from "../img/cerrar.svg"

function Modal({ setModal, animarModal, setAnimarModal, guardarGasto }) {

    const [mensaje, setMensaje] = useState("")

    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [categoria, setCategoria] = useState("")

    const ocultarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([nombre, cantidad, categoria].includes("")) {
            setMensaje("Todos los campos son obligatorios")

            setTimeout(() =>{
                setMensaje("")
            },3000)
            return
        }

        guardarGasto({nombre,cantidad,categoria})
    }


    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarModal}
                    alt="Cerrar modal"
                    onClick={ocultarModal}
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : "cerrar"}`}
            >
                <legend>Nuevo Gasto</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className="campo">
                    <label htmlFor="nombre">Nombre del gasto</label>

                    <input
                        id="nombre"
                        type="text"
                        placeholder="Añade el nombre del gasto"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad del gasto</label>

                    <input
                        id="cantidad"
                        type="number"
                        placeholder="Añade el cantidad del gasto: ej. 300"
                        value={cantidad}
                        onChange={(e) => setCantidad(Number(e.target.value))}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="nombre">Categoria del gasto</label>

                    <select
                        id="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input
                    type="submit"
                    value="Añadir Gasto"
                />
            </form>
        </div>
    )
}

Modal.propTypes = {
    setModal: Proptypes.func,
    animarModal: Proptypes.bool,
    setAnimarModal: Proptypes.func,
    guardarGasto: Proptypes.func
}

export default Modal
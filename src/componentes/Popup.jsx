import { useState } from "react"


function Popup() {

    //Estados
    //const[miEstado, setMiEstado] = useState (ValorInicial)
    const [IsOpen, setIsOpen] = useState(false)
    
    //Acciones
    const handleAbrirPopup = () => {

        setIsOpen(true)
       /* setTimeout(()=>{

            setIsOpen(false)

        }, 3000) */
        }

    const handleCerrarPopup = () => {

        setIsOpen(false)
    }
    

    //Vista
  
    if( IsOpen === false){
        return(
            <div>
                <button onClick={handleAbrirPopup}>Finalizar Compra</button>
            </div>
        )}
    else{
        return(
            <div>
                <button onClick={handleAbrirPopup}>Finalizar Compra</button>

                <div className="popup">
                    <div className="popup_container">
                        <p>Gracias Por Su Compra</p>
                        <button onClick={handleCerrarPopup}>Cerrar ventana emergente</button>
                    </div>
                </div>
                    
            </div>
            

        )
    }

  
}
export default Popup
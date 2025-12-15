import { useState } from "react"
import Contador from "./Contador"

function ContadorContainer() {
    //variable comun
    /* let contador = 0 */

    //variable reactiva
    /* const [MiEstado,setMiEstado] = useState(ValorInicial) */
    //Estados
    const [contador, setContador] = useState(0)

    //Acciones
    const handleClick = () => {
        /*const miParrafo = document.querySelector("#parrafo")
        miParrafo.innerText = `Contador: ${contador++}`*/

        //contador = contador + 1
        
        setContador(contador + 1)
        console.log(contador)

    }


  //Vista
  return (
    <Contador
    
      cont={contador}  /* nombre_de_props(puede ser distinto al de la variable) = {nombre_variable} */ 
      hC={handleClick}
    
    />
  )
}
export default ContadorContainer
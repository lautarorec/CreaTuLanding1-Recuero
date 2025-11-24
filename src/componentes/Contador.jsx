import { useState } from "react"

function Contador() {
    //variable comun
    /* let contador = 0 */

    //variable reactiva
    /* const [MiEstado,setMiEstado] = useState(ValorInicial) */
    const [contador, setContador] = useState(0)
    const handleClick = () => {
        /*const miParrafo = document.querySelector("#parrafo")
        miParrafo.innerText = `Contador: ${contador++}`*/

        //contador = contador + 1
        
        setContador(contador + 1)
        console.log(contador)

    }

  return (
    <div>
        <p id="parrafo">Contador: {contador}</p>
        <button onClick = {handleClick} >Incrementar</button>
    </div>
  )
}
export default Contador
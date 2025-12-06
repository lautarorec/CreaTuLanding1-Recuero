import Button from "./Button"
import Contador from "./Contador"
import Popup from "./Popup"


function Main(){

return(
    <>

      <h2>Mi PRIMER Aplicación</h2>
      {/*Aca estoy mandando a llamar al componente Button y le paso como parametro la propiedad nombre y edad*/}
      <Button nombre="Lautaro" edad = {30} isAdmin = {true} atributos = {["Fuerza", "Inteligencia"]}/>

   
      <Contador />

      <Popup />
      
    </>
)

}

export default Main
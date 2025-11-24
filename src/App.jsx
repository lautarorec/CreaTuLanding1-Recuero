import Header from "./componentes/Header"
import Main from "./componentes/Main"
import Footer from "./componentes/Footer"


import './App.css'
import Button from "./componentes/Button"

//Componente de React :
// 1 ) --> SIEMPRE SON FUNCIONES <--
// 2 ) SIEMPRE empiezan con MAYUSCULA
// 3 ) SIEMPRE tienen retorno --> DEBE POSEER la linea return -- ejemplo: return "Hola"
// 4 ) El retorno de un componente es un JSX (casi HTML)
// 5 ) El retorno es un unico elementro ( dentro puede haber mas )

/* LLAMADO A UNA FUNCION

Header()
<Header />
<Header></Header>

*/

function App() {
  return(
    <>
    
      <Header />

      <Main />
    
      <Footer />

   

    </>
  )
  
}
export default App

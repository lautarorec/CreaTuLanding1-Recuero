import Header from "./componentes/Header"
import Main from "./componentes/Main"
import Footer from "./componentes/Footer"
import {Routes, Route } from "react-router-dom"


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
     <main className="main">
      
     {/* <Main /> */}
     <Routes>


      <Route path="/" element={<Main/> } />

      <Route path="/productos" element={<h2> Productos </h2> } />

      <Route path="/cat" element={ <h2> Categoria </h2> } />


     </Routes>

     </main>
    
      <Footer />

   

    </>
  )
  
}
export default App

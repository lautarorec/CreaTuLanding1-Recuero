import Header from "./componentes/Header"
import Main from "./componentes/Main"
import Footer from "./componentes/Footer"
import {Routes, Route } from "react-router-dom"
import Detalles from "./componentes/Detalles"



import './App.css'
import Button from "./componentes/Button"
import Productos from "./componentes/Productos"

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
      
     <main className="main"> {/* Pongo la etiqueta main FUERA de las rutas, para que este se vea SIEMPRE y no se condicional
                                al navegar o cambiar de página*/}
                                <Routes>
    <Route
      path="/productos"
      element={<input type="text" placeholder="Ej.: Válvulas" />}
    />
  </Routes>
      
            <div className="portada">
                <img src="https://www.atracparts.com/images/banner/engine-valves.webp" alt="" />
            </div>
     {/* <Main /> */}
     <Routes> {/* todo lo que este adentro de Routes es CONDICIONAL*/}


      <Route path="/" element={<Main/> } />

      <Route path="/productos" element={<Productos/> } />

      <Route path="/cat" element={ <h2> Categoria </h2> } />
            {/*estas 3 son Rutas ESTÁTICAS*/}

     {/* <Route path="/:texto" element ={<h2> Soy Ruta DINÁMICA</h2>}></Route> */}
     <Route path="/detalles" element={<Detalles />} />

     


     </Routes>

     </main>
    
      <Footer />

   

    </>
  )
  
}
export default App

import { Link, NavLink, Routes, Route } from "react-router-dom"




function Header(){

    return(

        <header className="header">

            <h1 className="header__title">Mi PRIMER Aplicación</h1>

            <Routes>
                <Route path="/productos" element={<input type="text" placeholder="Ej.: Valvulas"/>}/>
            </Routes>

            <nav className="header__nav nav">

                {/*<a href="/">home</a> */}
                <NavLink to="/" className="nav__link">home</NavLink>

               {/*} <a href="/productos">productos</a>*/}
                <NavLink to="/productos" className="nav__link">productos</NavLink>

                {/*<a href="/cat-1">cat1</a>*/}
                <NavLink to="/cat" className="nav__link">cat</NavLink>

            </nav>

        </header>

    )

}

export default Header
import { Link, NavLink, Routes, Route } from "react-router-dom"




function Header(){

    return(

        <header className="header">

            <h1 className="header__title">Nube de Válvulas</h1>

           

            <nav className="header__nav nav">

                {/*<a href="/">home</a> */}
                <NavLink to="/" className="nav__link">home</NavLink>

               {/*} <a href="/productos">productos</a>*/}
                <NavLink to="/productos" className="nav__link">productos</NavLink>

                {/*<a href="/cat-1">cat1</a>*/}
                <NavLink to="/cat" className="nav__link">cat</NavLink>

                <NavLink to="/detalles" className="nav__link">detalles</NavLink>



            </nav>
            


        </header>

    )

}

export default Header
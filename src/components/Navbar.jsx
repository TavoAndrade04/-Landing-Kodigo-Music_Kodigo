import { NavLink } from 'react-router-dom'
import { FiHome, FiMusic } from 'react-icons/fi'
import logo from '../assets/Logo-.png'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-interior">
        <NavLink to="/" className="logo">
        <span className="logo-disco" aria-hidden="true"></span>
        <img src={logo} alt="Logo de Kodigo Music" className="logo-img" />
           Kodigo Music
          </NavLink>
       <nav>
  <NavLink to="/" end>
    <FiHome /> Inicio
  </NavLink>
  <NavLink to="/biblioteca">
    <FiMusic /> Biblioteca
  </NavLink>
</nav>
      </div>
    </header>
  )
}

export default Navbar

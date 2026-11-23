import { NavLink } from 'react-router-dom'
import { FiHome, FiMusic } from 'react-icons/fi'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-interior">
        <NavLink to="/" className="logo">
        <span className="logo-disco" aria-hidden="true"></span>
        <img src="/public/Logo-.png" alt="" className="logo-img" />
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

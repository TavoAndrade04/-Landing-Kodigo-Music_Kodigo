import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Biblioteca from './pages/Biblioteca'
import { cancionesIniciales } from './data/canciones'

function App() {
  // si ya hay canciones guardadas en el navegador las usamos, si no, las de ejemplo
  const [canciones, setCanciones] = useState(() => {
    const guardadas = localStorage.getItem('kodigo-canciones')
    return guardadas ? JSON.parse(guardadas) : cancionesIniciales
  })

  useEffect(() => {
    localStorage.setItem('kodigo-canciones', JSON.stringify(canciones))
  }, [canciones])

  const agregarCancion = (nueva) => {
    setCanciones([{ ...nueva, id: Date.now() }, ...canciones])
  }

  const eliminarCancion = (id) => {
    setCanciones(canciones.filter((c) => c.id !== id))
  }

  return (
    <>
      <Navbar />
      <main className="contenedor">
        <Routes>
          <Route path="/" element={<Inicio canciones={canciones} />} />
          <Route
            path="/biblioteca"
            element={
              <Biblioteca
                canciones={canciones}
                onAgregar={agregarCancion}
                onEliminar={eliminarCancion}
              />
            }
          />
          <Route path="*" element={<p className="vacio">Esta página no existe.</p>} />
        </Routes>
      </main>
      <footer className="pie">Kodigo Music · hecho con React · Por Gustavo Andrade</footer>
    </>
  )
}

export default App

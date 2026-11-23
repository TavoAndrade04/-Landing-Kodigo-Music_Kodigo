import { useState } from 'react'
import SongCard from '../components/SongCard'
import SongForm from '../components/SongForm'

function Biblioteca({ canciones, onAgregar, onEliminar }) {
  const [busqueda, setBusqueda] = useState('')

  const filtradas = canciones.filter((c) =>
    `${c.titulo} ${c.artista}`.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="biblioteca">
      <section>
        <div className="encabezado-lista">
          <h1>Biblioteca <small>({canciones.length})</small></h1>
          <input
            type="search"
            className="buscador"
            placeholder="Buscar por título o artista"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        {filtradas.length === 0 ? (
          <p className="vacio">No encontramos canciones con ese nombre.</p>
        ) : (
          <ul className="lista">
            {filtradas.map((c) => (
              <SongCard key={c.id} cancion={c} onEliminar={onEliminar} />
            ))}
          </ul>
        )}
      </section>

      <aside>
        <SongForm onAgregar={onAgregar} />
      </aside>
    </div>
  )
}

export default Biblioteca

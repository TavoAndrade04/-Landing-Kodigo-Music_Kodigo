import { Link } from 'react-router-dom'
import SongCard from '../components/SongCard'

function Inicio({ canciones }) {
  const destacadas = canciones.slice(0, 4)

  return (
    <>
      <section className="portada-inicio">
        <h1>Tu música,<br />sin complicarte.</h1>
        <p>Guarda tus canciones favoritas y ten tu propia biblioteca a un clic.</p>
        <Link to="/biblioteca" className="btn">Ir a mi biblioteca</Link>
      </section>

      <section>
        <h2>Últimas en tu biblioteca</h2>
        {destacadas.length === 0 ? (
          <p className="vacio">Aún no tienes canciones. Agrega la primera en la biblioteca.</p>
        ) : (
          <ul className="lista">
            {destacadas.map((c) => (
              <SongCard key={c.id} cancion={c} />
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default Inicio

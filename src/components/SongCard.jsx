import { FiTrash2 } from 'react-icons/fi'

// Saca un color distinto para cada canción a partir de su título
function colorDe(texto) {
  let suma = 0
  for (const letra of texto) suma += letra.charCodeAt(0)
  return suma % 360
}

function SongCard({ cancion, onEliminar }) {
  const tono = colorDe(cancion.titulo)

  return (
    <li className="cancion">
      <div
        className="portada"
        style={{ background: `linear-gradient(135deg, hsl(${tono} 70% 55%), hsl(${tono + 50} 70% 35%))` }}
      >
        {cancion.titulo.charAt(0).toUpperCase()}
      </div>
      <div className="cancion-info">
        <strong>{cancion.titulo}</strong>
        <span>{cancion.artista}</span>
      </div>
      <span className="etiqueta">{cancion.genero}</span>
      <span className="duracion">{cancion.duracion}</span>
      {onEliminar && (
        <button className="btn-quitar" onClick={() => onEliminar(cancion.id)} aria-label={`Quitar ${cancion.titulo}`}>
        <FiTrash2 />
        </button>
      )}
    </li>
  )
}

export default SongCard

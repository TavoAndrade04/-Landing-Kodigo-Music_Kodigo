import { useState } from 'react'
import { generos } from '../data/canciones'

const vacio = { titulo: '', artista: '', genero: '', duracion: '' }

function SongForm({ onAgregar }) {
  const [datos, setDatos] = useState(vacio)
  const [errores, setErrores] = useState({})
  const [exito, setExito] = useState(false)

  const cambiar = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value })
    setExito(false)
  }

  const validar = () => {
    const nuevos = {}
    if (datos.titulo.trim().length < 2) nuevos.titulo = 'Escribe el título de la canción (mínimo 2 letras).'
    if (datos.artista.trim().length < 2) nuevos.artista = 'Escribe el nombre del artista.'
    if (!datos.genero) nuevos.genero = 'Elige un género.'
    if (!/^\d{1,2}:[0-5]\d$/.test(datos.duracion.trim())) nuevos.duracion = 'Usa el formato minutos:segundos, por ejemplo 3:45.'
    return nuevos
  }

  const enviar = (e) => {
    e.preventDefault()
    const nuevos = validar()
    setErrores(nuevos)
    if (Object.keys(nuevos).length > 0) return // hay errores, no se envía

    onAgregar({
      titulo: datos.titulo.trim(),
      artista: datos.artista.trim(),
      genero: datos.genero,
      duracion: datos.duracion.trim(),
    })
    setDatos(vacio)
    setExito(true)
  }

  return (
    <form className="formulario" onSubmit={enviar} noValidate>
      <h2>Agregar canción</h2>

      <label>
        Título
        <input name="titulo" value={datos.titulo} onChange={cambiar} placeholder="Ej: Imagine" />
        {errores.titulo && <small className="error">{errores.titulo}</small>}
      </label>

      <label>
        Artista
        <input name="artista" value={datos.artista} onChange={cambiar} placeholder="Ej: John Lennon" />
        {errores.artista && <small className="error">{errores.artista}</small>}
      </label>

      <label>
        Género
        <select name="genero" value={datos.genero} onChange={cambiar}>
          <option value="">Selecciona uno</option>
          {generos.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
        {errores.genero && <small className="error">{errores.genero}</small>}
      </label>

      <label>
        Duración
        <input name="duracion" value={datos.duracion} onChange={cambiar} placeholder="3:45" />
        {errores.duracion && <small className="error">{errores.duracion}</small>}
      </label>

      <button type="submit" className="btn">Guardar canción</button>
      {exito && <p className="exito">¡Listo! La canción ya está en tu biblioteca.</p>}
    </form>
  )
}

export default SongForm

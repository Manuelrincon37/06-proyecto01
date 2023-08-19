/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { saveInStorage } from '../helpers/saveInStorage'

// eslint-disable-next-line react/prop-types
export const Crear = ({ setListState }) => {
  const [movieState, setMovieState] = useState({
    title: '',
    description: ''
  })
  const conmponentTilte = 'Añadir pelicula'

  const { title, description } = movieState

  const getFormData = (e) => {
    e.preventDefault()
    // Get form data
    const target = e.target
    const title = target.title.value
    const description = target.description.value

    // Create Object
    const movie = {
      id: uuidv4(),
      title,
      description
    }
    console.log(movie)
    // Save state
    setMovieState(movie)
    // Set list state
    setListState(items => {
      return [movie, ...items]
    })
    // Save in local storage
    saveInStorage('movies', movie)
    console.log(movie)
  }

  return (
    <div className="add">
        <h3 className="title">{conmponentTilte}</h3>
        <strong>{(title && description) && 'Haz añadido: ' + title}</strong>
        <form onSubmit={getFormData}>
            <input
                type="text"
                id="title"
                name='title'
                placeholder="titulo"/>

            <textarea
                id='description'
                name='description'
                placeholder="descripcion"></textarea>

            <button
                type="submit"
                id='save'
                value='Guardar'>Guardar</button>
        </form>
    </div>
  )
}

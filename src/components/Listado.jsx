/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Editar } from './Editar'

// eslint-disable-next-line react/prop-types
export const Listado = ({ listState, setListState }) => {
  // const [listState, setListState] = useState([])
  const [edit, setEdit] = useState(0)
  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = () => {
    const movies = JSON.parse(localStorage.getItem('movies'))
    setListState(movies)
    return movies
  }

  const deleteMovie = (id) => {
    // get movies sotored in local storage
    const storedMmovies = getMovies()
    // filter movies to delete the selected
    const newMoviesArray = storedMmovies.filter((movie) => movie.id !== id)
    // Set new list state
    setListState(newMoviesArray)
    // Update local storage
    localStorage.setItem('movies', JSON.stringify(newMoviesArray))
  }

  return (
    <>
    { listState !== null
    /* eslint-disable-next-line react/prop-types */
      ? listState.map(movie => {
        return (
      <article key={movie.id} className="movie-item">

        <h3 className="title">{movie.title}</h3>
        <p className="description"><strong>{movie.description}</strong></p>

        <button className="edit" onClick={() => { setEdit(movie.id) }}>Editar</button>
        <button className="delete" onClick={ () => { deleteMovie(movie.id) }}>Borrar</button>

        {/* render edit form */}
        {edit === movie.id && (
          <Editar movie ={movie} getMovies = {getMovies}
            setListState={setListState}
            setEdit={setEdit}/>
        )}

      </article>
        )
      })
      : <h2>No hay peliculas para mostrar</h2>
  }

    </>
  )
}

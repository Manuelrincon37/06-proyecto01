/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

export const Buscador = ({ listState, setListState }) => {
  const [search, setSearch] = useState('')
  const [notFound, setNotFound] = useState(false)
  const searchMovie = (e) => {
    // Create & update state
    setSearch(e.target.value)

    // Filter to mach search
    let foundMovies = listState.filter(movie => {
      return movie.title.toLowerCase().includes(search.toLowerCase())
    })

    // Chek if is a mach
    // Set value to local storage
    if (search.length <= 1 || foundMovies <= 0) {
      foundMovies = JSON.parse(localStorage.getItem('movies'))
      setNotFound(true)
    } else {
      setNotFound(false)
    }

    // Update state with filtered match
    setListState(foundMovies)
  }
  return (
    <div className="search">
        <h3 className="title">Buscador: {search}</h3>
        {(notFound && search.length > 1) &&
        <span className="not-found">No se han encontrado coincidencias</span>
        }:
            <form action="">
                <input type="text"
                      name='search'
                      autoComplete='off'
                      onChange={searchMovie}/>
                <button>Buscar</button>
            </form>
    </div>
  )
}

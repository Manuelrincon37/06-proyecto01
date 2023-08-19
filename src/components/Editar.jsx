/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

export const Editar = ({ movie, getMovies, setListState, setEdit }) => {
  const componenTitle = 'Ediar película'

  const saveEdit = (e, id) => {
    e.preventDefault()
    // Get form data
    const FormData = e.target

    // get object index of movie to edit
    const storedMovies = getMovies()
    const index = storedMovies.findIndex(movie => movie.id === id)

    // Create object with index returned
    const updatedMovie = {
      id,
      title: FormData.title.value,
      description: FormData.description.value
    }

    // Update item by index
    storedMovies[index] = updatedMovie

    // Save new object array in localstorage
    localStorage.setItem('movies', JSON.stringify(storedMovies))

    // Update states
    setListState(storedMovies)
    setEdit(0)
  }
  return (
    <div className='editForm'>
        <h3 className='title'>{componenTitle}</h3>
        <form onSubmit={e => saveEdit(e, movie.id)}>

            <input className='editedTitle'
                type="text"
                name='title'
                defaultValue= {movie.title}
                placeholder='titulo'/>

            <textarea className='editedDescription'
                name="description"
                defaultValue={movie.description}/>

            <input className='edit'
                type='submit'
                value='Actualizar'/>
        </form>
    </div>
  )
}

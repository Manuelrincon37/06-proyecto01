import { useState } from 'react'
import { Buscador } from './components/Buscador'
import { Crear } from './components/Crear'
import { Listado } from './components/Listado'

function App () {
  const [listState, setListState] = useState([])

  return (
    <>
<div className="layout">
        {/* Header */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>Mis Pelis</h1>
        </header>
        {/* Nav bar */}
        <nav className="nav">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Peliculas</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
        {/* Main */}
        <section className="content">
            {/* Movies */}
          <Listado listState = {listState} setListState={setListState} />
        </section>
        {/* Lateral bar */}
        <aside className="lateral">
            <Buscador listState = {listState} setListState={setListState}/>
            <Crear setListState={setListState} />
        </aside>
        {/* Footer */}
        <footer className="footer">
            &copy; Projecto personal - <a href="https://github.com/Manuelrincon37">GitHub</a>
        </footer>
    </div>
    </>
  )
}

export default App

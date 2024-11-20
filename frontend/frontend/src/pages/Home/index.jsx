
import { useEffect } from 'react'
import './Style.css'
import Trash from '../../assets/Trash.png'
import api from '../../services/api'
function Home() {

let Musicas = []

async function getMusicas(){
  Musicas await api.get('/musicas')
}

useEffect(() => {
  getMusicas()
}, [])

  return (

    <div className='container'>
      <form>
        <h1>Monte sua playlist!</h1>
        <input placeholder="Música" name='nome' type='text' />
        <input placeholder="Artista" name='artista' type='text' />
        <input placeholder="Quantas estrelas ela merece?" name='estrelas' type='number' />
        <button type='button'>Adicionar</button>
      </form>

      {Musicas.map((Musica) => (

        <div key={Musica.id} className='card'> 
          <div>
            <p>Nome: <span>{Musica.name}</span></p>
            <p>Artista: <span>{Musica.artist}</span></p>
            <p>Estrelas: <span>{Musica.grade}</span></p>
          </div>
          <button><img src={Trash} /></button>
        </div>

      ))}

    </div>

  )
}

export default Home

import Actor from './ActorList'
import Actress from './ActressList'
import { useState } from 'react'

function App() {

  const [card, setCard] = useState(null)

  return (
    <div className="container">
      <Actor onCard={setCard} />
      <Actress onCard={setCard} />

      {
        card && (
          <div className='position-fixed w-10 h-100 top-0 start-0 bg-black bg-opacity-50 d-flex align-items-center justify-concent-center p-3'>
            <div className='bg-white p-4 rounded shadow-lg'>
              <h2>{card.name}</h2>
              <button onClick={() => setCard(null)} />

            </div>
            <p className='mb-2'>Nazionalità: {card.nationality}</p>
            <p className='mb-3'>Anno: {card.birth_years}</p>
            <p className='mb-3'> {card.bio}</p>
            <p className='mb-3'>Riconoscimenti: {card.awards}</p>
            {card.image && <img src={card.image} className='img-fluid rounded mb-2' />}
          </div>

        )
      }
    </div>
  )
}

export default App

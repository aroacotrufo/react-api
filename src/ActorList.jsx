import { useState, useEffect } from 'react'

function ActorList() {
    const [actors, setActors] = useState([])

    useEffect(() => {
        const url = 'https://lanciweb.github.io/demo/api/actors/'

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log('Dati Attori:', data)
                setActors(data)
            })


    }, [])

    return (
        <div className='mb-5'>
            <h1 className='text-center display-4 mb-5'>Lista Attori</h1>
            <div className='row g-4'>
                {actors.map(actors => (
                    <div key={actors.id} className='col-lg-4 col-md-6'>
                        <div className=' card h-100 shadow-sm'>
                            <h5> {actor.name}</h5>
                            <p>Nazionalità: {actor.nationality}</p>
                            <p>Anno: {actor.birth_years}</p>
                            <p>{actor.bio}</p>
                            <p>Riconoscimenti: {actor.awards}</p>
                            <img src={actor.image} />
                        </div>
                    </div>
                ))

                }

            </div>
        </div>
    )
}

export default ActorList

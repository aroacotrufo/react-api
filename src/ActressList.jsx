import { useState, useEffect } from 'react'

function ActressList() {

    const [actresses, setActresses] = useState([])

    useEffect(() => {
        const url = 'https://lanciweb.github.io/demo/api/actresses/'

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log('Dati Attrici', data)
                setActresses(data)
            })


    }, [])

    return (
        <div className='mb-5'>
            <h1 className='text-center display-4 mb-5'>Lista Attrici</h1>
            <div className='row g-4'>
                {actresses.map(actresses => (
                    <div key={actresses.id} className='col-lg-4 col-md-6'
                        onClick={() => onCard(actors)}>
                        <div className=' card h-100 shadow-sm'>
                            <h5> {actresses.name}</h5>
                            <p>Nazionalità: {actresses.nationality}</p>
                            <p>Anno: {actresses.birth_years}</p>
                            <p>{actresses.bio}</p>
                            <p>Riconoscimenti: {actresses.awards}</p>
                            <img src={actresses.image} />
                        </div>
                    </div>
                ))

                }

            </div>
        </div>
    )
}
export default ActressList
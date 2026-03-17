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
            <h1 className='text-center display-4 mb-5'>Lista Attori</h1>
            <div className='row g-4'>
                {actors.map(actress => (
                    <div key={actress.id} className='col-lg-4 col-md-6'>
                        <div className=' card h-100 shadow-sm'>
                            <h5> {actress.name}</h5>
                            <p>Nazionalità: {actress.nationality}</p>
                            <p>Anno: {actress.birth_years}</p>
                            <p>{actress.bio}</p>
                            <p>Riconoscimenti: {actress.awards}</p>
                            <img src={actress.image} />
                        </div>
                    </div>
                ))

                }

            </div>
        </div>
    )
}
export default ActressList
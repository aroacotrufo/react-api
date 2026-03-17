import { useState, useEffect } from 'react'

function App() {
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
        <h1>Lista Attori</h1>
    )
}

export default ActorList

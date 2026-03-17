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
        <h1>Lista Attrici</h1>
    )
}
export default ActressList
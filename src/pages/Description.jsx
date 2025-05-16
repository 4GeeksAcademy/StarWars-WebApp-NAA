import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Descripcion = () => {
    const { uid } = useParams()

    const [character, setCharacter] = useState()
    function descriptionApi() {

        fetch("https://www.swapi.tech/api/people/"+uid)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))

    }

    useEffect(() => {
        descriptionApi()
    }, []
    )

    return (
        <div>
            <h1>Descripcion del personaje</h1>
        </div>
    )

}

export default Descripcion
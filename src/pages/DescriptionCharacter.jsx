import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const DescripcionCharacter = () => {
    const { uid } = useParams()

    const [character, setCharacter] = useState()
    const [loading, setLoading] = useState(true)

    function descriptionCharacterApi() {
        fetch("https://www.swapi.tech/api/people/" + uid)
            .then(res => res.json())
            .then(data => {
                setCharacter(data.result.properties)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
                 })
    }

    useEffect(() => {
        descriptionCharacterApi()
    }, [])

    if (loading) {
        return <div className="container text-center mt-5 text-white fs-4">Loading character data...</div>
    }
        
    console.log(character);

    return (
        <div className="container text-center mt-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img
                        src="https://media.timeout.com/images/105863223/750/562/image.jpg"
                        className="img-fluid"
                        alt={character?.name}
                        style={{ maxHeight: "800px", maxWidth:"600px", objectFit: "cover" }}
                    />
                </div>
                <div className="col-md-6 text-start">
                    <h2 className="fw-bold" style={{ color: "brown" }}><u>{character?.name}</u></h2>
                    <p className="text-warning">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, cupiditate aliquam eligendi perferendis iste non delectus, minima animi rem quas natus ad quis corrupti accusantium distinctio quia quibusdam. Deserunt nobis tempora reiciendis fugit aperiam dolorem dolore facilis beatae eos, commodi, molestias voluptas esse repudiandae quam non perferendis. Sint, iure aut?
                    </p>
                </div>
            </div>

            <hr className="my-4 border-warning border-2" />

            <h4 className="row fw-bold" style={{ color: "gold" }} fs-5>
                <div className="col">
                    <p><u>Name</u></p>
                    <p className="text-white">{character?.name}</p>
                </div>
                <div className="col">
                    <p><u>Birth Year</u></p>
                    <p className="text-white">{character?.birth_year}</p>
                </div>
                <div className="col">
                    <p><u>Gender</u></p>
                    <p className="text-white">{character?.gender}</p>
                </div>
                <div className="col">
                    <p><u>Height</u></p>
                    <p className="text-white">{character?.height}</p>
                </div>
                <div className="col">
                    <p><u>Skin Color</u></p>
                    <p className="text-white">{character?.skin_color}</p>
                </div>
                <div className="col">
                    <p><u>Eye Color</u></p>
                    <p className="text-white">{character?.eye_color}</p>
                </div>
            </h4>
        </div>
    )


}

export default DescripcionCharacter
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const DescripcionPlanet = () => {
    const { uid } = useParams()

    const [planet, setPlanet] = useState()
    const [loading, setLoading] = useState(true)
    function descriptionPlanetApi() {
        fetch("https://www.swapi.tech/api/planets/" + uid)
            .then(res => res.json())
            .then(data => {
                setPlanet(data.result.properties)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
    }

    useEffect(() => {
        descriptionPlanetApi()
    }, [])

    if (loading) {
        return <div className="container text-center mt-5 text-white fs-4">Loading planet data...</div>
    }
    console.log(planet);

    return (
        <div className="container text-center mt-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img
                        src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/12/Best-Fictional-Planets-Dathomir-Star-Wars-Jedi-Fallen-Order.jpg"
                        className="img-fluid"
                        alt={planet?.name}
                        style={{ maxHeight: "800px", maxWidth:"600px", objectFit: "cover" }}
                    />
                </div>
                <div className="col-md-6 text-start">
                    <h2 className="fw-bold" style={{ color: "brown" }}><u>{planet?.name}</u></h2>
                    <p className="text-warning">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, cupiditate aliquam eligendi perferendis iste non delectus, minima animi rem quas natus ad quis corrupti accusantium distinctio quia quibusdam. Deserunt nobis tempora reiciendis fugit aperiam dolorem dolore facilis beatae eos, commodi, molestias voluptas esse repudiandae quam non perferendis. Sint, iure aut?
                    </p>
                </div>
            </div>

            <hr className="my-4 border-warning border-2" />

            <h4 className="row fw-bold" style={{ color: "gold" }} fs-5>
                <div className="col">
                    <p><u>Name</u></p>
                    <p className="text-white">{planet?.name}</p>
                </div>
                <div className="col">
                    <p><u>Climate</u></p>
                    <p className="text-white">{planet?.climate}</p>
                </div>
                <div className="col">
                    <p><u>Population</u></p>
                    <p className="text-white">{planet?.population}</p>
                </div>
                <div className="col">
                    <p><u>Orbital Period</u></p>
                    <p className="text-white">{planet?.orbital_period}</p>
                </div>
                <div className="col">
                    <p><u>Rotation Period</u></p>
                    <p className="text-white">{planet?.rotation_period}</p>
                </div>
                <div className="col">
                    <p><u>Diameter</u></p>
                    <p className="text-white">{planet?.diameter}</p>
                </div>
            </h4>
        </div>
    )


}

export default DescripcionPlanet
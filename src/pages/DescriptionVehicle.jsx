import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const DescripcionVehicle = () => {
    const { uid } = useParams()

    const [vehicle, setVehicle] = useState()
    const [loading, setLoading] = useState(true)

    function descriptionVehicleApi() {
        fetch("https://www.swapi.tech/api/vehicles/" + uid)
            .then(res => res.json())
            .then(data => {
                setVehicle(data.result.properties)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
                 })
    }

    useEffect(() => {
        descriptionVehicleApi()
    }, [])

    if (loading) {
        return <div className="container text-center mt-5 text-white fs-4">Loading vehicle data...</div>
    }
        
    console.log(vehicle);

    return (
        <div className="container text-center mt-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img
                        src="https://i.redd.it/xxf812ccuwhx.jpg"
                        className="img-fluid"
                        alt={vehicle?.name}
                        style={{ maxHeight: "800px", maxWidth:"600px", objectFit: "cover" }}
                    />
                </div>
                <div className="col-md-6 text-start">
                    <h2 className="fw-bold" style={{ color: "brown" }}><u>{vehicle?.name}</u></h2>
                    <p className="text-warning">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, cupiditate aliquam eligendi perferendis iste non delectus, minima animi rem quas natus ad quis corrupti accusantium distinctio quia quibusdam. Deserunt nobis tempora reiciendis fugit aperiam dolorem dolore facilis beatae eos, commodi, molestias voluptas esse repudiandae quam non perferendis. Sint, iure aut?
                    </p>
                </div>
            </div>

            <hr className="my-4 border-warning border-2" />

            <h4 className="row fw-bold" style={{ color: "gold" }} fs-5>
                <div className="col">
                    <p><u>Name</u></p>
                    <p className="text-white">{vehicle?.name}</p>
                </div>
                <div className="col">
                    <p><u>Created</u></p>
                    <p className="text-white">{vehicle?.created}</p>
                </div>
                <div className="col">
                    <p><u>Edited</u></p>
                    <p className="text-white">{vehicle?.edited}</p>
                </div>
                <div className="col">
                    <p><u>Cargo Capacity</u></p>
                    <p className="text-white">{vehicle?.cargo_capacity}</p>
                </div>
                <div className="col">
                    <p><u>Passengers</u></p>
                    <p className="text-white">{vehicle?.passengers}</p>
                </div>
                <div className="col">
                    <p><u>Max Speed</u></p>
                    <p className="text-white">{vehicle?.max_atmosphering_speed}</p>
                </div>
            </h4>
        </div>
    )


}

export default DescripcionVehicle
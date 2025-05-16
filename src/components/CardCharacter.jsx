import React from "react"
import { useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

const CharacterCard = ({ people }) => {
    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()


    const isfavorite = store.favorites.includes(people.name)
    
    const favorite = () => {
        if (isfavorite === true) {
            const action = {
                type: "removeFavorite",
                payload: people.name
            }
            dispatch(action)
        }
        else {
            const action = {
                type: "newFavorite",
                payload: people.name
            }
            dispatch(action)
        }

    }

    return (

        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="data:image/png;base64,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" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{people.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <button className="btn btn-primary" onClick={() => { navigate(`/descripcion/${people.uid}`) }}>Go Somewhere</button>
                    <button className="btn btn-warning" onClick={favorite}>like</button>
                </div>
            </div>

        </div>
    )

}

export default CharacterCard

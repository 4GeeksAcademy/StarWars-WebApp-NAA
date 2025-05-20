import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const PlanetCard = ({ planet }) => {
    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer();

    const isfavorite = store.favorites.some(fav => fav.name === planet.name);

    const [details, setDetails] = useState(null);

    const favorite = () => {
        if (isfavorite) {
            dispatch({ type: "removeFavorite", payload: planet.name });
        } else {
            dispatch({ type: "newFavorite", payload: planet.name });
        }
    };

    useEffect(() => {
        fetch(planet.url)
            .then(res => res.json())
            .then(data => setDetails(data.result.properties))
            .catch(err => console.error(err));
    }, [planet.url]);

    return (
        <div className="card-padding m-5">
            <div className="card" style={{ backgroundColor: "black", width: "400px", height: "auto", border: '5px solid gold' }}>
                <img src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/12/Best-Fictional-Planets-Dathomir-Star-Wars-Jedi-Fallen-Order.jpg" />
                <div className="card-body">
                    <h3 className="card-name" style={{ color: "gold" }}>
                        <strong><u>{planet.name}</u></strong>
                    </h3>
                    <p className="card-desc" style={{ color: "white" }}>
                        <ul>
                            <li><strong>Population:</strong> {details?.population || "Loading..."}</li>
                            <li><strong>Terrain:</strong> {details?.terrain || "Loading..."}</li>
                        </ul>
                    </p>
                    <div className="d-flex justify-content-between">
                        <button
                            type="button"
                            className="btn btn-outline-primary "
                            onClick={() => navigate(`/descripcion/planeta/${planet.uid}`)}
                        >
                            Learn More!
                        </button>
                        <button
                            className={`btn ${isfavorite ? "btn-warning" : "btn-outline-warning"} rounded`}
                            onClick={favorite}
                            style={{ width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}
                        >
                            <i className={`bi ${isfavorite ? "bi-heart-fill" : "bi-heart"}`}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanetCard;


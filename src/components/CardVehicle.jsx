import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const VehicleCard = ({ vehicle }) => {
    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer();

    const isfavorite = store.favorites.some(fav => fav.name === vehicle.name);

    const [details, setDetails] = useState(null);

    const favorite = () => {
        if (isfavorite) {
            dispatch({ type: "removeFavorite", payload: vehicle.name });
        } else {
            dispatch({ type: "newFavorite", payload: vehicle.name });
        }
    };

    useEffect(() => {
        fetch(vehicle.url)
            .then(res => res.json())
            .then(data => setDetails(data.result.properties))
            .catch(err => console.error(err));
    }, [vehicle.url]);

    return (
        <div className="card-padding m-5">
            <div className="card" style={{ backgroundColor: "black", width: "400px", height: "auto", border: '5px solid gold' }}>
                <img src="https://i.redd.it/xxf812ccuwhx.jpg" />
                <div className="card-body">
                    <h3 className="card-name" style={{ color: "gold" }}>
                        <strong><u>{vehicle.name}</u></strong>
                    </h3>
                    <p className="card-desc" style={{ color: "white" }}>
                        <ul>
                            <li><strong>Creation:</strong> {details?.created || "Loading..."}</li>
                            <li><strong>Speed:</strong> {details?.max_atmosphering_speed || "Loading..."}</li>
                            <li><strong>Cost:</strong> {details?.cost_in_credits || "Loading..."}</li>
                        </ul>
                    </p>
                    <div className="d-flex justify-content-between">
                        <button
                            type="button"
                            className="btn btn-outline-primary "
                            onClick={() => navigate(`/descripcion/vehiculo/${vehicle.uid}`)}
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

export default VehicleCard;

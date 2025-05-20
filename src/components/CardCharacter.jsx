import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const CharacterCard = ({ people }) => {
	const navigate = useNavigate();
	const { store, dispatch } = useGlobalReducer();

	const isfavorite = store.favorites.some(fav => fav.name === people.name);

	const [details, setDetails] = useState(null);

	const favorite = () => {
		if (isfavorite) {
			dispatch({ type: "removeFavorite", payload: people.name });
		} else {
			dispatch({ type: "newFavorite", payload: people.name });
		}
	};

	useEffect(() => {
		fetch(people.url)
			.then(res => res.json())
			.then(data => setDetails(data.result.properties))
			.catch(err => console.error(err));
	}, [people.url]);

	return (
		<div className="card-padding m-5">
			<div className="card" style={{ backgroundColor: "black", width: "400px", height: "auto", border: '5px solid gold' }}>
				<img src="https://media.timeout.com/images/105863223/750/562/image.jpg" />
				<div className="card-body">
					<h3 className="card-name" style={{ color: "gold" }}>
						<strong><u>{people.name}</u></strong>
					</h3>
					<p className="card-desc" style={{ color: "white" }}>
						<ul>
							<li><strong>Gender:</strong> {details?.gender || "Loading..."}</li>
							<li><strong>Hair Color:</strong> {details?.hair_color || "Loading..."}</li>
							<li><strong>Eye Color:</strong> {details?.eye_color || "Loading..."}</li>
						</ul>
					</p>
					<div className="d-flex justify-content-between">
						<button
							type="button"
							className="btn btn-outline-primary "
							onClick={() => navigate(`/descripcion/personaje/${people.uid}`)}
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

export default CharacterCard;


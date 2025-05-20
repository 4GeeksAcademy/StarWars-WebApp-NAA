import { useEffect, useState } from "react";
import CharacterCard from "../components/CardCharacter.jsx";
import PlanetCard from "../components/CardPlanet.jsx";
import VehicleCard from "../components/CardVehicle.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	const [loadingCharacters, setLoadingCharacters] = useState(true);
	const [loadingPlanets, setLoadingPlanets] = useState(true);
	const [loadingVehicles, setLoadingVehicles] = useState(true);

	const apiPersonajes = () => {
		fetch("https://www.swapi.tech/api/people/")
			.then(res => res.json())
			.then(data => {
				dispatch({
					type: "set_personajes",
					payload: { personaje: data.results }
				});
				setLoadingCharacters(false);
			})
			.catch(err => {
				console.error("Character fetch error:", err);
				setLoadingCharacters(false);
			});
	};

	const apiPlanetas = () => {
		fetch("https://www.swapi.tech/api/planets/")
			.then(res => res.json())
			.then(data => {
				dispatch({
					type: "set_planetas", 
					payload: { planeta: data.results }
				});
				setLoadingPlanets(false);
			})
			.catch(err => {
				console.error("Planet fetch error:", err);
				setLoadingPlanets(false);
			});
	};

	const apiVehiculos = () => {
		fetch("https://www.swapi.tech/api/vehicles/")
			.then(res => res.json())
			.then(data => {
				dispatch({
					type: "set_vehiculos",
					payload: { vehiculo: data.results }
				});
				setLoadingVehicles(false);
			})
			.catch(err => {
				console.error("Vehicle fetch error:", err);
				setLoadingVehicles(false);
			});
	};

	useEffect(() => {
		apiPersonajes();
		apiPlanetas();
		apiVehiculos();
	}, []);

	return (
		<>
			<div className="CharactersSection m-5" style={{ backgroundColor: "black" }}>
				<h1 className="card-padding m-1" style={{ color: "brown" }}>
					<strong><u>Characters</u></strong>
				</h1>
				<div className="d-flex flex-row overflow-scroll">
					{loadingCharacters ? (
						<div className="text-white p-3">Loading characters...</div>
					) : (
						store.character.map((value, index) => (
							<CharacterCard key={index} people={value} />
						))
					)}
				</div>
			</div>

			<div className="PlanetsSection m-5" style={{ backgroundColor: "black" }}>
				<h1 className="card-padding m-1" style={{ color: "brown" }}>
					<strong><u>Planets</u></strong>
				</h1>
				<div className="d-flex flex-row overflow-scroll">
					{loadingPlanets ? (
						<div className="text-white p-3">Loading planets...</div>
					) : (
						store.planet.map((value, index) => (
							<PlanetCard key={index} planet={value} />
						))
					)}
				</div>
			</div>

			<div className="VehiclesSection m-5" style={{ backgroundColor: "black" }}>
				<h1 className="card-padding m-1" style={{ color: "brown" }}>
					<strong><u>Vehicles</u></strong>
				</h1>
				<div className="d-flex flex-row overflow-scroll">
					{loadingVehicles ? (
						<div className="text-white p-3">Loading vehicles...</div>
					) : (
						store.vehicle.map((value, index) => (
							<VehicleCard key={index} vehicle={value} />
						))
					)}
				</div>
			</div>
		</>
	);
};
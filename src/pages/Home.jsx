import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();


	function apiPersonajes() {

		fetch("https://www.swapi.tech/api/people/")
			.then(res => res.json())
			.then((data) => {
				dispatch({
					type: "set_personajes:",
					payload: { personaje: data.results }
				})
			})
				
			.catch(err => console.error(err));
	}
   
	useEffect(() => {
		apiPersonajes()
	}, [])
	

	// useEffect(() => {
	// 	fetch("https://www.swapi.tech/api/planets/")
	// 		.then(res => res.json())
	// 		.then(data => console.log(data.results))
	// 		.catch(err => console.error(err));
	// }, []);

	return (
		<div className="container">
			<h1>Personajes!!</h1>
		</div>

	);
};
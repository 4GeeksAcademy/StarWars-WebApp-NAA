import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()

	const removeFavorite = (name) => {
		dispatch({
			type: "removeFavorite",
			payload: name
		});
	};

	return (
		<nav className="navbar" style={{ backgroundColor: "black", width: "100%" }}>
			<div className="container">
				<Link to="/">
					<img
						className="logo"
						src="https://pngimg.com/d/star_wars_logo_PNG11.png"
						style={{ maxHeight: "100px", width: "auto" }}
					/>
				</Link>
				<div className="ml-auto">
					<div className="btn-group">
						<button type="button" className="btn btn-outline-warning dropdown-toggle position-relative" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
							{store.favorites.length > 0 && (
								<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
									{store.favorites.length}
								</span>
							)}
						</button>

						<ul className="dropdown-menu dropdown-menu-end">
							{store.favorites && store.favorites.length > 0 ? (
								store.favorites.map((fav, index) => (
									<li
										key={index}
										className="dropdown-item d-flex justify-content-between align-items-center"
									>
										<span>{typeof fav === 'string' ? fav : fav.name}</span>
										<button className="btn btn-sm btn-outline-warning m-2"
											onClick={() =>
												removeFavorite(typeof fav === 'string' ? fav : fav.name)
											}>
											<i class="bi bi-trash3-fill"></i>
										</button>
									</li>
								))
							) : (
								<li>
									<span className="dropdown-item">No Favorites</span>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		
		</nav>
	)
}
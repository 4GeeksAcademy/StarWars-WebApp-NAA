export const initialStore = () => {
  return {
    character: [],
    planet: [],
    vehicle: [],
    favorites: []
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_personajes": {
      const { personaje } = action.payload;
      return {
        ...store,
        character: personaje
      };
    }

    case "set_planetas": {
      const { planeta } = action.payload;
      return {
        ...store,
        planet: planeta
      };
    }

    case "set_vehiculos": {
      const { vehiculo } = action.payload;
      return {
        ...store,
        vehicle: vehiculo
      };
    }

    case "newFavorite": {
      const nameToAdd = action.payload;

      // Check if already in favorites
      const alreadyInFavorites = store.favorites.some(fav => fav.name === nameToAdd);
      if (alreadyInFavorites) return store;

      // Find full character object by name
      const characterObj = store.character.find(char => char.name === nameToAdd);
      const planetObj = store.planet.find(plan => plan.name === nameToAdd);
      const vehicleObj = store.vehicle.find(veh => veh.name === nameToAdd);

      if (!characterObj && !planetObj && !vehicleObj) return store;

      return {
        ...store,
        favorites: [...store.favorites, characterObj || planetObj || vehicleObj]
      };
    }

    case "removeFavorite": {
      const nameToRemove = action.payload;
      return {
        ...store,
        favorites: store.favorites.filter(fav => fav.name !== nameToRemove)
      };
    }

    default:
      throw new Error("Unknown action.");
  }

}
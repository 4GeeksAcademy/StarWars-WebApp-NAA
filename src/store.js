export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    // saludo:"",
    character: [],
    favorites: []
    // vehiculos:[]
  }
}

export default function storeReducer(store, action = {}) {

  switch (action.type) {
    case 'add_task':
      const { id, color } = action.payload;
      return {
        ...store,
        todos: store.todos.map((todo) => (
          todo.id === id ? { ...todo, background: color } : todo
        ))
      };

    /// nuestro

    case "set_personajes":
      const { personaje } = action.payload
      return {
        ...store,
        character: personaje
      }

    /// agregar favorito

    case "newFavorite":
      const addFavorite = action.payload
      return {
        ...store, favorites: addFavorite
      }


    // case "removeFavorite":
    //   return {
    //     ...store,
    //     favorites: store.favorites.filter(name => name !== action.payload)
    //   };

    default:

      throw new Error("Unknown action.");
  }
}

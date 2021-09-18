import { createContext, useState } from "react";

const FavouriteContext = createContext({
  favourites: [],

  addFavourite: (favouriteFood) => {},
  removeFavourite: (foodID) => {},
  isFavourite: (foodID) => {},
});

export function FavouriteContextProvider(props) {
  const [userFavourite, setUserFavourites] = useState([]);

  function addFavouritesHandler(favouriteFood) {
    //passing a function to state updating functin. And that function will allways get the latest state snapshot

    setUserFavourites((prevUserFavourite) => {
      return prevUserFavourite.concat(favouriteFood);
    });
  }

  function removeFavouritesHandler(foodID) {
    setUserFavourites((prevUserFavourite) => {
      //Filter returns a new array where we can filter out items
      // I am filtering out foods that have the same id as the function parameter

      return prevUserFavourite.filter((food) => food.id !== foodID);
    });
  }

  function isFavouriteHandler(foodID) {
    return userFavourite.some((food) => food.id === foodID);
  }

  const context = {
    favourites: userFavourite,
    addFavourite: addFavouritesHandler,
    removeFavourite: removeFavouritesHandler,
    isFavourite: isFavouriteHandler,
  };
  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContext;

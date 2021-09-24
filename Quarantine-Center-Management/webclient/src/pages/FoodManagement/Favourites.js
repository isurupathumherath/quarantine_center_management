import { useContext, useState, useEffect } from "react";
import uniqid from "uniqid";
import axios from "axios";
import Modal from "react-modal";
import OrderContext from "../../components/FoodManagement/store/orderContext";
import FavouritesToCart from "../../components/FoodManagement/FavouritesToCart";
export default function Favourites() {
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/orderdetails/getUserbyid/111")
      .then((res) => {
        setFavourites(res.data.Favourites);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <div>
      <h1>My orders</h1>
      <div className="row">
        {favourites.map((post) => (
          <FavouritesToCart
            id={post.id}
            name={post.name}
            price={post.price}
            image={post.image}
            type={post.type}
            des={post.description}
          />
        ))}
      </div>
    </div>
  );
}

import { useContext, useState, useEffect } from "react";
import uniqid from "uniqid";
import axios from "axios";
import Modal from "react-modal";
import OrderContext from "../../components/FoodManagement/store/orderContext";

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);
  const orderedCtx = useContext(OrderContext);
  const isOrderd = orderedCtx.isOrdered();
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

  function toogleOrderStatusHandler(id, price, name, image, desc) {
    if (isOrderd) {
      orderedCtx.removeOrder(id);
    } else {
      orderedCtx.addOrder({
        id: id,
        price: price,
        name: name,
        image: image,
        status: 1,
        description: desc,
      });
    }
  }

  function removeFavourite(id) {
    axios
      .put(
        `http://localhost:8000/orderDetails/deletefromfavourite/613b2cac1aaf8d0fdcf35ff3/${id}`
      )
      .then(() => {
        alert("Removed from favourites");
      })
      .catch((err) => {
        alert(err.message);
        alert("asd");
      });

    window.location.reload();
  }

  return (
    <div>
      <div className="row">
        {console.log(favourites)}
        {favourites.map((post) => (
          <div className="col-md-3">
            <div class="card" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={`img/${post.image}`}
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">{post.name}</h4>

                <h5>Price : {post.price}</h5>
                <h5>Type : {post.type}</h5>
                <h5>Description : {post.description}</h5>
                <div className="row">
                  <div classname="col-sm-3">
                    <button
                      class="btn btn-primary"
                      onClick={() => removeFavourite(post.id)}
                    >
                      Remove from favourite
                    </button>
                  </div>

                  <div classname="col-sm-3">
                    <button
                      onClick={toogleOrderStatusHandler}
                      className="btn btn-primary"
                    >
                      {isOrderd ? "Cancel order" : "Order now"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1>My orders</h1>
    </div>
  );
}

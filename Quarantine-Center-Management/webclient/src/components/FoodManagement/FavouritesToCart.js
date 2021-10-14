import { useContext, useState, useEffect } from "react";
import axios from "axios";
import OrderContext from "../../components/FoodManagement/store/orderContext";

export default function FavouritesToCart(props) {
  const [favourites, setFavourites] = useState([]);
  const orderedCtx = useContext(OrderContext);
  const isOrderd = orderedCtx.isOrdered(props.id);
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

  function toogleOrderStatusHandler() {
    if (isOrderd) {
      orderedCtx.removeOrder(props.id);
    } else {
      orderedCtx.addOrder({
        id: props.id,
        price: props.price,
        name: props.name,
        image: props.image,
        status: 1,
        description: props.des,
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
        <div className="col-md-3">
          <div class="card" style={{ width: "18rem", marginLeft: "4px" }}>
            <img
              class="card-img-top"
              src={`img/${props.image}`}
              alt="Card image cap"
              style={{ height: "200px" }}
            />
            <div class="card-body">
              <h4 class="card-title">{props.name}</h4>

              <h5>Price : {props.price}</h5>
              <h5>Type : {props.type}</h5>
              <h5>Description : {props.des}</h5>
              <div className="input-group-append">
                <div className="row">
                  <div classname="col-sm-6">
                    <button
                      className="btn btn-danger"
                      style={{ width: "120px" }}
                      onClick={() => removeFavourite(props.id)}
                    >
                      Remove
                    </button>
                  </div>

                  <div classnameName="col-sm-6">
                    <button
                      onClick={toogleOrderStatusHandler}
                      className="btn btn-primary"
                      style={{ width: "120px", marginLeft: "10px" }}
                    >
                      {isOrderd ? "Cancel order" : "Order now"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

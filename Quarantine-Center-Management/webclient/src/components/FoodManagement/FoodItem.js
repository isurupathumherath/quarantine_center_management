import axios from "axios";
import Modal from "react-modal";
import React, { useState, useContext, useEffect } from "react";
import FoodComment from "./FoodComments";
import FoodDetails from "./FoodDetails";
import SendComment from "./SendComment";
import OrderContext from "./store/orderContext";
import FavouriteContext from "./store/FavouriteContext";
import FeatherIcon from "feather-icons-react";
import ModelCss from "../../assets/FoodManagement/css/modelCss.css";
import over from "../../assets/FoodManagement/css/over.css";
Modal.setAppElement("#root");

export default function FoodItem(props) {
  //getting access to the ordered context object in orderontext.js page
  const orderedCtx = useContext(OrderContext);
  const isOrderd = orderedCtx.isOrdered(props.id);
  const favouriteCtx = useContext(FavouriteContext);
  const isFavourite = favouriteCtx.isFavourite(props.id);
  let [user, setUser] = useState("");

  const [modelOpen, setmodelOpen] = useState(false);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/orderDetails/getUserbyid/111")
      .then((res) => {
        setUser(res.data);
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
        description: props.description,
      });
    }
  }

  function toogleFavouriteStatusHandler() {
    if (isFavourite) {
      favouriteCtx.removeFavourite(props.id);
      console.log(props.id);
      axios
        .put(
          `http://localhost:8000/orderDetails/deletefromfavourite/613b2cac1aaf8d0fdcf35ff3/${props.id}`
        )
        .then(() => {})
        .catch((err) => {
          alert(err.message);
          alert("asd");
        });
    } else {
      favouriteCtx.addFavourite({
        id: props.id,
        price: props.price,
        name: props.name,
        image: props.image,
        type: props.type,
        status: 1,
        description: props.description,
      });

      let favourite = favouriteCtx.favourites;

      if (favourite === favouriteCtx.favourites) {
      } else {
        let completeArray = [...user.Favourites, ...favourite];

        const ids = completeArray.map((o) => o.id);
        const filtered = completeArray.filter(
          ({ id }, index) => !ids.includes(id, index + 1)
        );
      }
      const newFood = {
        Favourites: favouriteCtx.favourites,
      };
      axios
        .put(
          `http://localhost:8000/orderDetails/updateusers/613b2cac1aaf8d0fdcf35ff3`,
          newFood
        )
        .then(() => {})
        .catch((err) => {
          alert(err.message);
          alert("asd");
        });
    }
  }

  // getting the required comments
  // functions regarding modal
  function modalOpen() {
    setmodelOpen(true);
    axios
      .get(`http://localhost:8000/comment/get/${props.id}`)
      .then((res) => {
        setComment(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  function modalClose() {
    setmodelOpen(false);
  }

  return (
    <div>
      {/* <div class="blog grid-blog">
        <a>
          <img
            class="img-fluid"
            src={`img/${props.image}`}
            alt="Food image"
            onClick={modalOpen}
            style={{
              width: "250px",
              height: "200px",
            }}
          />
        </a>

        <div class="blog-content">
          <div className="row">
            <div className="col-md-3">
              <a onClick={toogleFavouriteStatusHandler}>
                {isFavourite ? (
                  <FeatherIcon
                    icon="heart"
                    fill="red"
                    color="white"
                    style={{ stroke: "red" }}
                  />
                ) : (
                  <FeatherIcon
                    icon="heart"
                    borderColor="white"
                    style={{ stroke: "black" }}
                  />
                )}
              </a>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-3">
              <a onClick={toogleFavouriteStatusHandler}>
                <FeatherIcon icon="more-vertical" style={{ stroke: "black" }} />
              </a>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div> */}

      <div
        className="card Regular shadow"
        style={{ width: "22rem", marginLeft: "5px" }}
      >
        <div className="container7788">
          <img
            className="card-img-top"
            src={`img/${props.image}`}
            alt="Food image"
            onClick={modalOpen}
            style={{
              height: "200px",
              width: "100%",
            }}
          />
          <div class="overlay">{props.name}</div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <a onClick={toogleFavouriteStatusHandler}>
                {isFavourite ? (
                  <FeatherIcon
                    icon="heart"
                    fill="red"
                    color="white"
                    style={{ stroke: "red" }}
                  />
                ) : (
                  <FeatherIcon
                    icon="heart"
                    borderColor="white"
                    style={{ stroke: "black" }}
                  />
                )}
              </a>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-3">
              <a onClick={toogleFavouriteStatusHandler}>
                <FeatherIcon icon="more-vertical" style={{ stroke: "black" }} />
              </a>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>

      <Modal
        animation={true}
        isOpen={modelOpen}
        onRequestClose={modalClose}
        style={
          (ModelCss,
          {
            display: "flex",
            overlay: {
              backgroundColor: "black",
              opacity: "0.9",
              width: "100%",
              height: "70%",
              marginTop: "16%",
            },
            content: {
              width: "70%",
              height: "80%",
              margin: "auto",
              opacity: "1",
              borderStyle: "solid",
            },
          })
        }
      >
        <div className="row">
          <div
            className="card col-md-5"
            style={{
              overflowY: "initial",
            }}
          >
            <FoodDetails
              name={props.name}
              price={props.price}
              id={props.foodID}
              description={props.description}
              image={props.image}
              type={props.type}
            />
            <div className="btn-group">
              <button
                onClick={toogleOrderStatusHandler}
                className="btn btn-primary"
                style={{ width: "20%" }}
              >
                {isOrderd ? "Cancel order" : "Order now"}
              </button>

              <button
                onClick={modalClose}
                className="btn btn-danger"
                style={{
                  marginLeft: "10px",
                  width: "20%",
                }}
              >
                Close
              </button>
            </div>
            <br />
          </div>

          <div className="model-body col-md-7">
            <div
              style={{
                height: "350px",
                overflowY: "scroll",
              }}
            >
              {comment.map((post) => (
                <div key={post._id}>
                  <FoodComment
                    userID={post.userID}
                    foodID={post.foodID}
                    comment={post.comment}
                  />
                </div>
              ))}
            </div>

            <SendComment func={modalOpen} foodID={props.id} />
          </div>
        </div>
      </Modal>
    </div>
  );
}

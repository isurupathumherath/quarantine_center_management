import axios from "axios";
import Modal from "react-modal";
import React, { useState, useContext, useEffect } from "react";
import FoodComment from "./FoodComments";
import FoodDetails from "./FoodDetails";
import SendComment from "./SendComment";
import OrderContext from "./store/orderContext";
import FavouriteContext from "./store/FavouriteContext";
import FeatherIcon from "feather-icons-react";
import ModelCss from "./ui/modelCss.css";
Modal.setAppElement("#root");

export default function FoodItem(props) {
  //getting access to the ordered context object in orderontext.js page
  const orderedCtx = useContext(OrderContext);
  const isOrderd = orderedCtx.isOrdered(props.id);
  const favouriteCtx = useContext(FavouriteContext);
  const isFavourite = favouriteCtx.isFavourite(props.id);

  const [modelOpen, setmodelOpen] = useState(false);
  const [comment, setComment] = useState([]);

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
    } else {
      favouriteCtx.addFavourite({
        id: props.id,
        price: props.price,
        name: props.name,
        image: props.image,
        status: 1,
        description: props.description,
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
    <div
      className="card"
      style={{
        width: "250px",
        height: "330px",
        backgroundColor: "white",
        marginRight: "25px",
        boxShadow: "5px 5px 5px 5px #888888",
      }}
    >
      {/* <img
        src={`img/${props.image}`}
        onClick={modalOpen}
        className="card-img-top"
        alt="..."
        style={{
          height: "250px",
        }}
      />
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
              <FeatherIcon icon="more-vertical" style={{ stroke: "green" }} />
            </a>
          </div>
          <div className="col-md-2"></div>
        </div>

      </div> */}
      <div class="blog grid-blog">
        <div class="blog-image">
          <a>
            <img
              class="img-fluid"
              src={`img/${props.image}`}
              alt="Post Image"
              onClick={modalOpen}
              style={{
                width: "250px",
                height: "200px",
              }}
            />
          </a>
        </div>
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
                <FeatherIcon icon="more-vertical" style={{ stroke: "green" }} />
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
        style={{
          display: "flex",
          overlay: {
            backgroundColor: "black",
            opacity: "0.9",
          },
          content: {
            width: "800px",
            height: "450px",
            margin: "auto",
          },
        }}
        style={
          (ModelCss,
          {
            display: "flex",
            overlay: {
              backgroundColor: "black",
              opacity: "0.9",
              width: "1200px",
              height: "650px",
              margin: "auto",
            },
            content: {
              width: "800px",
              height: "450px",
              margin: "auto",
              borderStyle: "solid",
            },
          })
        }
      >
        <div className="row">
          <div
            className="card col-md-6"
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
            />
            <div className="row">
              <div className="col-md-5">
                <button
                  onClick={toogleOrderStatusHandler}
                  className="btn btn-primary"
                >
                  {isOrderd ? "Cancel order" : "Order now"}
                </button>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-5">
                <button onClick={modalClose} className="btn btn-danger">
                  Close
                </button>
              </div>
            </div>
            <br />
          </div>

          <div className="model-body col-md-6">
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

            <SendComment foodID={props.id} />
          </div>
        </div>
      </Modal>
    </div>
  );
}

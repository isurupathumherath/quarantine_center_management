import { useContext, useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
import OrderContext from "../../components/FoodManagement/store/orderContext";
import OrderedList from "../../components/FoodManagement/OrderedList";
import ConfirmOrder from "../../components/FoodManagement/ConfirmOrder";
import Modal from "react-modal";
import ModelCss from "../../components/FoodManagement/ui/modelCss.css";

export default function FoodCart() {
  const orderedCtx = useContext(OrderContext);
  // const [date1, setDate] = useState();
  const [order, setOrder] = useState([]);
  let [status, setStatus] = useState("5");

  const [modelOpen, setmodelOpen] = useState(false);
  const [price, setPrice] = useState("");

  let orderid;
  let fid;
  let p1;
  let content;
  let mdel;

  async function addOrder(orderid) {
    {
      // orderid.map((post) => (orderid = post.orderID));

      console.log("This is food cart");
      console.log(orderid);

      await axios
        .get(`http://localhost:8000/order/getbyorder/${orderid}`)
        .then((res) => {
          if (res.data != null) {
            setOrder(res.data);
            console.log("success");
            setStatus("1");
          }
        })
        .catch((err) => {
          alert(err);
          alert("asd");
        });
      // orderedCtx.orders.map((post) => {
      //   fid = post.id;
      //   p1 = post.price;

      // const orderDetails = {
      //   orderDetailID: uniqid(),
      //   foodID: fid,
      //   price: p1,
      //   orderID: orderid,
      //   status: 1,
      // };

      // axios
      //   .post("http://localhost:8000/orderdetails/", orderDetails)
      //   .then(() => {})
      //   .catch((err) => {
      //     alert(err.message);
      //     alert("Food didnt ordered");
      //   });
      // });

      setmodelOpen(true);
    }
  }

  function modalClose() {
    setmodelOpen(false);
    window.location.reload();
  }
  if (orderedCtx.totalOrders === 0) {
    content = <h5>You dont have any orders yet. </h5>;
  } else {
    content = <OrderedList order={orderedCtx.orders} />;
  }

  if (status === "1") {
    console.log(order);
    console.log(order.patientID);

    mdel = (
      <Modal
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
            },
          })
        }
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
      >
        <div className="row">
          <div className="col">
            <h4 className="card-title d-flex justify-content-center">
              Quarentine Center Management
            </h4>
            <h5 className="card-title">Contact Number: 011-2289485</h5>
            <hr />
          </div>
        </div>

        <div>
          <div className="row">
            <div className="col-md-4">
              <h5 className="card-title">Bill number: {order.orderID} </h5>
            </div>
            <div className="col-md-8">
              <h5 className="card-title">Ordered date: {order.orderedDate}</h5>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <h5
                className="card-title"
                style={{ textDecoration: "underline", fontWeight: "bold" }}
              >
                Food Item
              </h5>
            </div>

            <div className="col-md-5">
              <h5
                className="card-title"
                style={{ textDecoration: "underline", fontWeight: "bold" }}
              >
                Price{" "}
              </h5>
            </div>
            <hr />
          </div>
          {order.orderDetails.map((post) => {
            return (
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                  <h5 className="card-title">{post.name}</h5>
                </div>

                <div className="col-md-6">
                  <h5 className="card-title">Rs.{post.price}.00</h5>
                </div>
                <div className="col-md-3"></div>
              </div>
            );
          })}
          <div className="row">
            <div className="col-md-6"></div>
            <hr />
            <div className="col-md-6">
              <h5 className="card-title" style={{ color: "red" }}>
                Total : Rs.{order.total}.00
              </h5>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-3">
            <button onClick={modalClose} className="btn btn-primary">
              Print recipt
            </button>
          </div>
          <div className="col-md-2"></div>

          <div className="col-md-3">
            <button onClick={modalClose} className="btn btn-primary">
              Close
            </button>
          </div>
          <div className="col-md-2"></div>
        </div>
      </Modal>
    );
  } else {
    mdel = <p>ass</p>;
  }

  return (
    <div>
      <div>
        <h1>My orders</h1>
        <div className="row">
          <div className="col-md-6">{content}</div>

          <div className="col-md-6">
            <ConfirmOrder func={addOrder} order={orderedCtx.orders} />
          </div>
        </div>
        <div>{mdel}</div>
      </div>
    </div>
  );
}

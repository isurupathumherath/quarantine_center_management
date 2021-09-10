import "bootstrap/dist/css/bootstrap.css";
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import uniqid from "uniqid";
import DateTimePicker from "react-datetime-picker";
import "react-datepicker/dist/react-datepicker.css";
import OrderContext from "./store/orderContext";

export default function ConfirmOrder(props) {
  const [instructions, setInstruction] = useState("");
  const [deliveryDate, setDeliveryDate] = useState();
  const [orderDetails, setDetails] = useState("");
  let [oid, setOrderID] = useState("");
  const orderedCtx = useContext(OrderContext);

  useEffect(() => {
    setDetails(orderedCtx.orders);
  });

  // console.log(orderDetails);
  const totalPrice = props.order.reduce(
    (previousPrice, currentPrice) => previousPrice + currentPrice.price,
    0
  );

  async function confirmOrder(e) {
    e.preventDefault();
    oid = uniqid();
    // console.log(oid);
    const newOrder = {
      orderID: oid,
      patientID: "102",
      orderDate: new Date(),
      total: totalPrice,
      instructions,
      deliveryDate,
      status: 1,
      orderDetails,
    };

    await axios
      .post("http://localhost:8000/order/", newOrder)
      .then((res) => {
        if (res.status == 200) {
          props.func(oid);
        }
      })
      .catch((err) => {
        alert(err);
        alert("asd");
      });
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="card-header">
            <h4 className="card-title">
              Do you have any special instructions?
            </h4>
            <textarea
              cols="80"
              onChange={(e) => {
                setInstruction(e.target.value);
              }}
            />

            <h4 className="card-title">Select the delivery date</h4>
            <DateTimePicker onChange={setDeliveryDate} value={deliveryDate} />
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Delivery Details</div>
            <div className="card-header">
              <h4 className="card-title">Special title treatment</h4>
              <p className="card-text">
                For your convinience you may want to print out a recipt.
              </p>
              <h5>Delivery for,</h5>
              <p className="card-text">
                Patient ID : 101 <br />
                Name : Akila <br />
                Room-No : 202
              </p>

              <h4>Total price : Rs.{totalPrice}.00</h4>
              <button className="btn btn-primary" onClick={confirmOrder}>
                Confirm order
              </button>
            </div>
            <div className="card-footer text-muted">
              Have Questions about your order? <br /> <a href="#">Contact us</a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

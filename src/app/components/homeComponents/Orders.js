import React, { Component } from "react";
import update from "react-addons-update";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

import Sidebar from "../Sidebar";
import Slider from "@material-ui/core/Slider";
import OrderRating from "./orderRating";
import FooterBar from "../FooterBar";
import Navfooter from "../footer";
import axios from "axios";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [
        {
          orderId: 1,
          productId: 1,
          productName: "product1",
          image: "img1.jpg",
          quantity: 1,
          seller: "seller1",
          total: 100,
          status: "delivered",
          statusDate: "10/11/2021",
          rating: 3,
          feedback: "",
        },
        {
          orderId: 2,
          productId: 2,
          productName: "product2",
          image: "img2.jpg",
          quantity: 2,
          seller: "seller2",
          total: 200,
          status: "shipping",
          statusDate: "08/11/2021",
          rating: 0,
          feedback: "",
        },
        {
          orderId: 3,
          productId: 3,
          productName: "product3",
          image: "img3.jpg",
          quantity: 3,
          seller: "seller3",
          total: 300,
          status: "ordered",
          statusDate: "03/11/2021",
          rating: 0,
          feedback: "",
        },
        {
          orderId: 4,
          productId: 4,
          productName: "product4",
          image: "img4.jpg",
          quantity: 4,
          seller: "seller4",
          total: 400,
          status: "canceled",
          statusDate: "03/11/2021",
          rating: 0,
          feedback: "",
        },
      ],
      userid: "",
      newfeedback: "",
    };
  }
  usestyle = {
    width: "100%",
  };
  ratingsMarks = [
    {
      label: 0,
      value: 0,
    },
    {
      label: 1,
      value: 1,
    },
    {
      label: 2,
      value: 2,
    },
    {
      label: 3,
      value: 3,
    },
    {
      label: 4,
      value: 4,
    },
    {
      label: 5,
      value: 5,
    },
  ];
  componentDidMount() {
    var userid = JSON.parse(localStorage.getItem("user")).userid;
    this.setState({ userid: userid });
    axios.get("http://localhost:4000/orders/client/" + userid).then((res) => {
      this.setState({ order: res.data });
    });
  }
  statusSelectHandler(e, orderid) {
    var index = this.state.order.findIndex((e) => {
      return e.orderId == orderid;
    });
    console.log(e.target.value);
    var val = e.target.value;
    axios
      .post("http://localhost:4000/orders/client/updateStatus", {
        userid: this.state.userid,
        orderid: orderid,
        status: val,
        statusDate: Date().toLocaleString(),
      })
      .then((res) => {
        console.log(res.data);
      });
    // this.setState(
    //   update(this.state, {
    //     order: {
    //       [index]: {
    //         $status: val,
    //         $statusDate: Date().toLocaleString(),
    //       },
    //     },
    //   })
    // );
  }

  orders = () => {
    return <h1>No Orders</h1>;
  };
  displayorders = () => {
    if (this.state.order.length > 0) {
      return this.state.order.map((items, index) => (
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id={items.orderId}>
            <Typography style={this.usestyle}>
              <div
                className="my-3 p-3"
                style={{
                  background: "rgb(80, 205, 255)",
                  boxShadow: "2px 2px 7px 1px #1c6ea4",
                }}
                key={items.orderId}
              >
                <strong>Order ID: {items.orderId}</strong>
                <div className="row text-center">
                  <div className="col-md-2">{items.image}</div>
                  <div className="col-md-4">
                    <h1 style={{ color: "rgb(255, 64, 0)" }}>
                      {items.productName}
                    </h1>
                    Quantity: {items.quantity}
                    <br />
                    Consumer: {items.consumerName}
                  </div>
                  <div className="col-md-2">
                    <h3>Rs. {items.total}</h3>
                  </div>
                  <div className="col-md-4">
                    <select
                      className="custom-select custom-select-lg mb-3"
                      onChange={(e) =>
                        this.statusSelectHandler(e, items.orderId)
                      }
                    >
                      <option selected> {items.status}</option>
                      <option value="ordered">Ordered</option>
                      <option value="shipping">Shipping</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancled">Cancled</option>
                    </select>

                    <br />

                    {items.statusDate}
                  </div>
                </div>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ width: 300 }}>
              <Typography id="discrete-slider-small-steps" gutterBottom>
                Ratings
              </Typography>
              <Slider
                defaultValue={items.rating}
                ariaValueText={this.ratingsMarks.value}
                aria-labelledby="discrete-slider-custom"
                step={1}
                marks
                min={0}
                max={5}
                name={this.ratingsMarks.value}
                type="number"
                valueLabelDisplay="auto"
                // eslint-disable-next-line react/jsx-no-duplicate-props
                marks={this.ratingsMarks}
              />
            </div>
            <div style={{ width: 800, marginLeft: 20 }}>
              <div className="form-group mx-5 px-5">
                <label for="exampleFormControlTextarea1">Your Feedback</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={items.feedback}
                  disabled
                ></textarea>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      ));
    } else {
      return <h1>No orders yet</h1>;
    }
  };

  render() {
    return (
      <div className=" bg-light">
        <Sidebar />
        <div className="Orders " style={{ marginTop: 50, marginLeft: 150 }}>
          <center className="my-5">
            <h1>Orders</h1>
          </center>
          <div className="container ">{this.displayorders()}</div>
        </div>
        <FooterBar />
        <Navfooter />
      </div>
    );
  }
}

export default Orders;

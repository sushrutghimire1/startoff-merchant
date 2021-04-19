import React from "react";
import { Component } from "react";
import Sidebar from "../Sidebar";
import FooterBar from "../FooterBar";
import Navfooter from "../footer";
import axios from "axios";

class ordersview extends Component {
  constructor(props) {
    super(props);
    var id = this.props.match.params.id;
    this.state = {
      consumerid: id,
      orders: [],
    };
  }
  componentDidMount() {
    var id = this.props.match.params.id;
    console.log(this.props.match.params.id);
    axios
      .get("http://localhost:4000/orders/client/getOrders/" + id)
      .then((res) => {
        this.setState({ orders: res.data });
      });
  }
  render() {
    return (
      <div>
        <Sidebar />
        <div
          className="home "
          style={{
            marginTop: 50,
            marginLeft: 80,
            marginRight: 80,
            marginBottom: 50,
          }}
        >
          <center className="my-5">
            <h1>Order view for Consumer: {this.state.consumerid} </h1>
          </center>
          <table className="table table-bordered table-hover">
            <thead className="mb-5 thead-dark">
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Product Id</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.orders.map((order, index) => (
                <tr key={order.orderId}>
                  <th scope="row">{order.statusDate}</th>
                  <td>{order.productId}</td>
                  <td>{order.productName}</td>
                  <td>{order.total}</td>
                  <td>{order.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <FooterBar />
        <Navfooter />
      </div>
    );
  }
}

export default ordersview;

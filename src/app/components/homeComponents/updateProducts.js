import React from "react";
import axios from "axios";
import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Paper from "@material-ui/core/Paper";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

class addProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desp: "",
      price: 0,
      discount: 0,
      costprice: 0,
      stock: 0,
      profit: 0,
      pincode: 0,
      weight: 0,
    };
  }
  changeHandler = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });
  };
  PricingChangeHandler = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });
    let prof =
      this.state.price -
      this.state.price * this.state.discount * 0.01 -
      this.state.costprice;
    this.setState({ profit: prof });
    console.log(this.state);
  };
  shipChangeHandler = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });
  };
  handleSubmit = (e) => {
    var productid = this.props.match.params.id;
    var userid = JSON.parse(localStorage.getItem("user")).userid;
    axios
      .post("http://localhost:4000/inventory/updateProducts", {
        productid: productid,
        userid: userid,
        name: this.state.name,
        desp: this.state.desp,
        price: this.state.price,
        costprice: this.state.costprice,
        stock: this.state.stock,
        pincode: this.state.pincode,
        weight: this.state.weight,
      })
      .then((res) => {
        if (res.data) {
          this.props.history.push("/inventory");
        }
      });
  };
  rootstyles = {
    paper: {
      padding: 30,
      margin: 20,
    },
  };
  componentDidMount() {
    var productId = this.props.match.params.id;
    //axios.get products based on id...
  }
  render() {
    return (
      <div className="addProducts container">
        <div style={{ margin: 50 }}>
          <center>
            <h3>Add products</h3>
            <Paper
              elevation={3}
              style={this.rootstyles.paper}
              className="w-75 px-5"
            >
              Title:
              <TextField
                fullWidth
                id="outlined-required"
                label="Product Name"
                variant="filled"
                className="my-3"
                name="name"
                onChange={this.changeHandler}
              />
              Description:
              <br />
              <TextareaAutosize
                className="form-control my-3"
                rowsMin={5}
                placeholder="Your product description"
                name="desp"
                onChange={this.changeHandler}
              />
              Upload an Image for your Product:{" "}
              <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                className="btn "
              />
            </Paper>
            <Paper
              elevation={3}
              style={this.rootstyles.paper}
              className="w-75 px-5"
            >
              <h4 className="my-2">Pricing</h4>
              Price -:{" "}
              <Input
                type="number"
                id="outlined-required"
                label="Price"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                variant="outlined"
                className="mr-5 my-3"
                name="price"
                onChange={this.PricingChangeHandler}
              />
              Discount -:{" "}
              <Input
                type="number"
                id="outlined-required"
                label="discount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                variant="outlined"
                className="mr-3 my-3"
                name="discount"
                onChange={this.PricingChangeHandler}
              />
              <br />
              Cost Price -:{" "}
              <Input
                type="number"
                id="outlined-required"
                label="costprice"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                variant="outlined"
                className="mr-3 my-3"
                name="costprice"
                onChange={this.PricingChangeHandler}
              />
              Profit -:{" "}
              <Input
                disabled
                name="profit"
                value={this.state.profit}
                className="mr-5 my-3"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
              Quantity Available -:
              <Input type="number" label="stock" name="stock" />
            </Paper>
            <Paper
              elevation={3}
              style={this.rootstyles.paper}
              className="w-75 px-5"
            >
              <h4>Shipping Details</h4>
              Enter Your Product Weight -:
              <br />
              <Input
                type="number"
                label="weight"
                startAdornment={
                  <InputAdornment position="start">kg</InputAdornment>
                }
                varient="outlined"
                className="my-3"
                name="weight"
                onChange={this.shipChangeHandler}
              />
              <br />
              Enter the Pincode from where product is being delivered -:
              <br />
              <Input
                type="number"
                label="pincode"
                varient="outlined"
                className="my-3"
                name="pincode"
                onChange={this.shipChangeHandler}
              />
            </Paper>
            <button
              className="btn btn-success px-5"
              onClick={this.handleSubmit}
            >
              Save
            </button>
          </center>
        </div>
      </div>
    );
  }
}
export default addProducts;

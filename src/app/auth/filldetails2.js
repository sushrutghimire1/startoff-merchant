import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
class filldetails2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alrdsell: "",
      currrev: "",
      website: "",
    };
  }
  rootstyles = {
    root: {
      margin: 50,
    },
    paper: {
      padding: 80,
      paddingTop: 50,
      textAlign: "left",
    },
  };
  handleChange = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ nam: val });
    console.log(nam + " " + val);
  };
  handleClick = async (e) => {
    e.preventDefault();
    var userid = JSON.parse(localStorage.getItem("user")).userid;
    await axios
      .post("http://localhost:4000/auth/filldetails2", {
        userid: userid,
        alrdsell: this.state.alrdsell,
        currrev: this.state.currrev,
        website: this.state.website,
      })
      .then((res) => {
        if (res.data) {
          this.props.history.push("/home");
        }
      });
  };
  render() {
    return (
      <div
        className="filldetails2 container"
        style={{ backgroundColor: "rbg(171, 171, 171)" }}
      >
        <div className="" style={this.rootstyles.root}>
          <Paper elevation={3} style={this.rootstyles.paper}>
            <center>
              <h3>Tell us about yourself</h3>
            </center>
            <br />
            <div className="row">
              <div className=" col-md-11 col-lg-5 col-sm-11 m-3">
                {" "}
                Are you already Selling? <br />
                <FormControl style={{ minWidth: 350 }}>
                  <InputLabel id="demo-simple-select-label">
                    Please Choose...
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="alrdsell"
                    value={this.alrdsell}
                    onChange={this.handleChange}
                    name="alrdsell"
                  >
                    <MenuItem value={"0"}>Just playing around</MenuItem>
                    <MenuItem value={"0"}>Not selling products</MenuItem>
                    <MenuItem value={"1"}>Selling but not online</MenuItem>
                    <MenuItem value={"2"}>Selling in different System</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="m-3 col-lg-5 col-md-11 col-sm-11">
                {" "}
                What is your current revenue?
                <br />
                <FormControl style={{ minWidth: 350 }}>
                  <InputLabel id="demo-simple-select-label">
                    Please Choose...
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="currrev"
                    value={this.alrdsell}
                    onChange={this.handleChange}
                    name="currrev"
                  >
                    <MenuItem value={"0"}>Rs 0 to Rs 5,000</MenuItem>
                    <MenuItem value={"1"}>Rs 5,000 to Rs 30,000</MenuItem>
                    <MenuItem value={"2"}>Rs 30,000 to 1,00,000</MenuItem>
                    <MenuItem value={"3"}>Rs 1,00,000+</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="m-3 col-lg-5 col-md-11 col-sm-11">
                {" "}
                Business/ personal Website
                <br />
                <FormControl style={{ width: 350 }}>
                  <TextField
                    id="standard-basic"
                    label="Optional"
                    name="website"
                    onChange={this.handleChange}
                  />
                </FormControl>
              </div>
              <div className="my-3 col-sm-11">
                <center>
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={this.handleClick}
                  >
                    Finish
                  </Button>
                </center>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default filldetails2;

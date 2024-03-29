import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

import "../Styles/signIn.css";

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  doLogin = async (event) => {
    event.preventDefault();
    var usr = await this.state.username;
    var pass = await this.state.password;
    console.log(usr + " " + pass);
    await axios
      .post("http://localhost:4000/auth/login", {
        username: usr,
        password: pass,
      })
      .then((res) => {
        var response = res.data;
        console.log(response);
        if (response.login) {
          localStorage.setItem("user", JSON.stringify(response));
          this.props.history.push("/home");
        } else {
          this.setState({ error: "Invalid Username and password" });
        }
      });
  };

  render() {
    return (
      <div className="container-fluid signIn">
        <div className="row my-5 ">
          <div className="col-lg-7 col-md-8 col-sm-2 text-light d-sm-none d-md-block">
            <nav className="navbar "></nav>
            edit background image from styles/signin.css in .signIn class,
            opacity of login box is 0.5, edit the background to div.row
          </div>
          <div className="col-lg-4 col-md-8 col-sm-8 px-5  login-box">
            <div className="col-lg-12 login-key">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="col-lg-12 login-title">LOGIN</div>

            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form>
                  <div className="form-group">
                    <label className="form-control-label">
                      {" "}
                      <i className="fa fa-user fa-2x"></i>{" "}
                      <span className="h6">USERNAME</span>
                    </label>

                    <input
                      type="text"
                      className="username form-control "
                      name="username"
                      id="username"
                      value={this.state.username}
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">
                      <i className="fa fa-lock fa-2x"></i>
                      <span className="h6"> PASSWORD</span>
                    </label>
                    <input
                      type="password"
                      className="password form-control "
                      name="password"
                      id="password"
                      value={this.state.password}
                      autoComplete="password"
                      onChange={this.changeHandler}
                    />
                  </div>

                  <div className="form-group my-5">
                    <center>
                      <button
                        type="submit"
                        className="btn form-control btn-success align-self-center"
                        onClick={this.doLogin}
                      >
                        LOGIN
                      </button>
                      <br />
                      {this.state.error && (
                        <div className="bg-danger mt-2">{this.state.error}</div>
                      )}
                      <button
                        type="submit"
                        className="btn form-control btn-primary align-self-center mt-3"
                        onClick={() => {
                          this.props.history.push("/signup");
                        }}
                      >
                        SIGNUP
                      </button>
                    </center>
                  </div>
                  <div className="form-group mb-5">
                    <center>
                      <Link to="/forgotpass" className="nav-link">
                        Forgot password?
                      </Link>
                    </center>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-2"></div>
          </div>
          <div className="col-lg-1 col-md-8 col-sm-2"></div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signin);

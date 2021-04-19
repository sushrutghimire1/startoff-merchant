import React from "react";
import Sidebar from "../Sidebar";
import FooterBar from "../FooterBar";
import Navfooter from "../footer";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Component } from "react";
import axios from "axios";

class contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }
  usestyle = {
    root: {
      maxWidth: 345,
    },
  };
  componentDidMount() {
    var userid = JSON.parse(localStorage.getItem("user")).userid;
    axios
      .get("http://localhost:4000/contacts/getContacts/" + userid)
      .then((res) => {
        this.setState({ contacts: res.data });
      });
  }
  render() {
    return (
      <div>
        <Sidebar />
        <div
          className="Orders "
          style={{ marginTop: 50, marginLeft: 150, marginBottom: 50 }}
        >
          <center className="my-5">
            <h1>Contacts</h1>
          </center>
          <div className="row">
            {this.state.contacts.map((contact, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                <Card style={this.usestyle.root} key={contact.userid}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={contact.userimg}
                      height="140"
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {contact.username}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {contact.email}
                        <br />
                        {contact.phone}
                        <br />
                        {contact.Address}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={(e) => {
                        this.props.history.push(
                          "/ordersview/" + contact.userid
                        );
                      }}
                    >
                      Orders
                    </button>
                  </CardActions>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <FooterBar />
        <Navfooter />
      </div>
    );
  }
}

export default contacts;

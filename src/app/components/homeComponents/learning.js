import React from "react";
import { Component } from "react";
import Sidebar from "../Sidebar";
import FooterBar from "../FooterBar";
import Navfooter from "../footer";
import axios from "axios";

import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

class Learning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      learning: [
        {
          id: 1,
          name: "Fashion Designing",
          date: "October, 2020",
          videoLink: "https://www.youtube.com/watch?v=Sq8dwWaJR7I",
          desp: "description of video",
        },
        {
          id: 2,
          name: "welding",
          date: "April, 2017",
          videoLink: "https://www.youtube.com/watch?v=OWThL97tq3k",
          desp: "description of video",
        },
        {
          id: 3,
          name: "Cooking Skills",
          date: "April, 2020",
          videoLink: "https://www.youtube.com/watch?v=RFV-dfgadSw",
          desp: "description of video",
        },
        {
          id: 4,
          name: "Coconut Ice Cream Rolls",
          date: "September, 2017",
          videoLink: "https://youtu.be/6FNdWzNargE",
          desp: "description of video",
        },
      ],
    };
  }
  mystyles = {
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  };
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
            <h1>Learning Videos</h1>
          </center>
          <div className="learning container ">
            <div className="row">
              {this.state.learning.map((video, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <Card style={this.mystyles.root}>
                    <CardHeader
                      avatar={
                        <Avatar
                          aria-label="recipe"
                          style={this.mystyles.avatar}
                        >
                          R
                        </Avatar>
                      }
                      title={video.name}
                      subheader={video.date}
                    />
                    {/* <CardMedia
                      style={this.mystyles.media}
                      src={video.videoLink}
                      title={video.name}
                    /> */}
                    <iframe src={video.videoLink}></iframe>
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {video.desp}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Learning;

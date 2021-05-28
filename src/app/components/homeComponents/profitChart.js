import axios from "axios";
import React from "react";
import { Component } from "react";
import { Line } from "react-chartjs-2/dist/react-chartjs-2";

class profitPrevChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingData: [65, 59, 80, 81, 56, 40, 80],
      ratingLabels: [
        "Red",
        "Blue",
        "Yellow",
        "Green",
        "Purple",
        "Orange",
        "Black",
      ],
      previousData: [65, 59, 80, 81, 56, 55, 40],
      previousLabels: [
        "Red",
        "Blue",
        "Yellow",
        "Green",
        "Purple",
        "Orange",
        "Black",
      ],
      nextData: [65, 59, 80, 81, 56, 55, 40],
      nextLabels: [
        "Red",
        "Blue",
        "Yellow",
        "Green",
        "Purple",
        "Orange",
        "Black",
      ],
    };
  }
  next = {};
  pervious = {};
  rating = {};
  componentDidMount() {
    var userid = JSON.parse(localStorage.getItem("user")).userid;
    axios
      .get("http://localhost:4000/timeTemp1/previous/" + userid)
      .then((res) => {
        this.setState({
          previousData: res.data.profits,
          previousLabels: res.data.date,
        });
        console.log(res.data);
      });

    axios.get("http://localhost:4000/timeTemp1/next/" + userid).then((res) => {
      this.setState({ nextData: res.data.profits, nextLabels: res.data.date });
      console.log(res.data);
    });

    axios
      .get("http://localhost:4000/timeTemp1/rating/" + userid)
      .then((res) => {
        this.setState({
          ratingData: res.data.ratings,
          ratingLabels: res.data.date,
        });
        console.log("rating");
        console.log(res.data);
      });
    this.next = {
      labels: this.state.nextLabels,
      datasets: [
        {
          label: "Next month",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.state.nextData,
        },
      ],
    };
    this.previous = {
      labels: this.state.previousLabels,
      datasets: [
        {
          label: "previous month",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.state.previousData,
        },
      ],
    };
    this.rating = {
      labels: this.state.ratingLabels,
      datasets: [
        {
          label: "previous month",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.state.ratingData,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="container mt-5">
          <h3>Business Data</h3>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-4">
            {this.state.nextData.length > 0 ? (
              <Line
                data={{
                  labels: this.state.nextLabels,
                  datasets: [
                    {
                      label: "Profit Earned",
                      fill: false,
                      lineTension: 0.1,
                      backgroundColor: "rgba(75,192,192,0.4)",
                      borderColor: "rgba(75,192,192,1)",
                      borderCapStyle: "butt",
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: "miter",
                      pointBorderColor: "rgba(75,192,192,1)",
                      pointBackgroundColor: "#fff",
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: "rgba(75,192,192,1)",
                      pointHoverBorderColor: "rgba(220,220,220,1)",
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: this.state.nextData,
                    },
                  ],
                }}
                options={{ maintainAspectRatio: true }}
              />
            ) : (
              <p>No charts now</p>
            )}
          </div>
          <div className="col-md-12 col-lg-4">
            {this.state.previousData.length > 0 ? (
              <Line
                data={{
                  labels: this.state.previousLabels,
                  datasets: [
                    {
                      label: "Products sold",
                      fill: false,
                      lineTension: 0.1,
                      backgroundColor: "rgba(75,192,192,0.4)",
                      borderColor: "rgba(75,192,192,1)",
                      borderCapStyle: "butt",
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: "miter",
                      pointBorderColor: "rgba(75,192,192,1)",
                      pointBackgroundColor: "#fff",
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: "rgba(75,192,192,1)",
                      pointHoverBorderColor: "rgba(220,220,220,1)",
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: this.state.previousData,
                    },
                  ],
                }}
                options={{ maintainAspectRatio: true }}
              />
            ) : (
              <p>No charts now</p>
            )}
          </div>
          <div className="col-md-12 col-lg-4">
            {this.state.ratingData ? (
              <Line
                data={{
                  labels: this.state.ratingLabels,
                  datasets: [
                    {
                      label: "Rating varience",
                      fill: false,
                      lineTension: 0.1,
                      backgroundColor: "rgba(75,192,192,0.4)",
                      borderColor: "rgba(75,192,192,1)",
                      borderCapStyle: "butt",
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: "miter",
                      pointBorderColor: "rgba(75,192,192,1)",
                      pointBackgroundColor: "#fff",
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: "rgba(75,192,192,1)",
                      pointHoverBorderColor: "rgba(220,220,220,1)",
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: this.state.ratingData,
                    },
                  ],
                }}
                options={{ maintainAspectRatio: true }}
              />
            ) : (
              <p>No charts now</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default profitPrevChart;

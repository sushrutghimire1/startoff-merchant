import axios from "axios";
import React from "react";
import { Component } from "react";
import { Line } from "react-chartjs-2/dist/react-chartjs-2";

class profitPrevChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highData: [65, 59, 80, 81, 56, 40, 80],
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Black"],
      lowData: [65, 59, 80, 81, 56, 55, 40],

      openData: [65, 59, 80, 81, 56, 55, 40],

      closeData: [65, 59, 80, 81, 56, 55, 40],

      volumeData: [65, 59, 80, 81, 56, 55, 40],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/stock/data").then((res) => {
      console.log(res.data);
      this.setState({
        labels: res.data.keys,
        highData: res.data.open,
        lowData: res.data.high,
        openData: res.data.low,
        closeData: res.data.close,
        volumeData: res.data.volume,
      });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <div className="container mt-5">
          <h3>StockMarket Data</h3>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            {this.state.highData.length > 0 ? (
              <Line
                data={{
                  labels: this.state.labels,
                  datasets: [
                    {
                      label: "High Data",
                      fill: false,
                      lineTension: 0.1,
                      backgroundColor: "rgba(75,192,192,0.4)",
                      borderColor: "rgba(255, 17, 0)",
                      borderCapStyle: "butt",
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: "miter",
                      pointBorderColor: "rgba(82, 5, 0)",
                      pointBackgroundColor: "#fff",
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: "rgba(75,192,192,1)",
                      pointHoverBorderColor: "rgba(220,220,220,1)",
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: this.state.highData,
                    },
                  ],
                }}
                options={{ maintainAspectRatio: true }}
              />
            ) : (
              <p>No charts now</p>
            )}
          </div>
          <div className="col-md-12  col-lg-6">
            {this.state.lowData.length > 0 ? (
              <Line
                data={{
                  labels: this.state.labels,
                  datasets: [
                    {
                      label: "Low Data",
                      fill: false,
                      lineTension: 0.1,
                      backgroundColor: "rgba(75,192,192,0.4)",
                      borderColor: "rgba(7, 3, 255)",
                      borderCapStyle: "butt",
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: "miter",
                      pointBorderColor: "rgba(7, 3, 255)",
                      pointBackgroundColor: "#fff",
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: "rgba(75,192,192,1)",
                      pointHoverBorderColor: "rgba(220,220,220,1)",
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: this.state.lowData,
                    },
                  ],
                }}
                options={{ maintainAspectRatio: true }}
              />
            ) : (
              <p>No charts now</p>
            )}
          </div>
          <div className="col-md-12  col-lg-6">
            {this.state.openData ? (
              <Line
                data={{
                  labels: this.state.labels,
                  datasets: [
                    {
                      label: "Open Data",
                      fill: false,
                      lineTension: 0.1,
                      backgroundColor: "rgba(75,192,192,0.4)",
                      borderColor: "rgba(221, 3, 255)",
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
                      data: this.state.openData,
                    },
                  ],
                }}
                options={{ maintainAspectRatio: true }}
              />
            ) : (
              <p>No charts now</p>
            )}
          </div>
          <div className="col-md-12  col-lg-6">
            {this.state.closeData ? (
              <Line
                data={{
                  labels: this.state.labels,
                  datasets: [
                    {
                      label: "Close Data",
                      fill: false,
                      lineTension: 0.1,
                      backgroundColor: "rgba(75,192,192,0.4)",
                      borderColor: "rgba(255, 217, 0)",
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
                      data: this.state.closeData,
                    },
                  ],
                }}
                options={{ maintainAspectRatio: true }}
              />
            ) : (
              <p>No charts now</p>
            )}
          </div>
          <div className="col-md-12  col-lg-6">
            {this.state.volumeData ? (
              <Line
                data={{
                  labels: this.state.labels,
                  datasets: [
                    {
                      label: "Volume Data",
                      fill: false,
                      lineTension: 0.1,
                      backgroundColor: "rgba(75,192,192,0.4)",
                      borderColor: "rgba(0, 106, 255)",
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
                      data: this.state.volumeData,
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

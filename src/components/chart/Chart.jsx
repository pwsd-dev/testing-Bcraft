import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function DemoChart(props) {
  const state = {
    labels: [
      props.dateNow,
      props.dateTommorow,
      props.dateThird,
      props.dateFourth,
      props.dateFifth,
    ],
    datasets: [
      {
        label: "Weather",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [
          props.tempNow,
          props.tempTommorow,
          props.tempThird,
          props.tempFourth,
          props.tempFifth,
        ],
      },
    ],
  };
  return (
    <div className="margin-top-bottom canvas-container">
      {props.tempNow ? (
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
              maintainAspectRatio: false,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      ) : null}
    </div>
  );
}

export default DemoChart;

import React from "react";
import Select from "../select/Select";
import InfoWeather from "../info/InfoWeather";
import Chart from "../chart/Chart";
import axios from "axios";

const API_KEY = "bdce1da93d55ddf7f78ad18e34f4d97a";

function WeatherComponent() {
  const [stateMain, setStateMain] = React.useState({});

  const gettingWeather = async (e) => {
    const city = e.target.getAttribute("name");
    const apiUrl = await axios
      .get(
        `
        https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then(({ data }) => {
        console.log(data);
        setStateMain({
          tempNow: Math.round(data.list[0].main.temp),
          dateNow: data.list[0].dt_txt,
          tempTommorow: Math.round(data.list[8].main.temp),
          dateTommorow: data.list[8].dt_txt,
          tempThird: Math.round(data.list[16].main.temp),
          dateThird: data.list[16].dt_txt,
          tempFourth: Math.round(data.list[24].main.temp),
          dateFourth: data.list[24].dt_txt,
          tempFifth: Math.round(data.list[32].main.temp),
          dateFifth: data.list[32].dt_txt,
        });
      });
  };
  return (
    <div className="myselect">
      <Select weatherMethod={gettingWeather} />
      <InfoWeather
        tempNow={stateMain.tempNow}
        dateNow={stateMain.dateNow}
        tempTommorow={stateMain.tempTommorow}
        dateTommorow={stateMain.dateTommorow}
        tempThird={stateMain.tempThird}
        dateThird={stateMain.dateThird}
        tempFourth={stateMain.tempFourth}
        dateFourth={stateMain.dateFourth}
        tempFifth={stateMain.tempFifth}
        dateFifth={stateMain.dateFifth}
      />
      <Chart
        tempNow={stateMain.tempNow}
        dateNow={stateMain.dateNow}
        tempTommorow={stateMain.tempTommorow}
        dateTommorow={stateMain.dateTommorow}
        tempThird={stateMain.tempThird}
        dateThird={stateMain.dateThird}
        tempFourth={stateMain.tempFourth}
        dateFourth={stateMain.dateFourth}
        tempFifth={stateMain.tempFifth}
        dateFifth={stateMain.dateFifth}
      />
    </div>
  );
}

export default WeatherComponent;

import React from "react";

function InfoWeather(props) {
  return (
    <div className="margin">
      {props.tempNow ? (
        <div className="d-flex column w-300 padding-20">
          <div className="d-flex justify-between align-center">
            <div>
              <p className="">Now </p>
              <p>({props.dateNow})</p>
            </div>
            :<p className="fz-20">{props.tempNow} &#176;</p>
          </div>
          <div className="d-flex justify-between align-center">
            <div>
              <p className="">Tommorow </p>
              <p>({props.dateTommorow})</p>
            </div>
            :<p className="fz-20">{props.tempTommorow} &#176;</p>
          </div>
          <div className="d-flex justify-between align-center">
            <div>
              <p className="">Third </p>
              <p>({props.dateThird})</p>
            </div>
            :<p className="fz-20">{props.tempThird} &#176;</p>
          </div>
          <div className="d-flex justify-between align-center">
            <div>
              <p className="">Fourth </p>
              <p>({props.dateFourth})</p>
            </div>
            :<p className="fz-20">{props.tempFourth} &#176;</p>
          </div>
          <div className="d-flex justify-between align-center">
            <div>
              <p className="">Fifth </p>
              <p>({props.dateFifth})</p>
            </div>
            :<p className="fz-20">{props.tempFifth} &#176;</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default InfoWeather;

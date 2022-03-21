import React from "react";
// import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import CustomSelect from "../../js/custom-select";

function Select(props) {
  return (
    <div className="select" id="select-1">
      <button
        type="button"
        className="select__toggle"
        name="car"
        value=""
        data-select="toggle"
        data-index="-1"
      >
        choose a city
      </button>

      <div className="select__dropdown">
        <ul className="select__options">
          <li
            className="select__option"
            data-select="option"
            data-value="Moscow"
            data-index="0"
            onClick={props.weatherMethod}
            name="Moscow"
          >
            Moscow
          </li>
          <li
            className="select__option"
            data-select="option"
            data-value="New York"
            data-index="1"
            onClick={props.weatherMethod}
            name="New York"
          >
            New York
          </li>
          <li
            className="select__option"
            data-select="option"
            data-value="London"
            data-index="2"
            onClick={props.weatherMethod}
            name="London"
          >
            London
          </li>
          <li
            className="select__option"
            data-select="option"
            data-value="Vermont"
            data-index="3"
            onClick={props.weatherMethod}
            name="Vermont"
          >
            Vermont
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Select;

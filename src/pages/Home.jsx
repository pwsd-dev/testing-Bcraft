import React from "react";
import WeatherComponent from "../components/weather/WeatherComponent";
import { useAuth } from "../hooks/use-auth";
import { Navigate } from "react-router-dom";

function Home() {
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div className="center">
      <h1>Home</h1>
      <WeatherComponent />
    </div>
  ) : (
    <Navigate to="/login" />
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Home.scss";

const Home = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    Axios.get("https://api.spacexdata.com/v3/info")
      .then((res) => {
        console.log(res);
        setInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(info);
  return (
    <div className="bg-none container h-50vh jumbotron mt-5 position-relative">
      <div className="home-container" />
      <div className="front-container text-center p-3">
        <h2>About</h2>
        <h6 className="mt-4 info">{info.name}</h6>
        <p className="mt-4 info">founder :{info.founder}</p>
        <p className="mt-4 info">founded :{info.founded}</p>
        <p className="mt-4 info">{info.summary}</p>
      </div>
    </div>
  );
};

export default Home;

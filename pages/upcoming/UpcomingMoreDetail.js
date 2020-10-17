import React, { useEffect, useState } from "react";
import Axios from "axios";

const UpcomingMoreDetail = (props) => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    getDetail();
  }, []);
  const getDetail = () => {
    const url = `https://api.spacexdata.com/v3/launches/${props.match.params.flight_number}`;
    Axios.get(url)
      .then((res) => {
        console.log(res.data);
        setstate(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-none container h-50vh jumbotron mt-5 position-relative">
    <div className="home-container" />
    <div className="front-container text-center p-3">
      <h2 className="mt-3">Detail</h2>
      <label>Flight Number: </label><h6 className="mt-1 info">{state.flight_number}</h6>
      <p className="mt-1 info"><label>Launch Year: </label>{state.rocket_name}</p>
      <p className="mt-1 info">{state.launch_year}</p>
    </div>
  </div>
  );
};

export default UpcomingMoreDetail;

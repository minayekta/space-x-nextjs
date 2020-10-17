import React, { useState, useEffect } from "react";
import Axios from "axios";
// import { Link } from "react-router-dom";
const Past = (props) => {
  const [launch, setLaunch] = useState([]);

  useEffect(() => {
    getLaunches();
  }, []);

  const getLaunches = () => {
    Axios.get("https://api.spacexdata.com/v3/launches/past")
      .then((res) => {
        console.log(res);
        setLaunch(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const displayLaunches = () =>
    launch.map((launch, index) => (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{launch.flight_number}</td>
        <td>{launch.mission_name}</td>
        <td>
          {/* <Link to={`/launches/${launch.flight_number}`}> */}
            <button type="button" className="btn blue-gradient waves-effect mt-3">
              See more...
            </button>
          {/* </Link> */}
        </td>
      </tr>
    ));
  console.log(launch);
  return (
    <div className="bg-none container h-200vh jumbotron mt-5 position-relative">
      <div className="home-container-1" />
      <div className="front-container">
        <h2 className="pb-4 py-2 text-shadow">past Launches</h2>
        {launch ? (
          <div className="table-responsive">
            <table className="table table-hover table-fixed">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Flight Number</th>
                  <th>Name</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>{displayLaunches()}</tbody>
            </table>
          </div>
        ) : (
          <h3 className="text-center my-4">Loading...</h3>
        )}
      </div>
    </div>
  );
};


export default Past;

import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import DataInfo from "../components/DataInfo";
import "../style/button.css";

const ViewPage = () => {
  const [data, setData] = useState([]);

  const location = useLocation();

  let path = "/dataset"

  if (location.pathname == "/"){
    path = "/view"
  }

  let id = location.pathname.slice(6)

  console.log(id)
  // let { state } = useLocation();

  // let id = "";

  // const [data, setData] = useState([]);

  // if (state != null) {
  //   id = state.main.id;
  // } else {
  //   id = useLocation()
  //     .pathname.slice(location.pathname.lastIndexOf("/"))
  //     .slice(1);
  //   console.log(id);
  // }

// Runs on location change
  useEffect(() => {
    getData();
  }, [location]);

  const getData = async () => {
    try {
      //http://115.146.86.176/api/datasets/${id}
      // const response = await fetch(`http://115.146.86.176/api/datasets/${id}`);
      const response = await fetch(`http://${import.meta.env.VITE_APP_API_URL}/api/datasets/${id}`);
      const fetched_data = await response.json();
      setData(fetched_data);
    } catch (error) {
      console.error("Error fetching dataset::", error);
    }
  };

  return (
    <div>
      {console.log("data:", data)}
      {data &&
      <div>
          <DataInfo data={data} main_id={id} />
          <NavLink to={"/dataset"}>
            <button style={{ marginLeft: "100px", marginTop: "10px" }}>
              Back to all datasets
            </button>
          </NavLink>
      </div>}
    </div>
  );
};

export default ViewPage;

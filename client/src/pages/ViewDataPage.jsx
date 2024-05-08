import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import DataInfo from "../components/DataInfo";
import "../style/button.css";

const ViewPage = () => {
  let { state } = useLocation();

  let id = '';

  const [data, setData] = useState([]);

  if (state != null){
    id = state.main.id
  }

  else {
    id = useLocation().pathname.slice(location.pathname.lastIndexOf("/")).slice(1)
    console.log(id)
  }

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      //http://115.146.86.176/api/datasets/${id}
      const response = await fetch(`http://115.146.86.176/api/datasets/${id}`);
      const data = await response.json();
      console.log(data);
      setData(data);

    } catch (error) {
      console.error("Error fetching dataset::", error);
    }
  };

  return (
    <div>
      <DataInfo data={data} main_id={id} />
      <NavLink to={"/dataset"}>
        <button style={{marginLeft:"100px", marginTop:"10px"}}>Back to all datasets</button>
      </NavLink>
    </div>
  )
};

export default ViewPage;

import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import DataInfo from "../components/DataInfo";
import "../style/button.css";

const ViewPage = () => {
  let { state } = useLocation();
  const main_id = state.main_id;

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/datasets");
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error("Error fetching dataset::", error);
    }
  };

  const style = {
    h2_title: {
      fontFamily: "Helvetica Neue",
      fontWeight: "400",
      paddingLeft: "0px",
      paddingTop: "50px",
      paddingBottom: "20px",
    },

    h3: {
      fontFamily: "system-ui",
      fontWeight: "500",
      paddingLeft: "20px",
      marginTop: "20px",
    },

    h3_hyperlink: {
      fontFamily: "system-ui",
      fontWeight: "500",
      // paddingLeft: "20px",
      margin: "0 0 0 0",
    },

    h3_associated: {
      fontFamily: "system-ui",
      fontWeight: "500",
      marginTop: "15px",
    },
    h4: {
      paddingTop: "10px",
      fontWeight: "300",
      margin: "0 0 0 0",
    },

    p: {
      fontFamily: "system-ui",
      fontWeight: "300",
      paddingLeft: "20px",
      paddingRight: "30px",
    },

    dataset_info: {
      paddingTop: "10px",
      paddingRight: "20px",
      paddingLeft: "20px",
      paddingBottom: "20px",
      display: "box",
      marginTop: "20px",
      marginRight: "70px",
      backgroundColor: "white",
      textAlign: "justify",
      wordWrap: "break-word",
      width: "80%",
      fontFamily: "system-ui",
      boxShadow: "0px 5px 10px 0px rgba(0,0,0, 0.5)",
      borderRadius: "8px",
    },

    dataset_hyperlinks: {
      backgroundColor: "white",
      marginTop: "20px",
      fontFamily: "system-ui",
      fontWeight: "300",
      paddingRight: "20px",
      paddingLeft: "20px",
      paddingTop: "10px",
      paddingBottom: "20px",
      boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.5)",
      borderRadius: "8px",
    },

    button: {
      fontFamily: "system-ui",
      fontWeight: "lighter",
      fontSize: "medium",
      borderRadius: "12px",
      paddingLeft: "20px",
      paddingRight: "20px",
      margin: "5px",
      border: "solid grey 1px",
      color: "black",
    },
  };
  return <DataInfo data={data} main_id={main_id} />;
};

export default ViewPage;

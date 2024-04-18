import React from "react";
import { useLocation, NavLink } from "react-router-dom";

const ViewPage = () => {
  let { state } = useLocation();
  console.log(state);

  const style = {
    h2_title: {
      fontFamily: "Montserrat",
      fontWeight: "500",
      paddingLeft: "0px",
      paddingTop: "80px",
      paddingBottom: "40px",
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

    h4: {
      // paddingLeft: "20px",
      // paddingRight: "20px",
      paddingTop: "10px",
      fontWeight: "lighter",
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
      paddingRight: "40px",
      paddingLeft: "40px",
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
      paddingRight: "40px",
      paddingLeft: "40px",
      paddingTop: "10px",
      paddingBottom: "20px",
      boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.5)",
      borderRadius: "8px",
    },
  };

  return (
    <div>
      <div style={{ marginLeft: "100px" }} className="data-title">
        <h2 style={style.h2_title}>{state.data.name}</h2>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "100px",
          marginRight: "100px",
        }}
        className="dataset-content"
      >
        <div style={style.dataset_info} className="dataset-info">
          <h3 style={style.h3}>Description</h3>
          <p style={style.p} className="dataset-summary">
            {state.data.description}
          </p>
        </div>

        <div style={style.dataset_hyperlinks} className="dataset-hyperlinks">
          <div
            className="raw-data-location"
            style={{
              marginTop: "20px",
              marginLeft: "20px",
            }}
          >
            <h3 style={style.h3_hyperlink}>Raw Data</h3>
            <h4 style={style.h4}>Location: {state.data.file_path}</h4>
          </div>
          <div
            className="raw-data-code"
            style={{
              marginTop: "20px",
              marginLeft: "20px",
            }}
          >
            <h3 style={style.h3_hyperlink}>Copy code for raw data</h3>
            <a href={state.data.raw_link}>
              <h4 style={style.h4}>{state.data.raw_link}</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;

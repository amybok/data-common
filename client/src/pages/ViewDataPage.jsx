import React from "react";
import { useLocation, NavLink } from "react-router-dom";

const ViewPage = () => {
  let { state } = useLocation();
  console.log(state);

  const style = {
    h2: {
      fontFamily: "Roboto",
      fontWeight: "500",
      paddingLeft: "20px",
      paddingTop: "80px",
      paddingBottom: "40px",
    },

    h3: {
      fontFamily: "system-ui",
      fontWeight: "500",
      paddingLeft: "20px",
      marginTop: "20px",
    },

    p: {
      fontFamily: "system-ui",
      fontWeight: "300",
      paddingLeft: "20px",
      paddingRight: "20px",
    },

    dataset_info: {
      borderRadius: "8px",
      border: "solid 1px",
      boxShadow: "0px 5px 10px 0px rgba(0,0,0, 0.5)",
      paddingTop: "10px",
      paddingRight: "40px",
      paddingLeft: "40px",
      paddingBottom: "20px",
      display: "box",
      marginTop: "20px",
      marginRight: "20px",
      textAlign: "justify",
      wordWrap: "break-word",
      width: "fit-content",
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
      border: "solid 1px",
    },
  };
  return (
    <div>
      <h2 style={style.h2}>{state.data.name}</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "100px",
          marginRight: "100px",
          gap: "10px",
        }}
        className="dataset-title"
      >
        <div style={style.dataset_info} className="dataset-info">
          <h3 style={style.h3}>Description</h3>
          <p style={style.p} className="dataset-summary">
            The diagnosis of pancreatic neurod is increasing owing to more
            sensitive detection method
          </p>
        </div>

        <div style={style.dataset_hyperlinks} className="dataset-hyperlinks">
          <h3 style={style.h3}>Raw Data</h3>
          <h4 style={{ fontWeight: "lighter", paddingLeft: "20px" }}>
            Located: WEHI Milton/vast/projects/PDC0001
          </h4>
          <h3 style={style.h3}>Copy code for raw data</h3>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;

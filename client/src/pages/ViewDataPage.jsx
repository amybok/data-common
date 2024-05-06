import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import "../style/button.css";

const ViewPage = () => {
  let { state } = useLocation();
  const main_data = state.main;
  const sub_data = state.sub;

  // const [linkedData, setLinkedData] = useState([]);

  const transformKeys = (item) => {
    const key = Object.keys(item).toString();
    let newKey;
    switch (key) {
      case "ipynb":
        newKey = "WEHI Jupyter Notebook";
        break;
      case "r":
        newKey = "WEHI RStudio";
        break;
      case "py":
        newKey = "Python Script";
        break;
      default:
        newKey = key;
    }

    return newKey;
  };

  const getLinkedData = (name) => {
    let result;
    sub_data.map((item) => (item.id === name ? (result = item) : null));
    return result;
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

  return (
    <div>
      {console.log(main_data)}
      <div style={{ marginLeft: "100px" }} className="data-title">
        <h2 style={style.h2_title}>{main_data.name}</h2>
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
            {main_data.description}
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
            <h4 style={style.h4}>Location: {main_data.file_path}</h4>
            <h4 style={style.h4}>Owner: {main_data.owner}</h4>
          </div>
          <div
            className="raw-data-code"
            style={{
              marginTop: "20px",
              marginLeft: "20px",
            }}
          >
            <h3 style={style.h3_hyperlink}>Copy code for raw data</h3>
            {main_data.code.map((item) => (
              <a href={Object.values(item)}>
                <button>{transformKeys(item)}</button>
              </a>
            ))}
          </div>

          <div
            className="data-portals"
            style={{
              marginTop: "20px",
              marginLeft: "20px",
            }}
          >
            <h3 style={style.h3_hyperlink}>Data Portals</h3>
            {main_data.portal.map((port) => (
              <a href={Object.values(port)}>
                <button>{Object.keys(port).toString()}</button>
              </a>
            ))}
          </div>

          <div
            className="related-data"
            style={{
              marginTop: "20px",
              marginLeft: "20px",
              borderTop: "1px solid rgb(203,203,203)",
            }}
          >
            <h3 style={style.h3_associated}>Associated Dataset</h3>
            <table>
              <tbody>
                {main_data.linked_data.map((other) => (
                  <tr>
                    <th style={{ paddingRight: "20px" }}>
                      {Object.keys(other)}
                    </th>
                    <td style={{ paddingRight: "20px" }}>
                      {Object.values(other).toString()}
                    </td>
                    <NavLink
                      to={`/view/${Object.keys(other)}`}
                      state={{
                        main: getLinkedData(Object.keys(other).toString()),
                        sub: sub_data,
                      }}
                    >
                      <button s>VIEW</button>
                    </NavLink>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;

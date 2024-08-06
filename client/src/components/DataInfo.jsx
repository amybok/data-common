import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Download from "../components/Download";
import.meta.env.VITE_APP_API_URL

const DataInfo = ({ data, main_id }) => {
  // Function to transform file type to their actual name. i.e. ipynb -> Jupyter notebook
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

  // Setting up code for copy as well as copy logic
  const [code, setCode] = useState("");

  const getCode = async (scriptName) => {
    try {
      // `http://localhost:3001/api/code/${scriptName}`
      const response = await fetch(
        `https://${import.meta.env.VITE_APP_API_URL}/api/code/${scriptName}`
        // `http://localhost:3001/api/code/${scriptName}`
      );
      const content = await response.text();
      console.log(content);

      setCode(content);
    } catch (error) {
      console.error("Error fetching dataset:", error);
    }
  };

  useEffect(() => {
    if (code) {
      const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(code);
          console.log("Code copied to clipboard: ", code);
        } catch (error) {
          console.error("Error copying code to clipboard: ", error);
        }
      };
      copyToClipboard();
    }
  }, [code]);

  const style = {
    h2_title: {
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontWeight: "500",
      paddingLeft: "0px",
      paddingTop: "30px",
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
      margin: "0 0 0 0",
    },

    h3_associated: {
      fontFamily: "system-ui",
      fontWeight: "500",
      marginTop: "15px",
    },
    h4: {
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
      backgroundColor: "white",
    },
  };

  return (
    <>
      <script scr="dist/clipboard.min.js"></script>
      {/* [data] is used to make json object into array for .map function to works */}
      {[data].map((item) =>
        //   Only load data of the correct id
        item.id === main_id ? (
          <div>
            <div style={{ marginLeft: "100px" }} className="data-title">
              <h2 style={style.h2_title}>{item.name}</h2>
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
                  {item.description}
                </p>
              </div>

              <div
                style={style.dataset_hyperlinks}
                className="dataset-hyperlinks"
              >
                <div
                  className="data-owner"
                  style={{ marginTop: "20px", marginLeft: "20px"}}
                >
                  <h3 style={style.h3_hyperlink}>Owner</h3>
                  <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h4 style={style.h4}>{item.owner}</h4>
                    <Download></Download>
                  </div>
                </div>
                <div
                  className="raw-data-location"
                  style={{
                    marginTop: "20px",
                    marginLeft: "20px",
                  }}
                >
                  <h3 style={style.h3_hyperlink}>Raw Data</h3>
                  <h4 style={style.h4}>Location: {item.file_path}</h4>
                </div>

                <div
                  className="raw-data-code"
                  style={{
                    marginTop: "20px",
                    marginLeft: "20px",
                  }}
                >
                  <h3 style={style.h3_hyperlink}>Copy code for raw data</h3>
                  {item.code.map((item) => (
                    <button onClick={() => getCode(Object.values(item))}>
                      {transformKeys(item)}
                    </button>
                  ))}
                </div>

                <div
                  className="code-template"
                  style={{
                    marginTop: "20px",
                    marginLeft: "20px",
                  }}
                >
                  <h3 style={style.h3_hyperlink}>Code template</h3>
                  {item.template.map((item) => (
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
                  {item.portal.map((port) => (
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
                      {item.linked_data.map((other) => (
                        <tr>
                          <th style={{ paddingRight: "20px" }}>
                            {Object.keys(other)}
                          </th>
                          <td style={{ paddingRight: "20px" }}>
                            {Object.values(other).toString()}
                          </td>
                          <NavLink
                            to={`/view/${Object.keys(other)}`}
                            state={{ main_id: Object.keys(other).toString() }}
                          >
                            <button>VIEW</button>
                          </NavLink>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : null
      )}
    </>
  );
};

export default DataInfo;

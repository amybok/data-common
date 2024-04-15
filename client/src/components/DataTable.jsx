import React from "react";
import { data } from "../data/data.js";
import { NavLink } from "react-router-dom";

const DataTable = () => {
  console.log(data);
  const style = {
    h2: {
      fontFamily: "Roboto",
      fontWeight: "300",
    },

    caption: {
      textAlign: "left",
      marginLeft: "10px",
    },

    table: {
      borderSpacing: "0",
      backgroundColor: "white",
      boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.5)",
      borderRadius: "3px",
    },

    entries: {
      padding: "10px",
      fontFamily: "system-ui",
      fontWeight: "ligter",
    },

    entries_name: {
      padding: "5px",
      paddingRight: "20px",
      fontFamily: "system-ui",
      textAlign: "center",
    },

    button: {
      fontFamily: "system-ui",
      borderRadius: "12px",
      paddingTop: "10px",
      paddingBottom: "10px",
      paddingLeft: "30px",
      paddingRight: "30px",
      border: "solid 1px",
      backgroundColor: "darkslategray",
      color: "white",
    },


    td: {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  };
  return (
    <>
      <table style={style.table}>
        <caption style={style.caption}>
          <h2 style={style.h2}>All dataset</h2>
        </caption>
        <thead>
          <tr>
            <th style={style.entries}>Dataset ID</th>
            <th style={style.entries}>Summary</th>
            <th style={style.entries}>Technology</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              {/* <th style={style.entries}>PDC0001</th> */}
              <th style={style.td}>{item.id}</th>
              {/* <td style={style.entries_name}>
                Whole-genome landscape of pancreatic neurodocrine tumors - WGS
              </td> */}
              <td style={style.entries_name}>{item.summary}</td>
              <td style={style.entries_name}>{item.technology}</td>
              <td style={style.td}>
                <NavLink to="/view">
                  <button style={style.button}>VIEW</button>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;

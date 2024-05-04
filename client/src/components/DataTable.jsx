import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


const DataTable = ({ data }) => {

  const style = {
    h2: {
      fontFamily: "Helvetica Neue",
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
      borderRadius: "5px",
    },

    entries: {
      padding: "10px",
      fontFamily: "system-ui",
      fontWeight: "ligter",
    },

    thead: {
      backgroundColor: "#d9d9d9",
      padding: "10px",
      fontFamily: "system-ui",
      fontWeight: "ligter",
    },

    entries_name: {
      padding: "5px",
      paddingRight: "20px",
      fontFamily: "system-ui",
      fontWeight: "200",
      textAlign: "left",
      borderBottom: "1px solid rgb(221 221 221)"
    },

    button: {
      fontFamily: "system-ui",
      fontWeight: "lighter",
      fontSize: "medium",
      borderRadius: "20px",
      paddingTop: "3px",
      paddingBottom: "3px",
      paddingLeft: "25px",
      paddingRight: "25px",
      border: "solid 1px darkslategrey",
      backgroundColor: "darkslategray",
      color: "white"
    },

    td: {
      paddingLeft: "10px",
      paddingRight: "10px",
      fontFamily: "Helvetica",
      borderBottom: "1px solid rgb(221 221 221)",
    },
  };

  return (
    
      <table style={style.table}>
        <caption style={style.caption}>
          <h2 style={style.h2}>All Dataset</h2>
        </caption>
        <thead>
          <tr>
            <td style={style.thead}>Dataset ID</td>
            <td style={style.thead}>Summary</td>
            <td style={style.thead}>Technology</td>
            <td style={style.thead}></td>
          </tr>
        </thead>
        <tbody>
          {console.log(data)}
          {data.map((item) => (
            <tr key={item.id}>
              <td style={style.td}>{item.id}</td>
              <td style={style.entries_name}>{item.name}</td>
              <td style={style.entries_name}>{item.method}</td>
              <td style={style.td}>
                {/* <NavLink to={`/view/${item}`}> */}
                {item != null ? console.log(item) : console.log("is empty")}
                <NavLink to={`/view/${item.id}`} state={{main:item, sub:data}}>
                  <button style={style.button}>VIEW</button>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
  );
};

export default DataTable;

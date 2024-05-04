import React from "react";

const Filter = () => {
  const style = {
    h2: {
      fontFamily: "Roboto",
      fontWeight: "300",
    },

    table: {
      borderSpacing: "0"
    },

    button: {
      fontFamily: "system-ui",
      fontWeight: "lighter",
      fontSize: "medium",
      borderRadius: "12px",
      paddingLeft: "20px",
      paddingRight: "20px",
      border: "solid rgb(52,90,90) 1px",
      color: "black",
      backgroundColor: "white",
    },
  };
  return (
    <>
      <table style={style.table}>
        <caption>
          <h2 style={style.h2}>Filter</h2>
        </caption>
        <tbody>
          <tr>
            <td>
              <button style={style.button}>WGS</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={style.button}>WGS</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={style.button}>WGS</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={style.button}>WGS</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Filter;

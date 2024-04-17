import React, { useState, useEffect } from "react";
import DataTable from "../components/DataTable";
import Filter
from "../components/Filter";

const DatasetPage = () => {
  const [entries, setEntries] = useState([]);

  useEffect (() => {
    getData();
  }, [])

  const getData = async() => {
    try {
      const response = await fetch("http://localhost:3000/api/datasets")
      const data = await response.json()
      console.log(data)
      setEntries(data)
    } catch (error) {
      console.error("Error fetching dataset::", error)
    }
  }


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "50px",
      }}
    >
      <DataTable data={entries}/>
      <Filter/>
    </div>
  );
};

export default DatasetPage;

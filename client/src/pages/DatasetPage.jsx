import React from "react";
import DataTable from "../components/DataTable";
import Filter
 from "../components/Filter";
const DatasetPage = () => {
  const style = {};
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "50px",
      }}
    >
      <DataTable/>
      <Filter/>
    </div>
  );
};

export default DatasetPage;

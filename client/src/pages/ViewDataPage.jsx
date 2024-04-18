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

    h4: {
      paddingLeft: "20px",
      paddingRight: "20px",
      fontWeight: "lighter",
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
      width: "fit-content",
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
            The diagnosis of pancreatic neuroendocrine tumours (PanNETs) is
            increasing owing to more sensitive detection methods, and this
            increase is creating challenges for clinical management. We
            performed whole-genome sequencing of 102 primary PanNETs and defined
            the genomic events that characterize their pathogenesis. Here we
            describe the mutational signatures they harbour, including a
            deficiency in G:C T:A base excision repair due to inactivation of
            MUTYH, which encodes a DNA glycosylase. Clinically sporadic PanNETs
            contain a larger-than-expected proportion of germline mutations,
            including previously unreported mutations in the DNA repair genes
            MUTYH, CHEK2 and BRCA2. Together with mutations in MEN1 and VHL,
            these mutations occur in 17% of patients. Somatic mutations,
            including point mutations and gene fusions, were commonly found in
            genes involved in four main pathways: chromatin remodelling, DNA
            damage repair, activation of mTOR signalling (including previously
            undescribed EWSR1 gene fusions), and telomere maintenance. In
            addition, our gene expression analyses identified a subgroup of
            tumours associated with hypoxia and HIF signalling.
          </p>
        </div>

        <div style={style.dataset_hyperlinks} className="dataset-hyperlinks">
          <h3 style={style.h3}>Raw Data</h3>
          <h4 style={style.h4}>Located: WEHI Milton/vast/projects/PDC0001</h4>
          <h3 style={style.h3}>Copy code for raw data</h3>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;

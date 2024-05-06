function datasetsDetailss(id, name, method) {
    return {
        id: id,
        name: name,
        description: description,
        method: method,
        file_path: file_path,
        owner: owner,
        raw_link: raw_link
    };
}

const datasets = [
  {
    id: "PDC001",
    name: "Whole-genome landscape of pancreatic neuroendocrine tumours - WGS",
    description: "The diagnosis of pancreatic neuroendocrine tumours (PanNETs) is increasing owing to more sensitive detection methods, and this increase is creating challenges for clinical management. We performed whole-genome sequencing of 102 primary PanNETs and defined the genomic events that characterize their pathogenesis. Here we describe the mutational signatures they harbour, including a deficiency in G:C > T:A base excision repair due to inactivation of MUTYH, which encodes a DNA glycosylase. Clinically sporadic PanNETs contain a larger-than-expected proportion of germline mutations, including previously unreported mutations in the DNA repair genes MUTYH, CHEK2 and BRCA2. Together with mutations in MEN1 and VHL, these mutations occur in 17% of patients. Somatic mutations, including point mutations and gene fusions, were commonly found in genes involved in four main pathways: chromatin remodelling, DNA damage repair, activation of mTOR signalling (including previously undescribed EWSR1 gene fusions), and telomere maintenance. In addition, our gene expression analyses identified a subgroup of tumours associated with hypoxia and HIF signalling.",
    method: "WGS",
    file_path: "WEHI Milton/vast/projects/PDC0001",
    owner:"WEHI",
    code: [
      { ipynb: "https://github.com/amybok/data-common" }, // jupyternote book
      { r: "https://github.com/amybok/data-common" }, // R script
      { py: "https://github.com/amybok/data-common" },
    ], // python script]
    portal: [
      { Aquila: "https://aquila.cheunglab.org/" },
      { cBioportal: "https://www.cbioportal.org/" },
      { Redcap: "https://www.project-redcap.org/" },
    ],

    linked_data: [
      { PDC002: "Lattice Light Sheet" },
      { PDC005: "Spatial Omics Visium" },
    ], // might need to find a way to connect relevant dataset together. Also determine how are they relevant if not specified
  },
  {
    id: "PDC002",
    name: "Whole-genome landscape of pancreatic neuroendocrine tumours - Lattice Light Sheet",
    description: "This is discription",
    method: "Lattice Light Sheet",
    file_path: "path/path/path",
    owner: "WEHI",
    code: [
      { ipynb: "https://github.com/amybok/data-common" }, // jupyternote book
      { py: "https://github.com/amybok/data-common" },
    ], // python script]
    portal: [
      { Aquila: "https://aquila.cheunglab.org/" },
      { Redcap: "https://www.project-redcap.org/" },
    ],
    linked_data: [{ PDC001: "WGS" },
    { PDC005: "Spatial Omics Visium" },],
  },
  {
    id: "PDC003",
    name: "DAXX/ARTX, MEN1, and mTOR pathway genes are frequently altered in pancreatic neuroendocrine tumours",
    description: "This is discription",
    method: "Other",
    file_path: "path/path/path",
    owner:"WEHI",
    code: [
      { ipynb: "https://github.com/amybok/data-common" }, // jupyternote book
      { r: "https://github.com/amybok/data-common" }, // R script
    ], // python script]
    portal: [
      { Aquila: "https://aquila.cheunglab.org/" },
      { cBioportal: "https://www.cbioportal.org/" },
    ],
    linked_data: [],
  },
  {
    id: "PDC004",
    name: "Lung adenocarcinoma and mesothelioma DNA methylation",
    description: "This is discription",
    method: "Other",
    file_path: "path/path/path",
    owner:"WEHI",
    code: [
      // jupyternote book
      { r: "https://github.com/amybok/data-common" }, // R script
      { py: "https://github.com/amybok/data-common" },
    ], // python script]
    portal: [
      { cBioportal: "https://www.cbioportal.org/" },
      { Redcap: "https://www.project-redcap.org/" },
    ],
    linked_data: [],
  },
  {
    id: "PDC005",
    name: "Whole-genome landscape of pancreatic neuroendocrine tumours - Spatial Omics Visium",
    description: "This is discription",
    method: "Spatial",
    file_path: "path/path/path",
    owner:"WEHI",
    code: [
      { ipynb: "https://github.com/amybok/data-common" }, // jupyternote book
      { r: "https://github.com/amybok/data-common" }, // R script
      { py: "https://github.com/amybok/data-common" },
    ], // python script]
    portal: [{ Redcap: "https://www.project-redcap.org/" }],
    linked_data: ["PDC001", "PDC002"],
  },
];

export default datasets;

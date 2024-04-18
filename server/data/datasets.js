function datasetsDetailss(id, name, method) {
  return {
    id: id,
    name: name,
    method: method,
  };
}

const datasets = [
  {
    id: "PDC001",
    name: "Whole-genome landscape of pancreatic neuroendocrine tumours - WGS",
    description: "This is discription",
    method: "WGS",
    file_path: "path/path/path",
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

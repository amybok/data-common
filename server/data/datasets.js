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
    raw_link: "https://github.com/amybok/data-common",
  },
  {
    id: "PDC002",
    name: "Whole-genome landscape of pancreatic neuroendocrine tumours - Lattice Light Sheet",
    description: "This is discription",
    method: "Lattice Light Sheet",
    file_path: "path/path/path",
    code: {
        ipynb: "https://github.com/amybok/data-common", // jupyternote book
        r: "https://github.com/amybok/data-common", // R script
        py: "https://github.com/amybok/data-common", // python script
    }
  },
  {
    id: "PDC003",
    name: "DAXX/ARTX, MEN1, and mTOR pathway genes are frequently altered in pancreatic neuroendocrine tumours",
    description: "This is discription",
    method: "Other",
    file_path: "path/path/path",
    code: {
        ipynb: "https://github.com/amybok/data-common", // jupyternote book
        r: "https://github.com/amybok/data-common", // R script
    }
  },
  {
    id: "PDC004",
    name: "Lung adenocarcinoma and mesothelioma DNA methylation",
    description: "This is discription",
    method: "Other",
    file_path: "path/path/path",
    code: {
        ipynb: "https://github.com/amybok/data-common", // jupyternote book
        py: "https://github.com/amybok/data-common", // python script
    }
  },
  {
    id: "PDC005",
    name: "Whole-genome landscape of pancreatic neuroendocrine tumours - Spatial Omics Visium",
    description: "This is discription",
    method: "Spatial",
    file_path: "path/path/path",
    code: {
        r: "https://github.com/amybok/data-common", // R script
        py: "https://github.com/amybok/data-common", // python script
    }
  },
];

export default datasets;

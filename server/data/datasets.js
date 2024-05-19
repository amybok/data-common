function datasetsDetailss(id, name, method) {
  return {
    id: id,
    name: name,
    description: description,
    method: method,
    file_path: file_path,
    owner: owner,
    raw_link: raw_link,
  };
}

const datasets = [
  {
    id: "PDC0001",
    name: "Whole-genome landscape of pancreatic neuroendocrine tumours",
    description:
      "The diagnosis of pancreatic neuroendocrine tumours (PanNETs) is increasing owing to more sensitive detection methods, and this increase is creating challenges for clinical management. We performed whole-genome sequencing of 102 primary PanNETs and defined the genomic events that characterize their pathogenesis. Here we describe the mutational signatures they harbour, including a deficiency in G:C > T:A base excision repair due to inactivation of MUTYH, which encodes a DNA glycosylase. Clinically sporadic PanNETs contain a larger-than-expected proportion of germline mutations, including previously unreported mutations in the DNA repair genes MUTYH, CHEK2 and BRCA2. Together with mutations in MEN1 and VHL, these mutations occur in 17% of patients. Somatic mutations, including point mutations and gene fusions, were commonly found in genes involved in four main pathways: chromatin remodelling, DNA damage repair, activation of mTOR signalling (including previously undescribed EWSR1 gene fusions), and telomere maintenance. In addition, our gene expression analyses identified a subgroup of tumours associated with hypoxia and HIF signalling.",
    method: "WGS",
    file_path: "WEHI Milton/vast/projects/PDC0001",
    owner: "WEHI",
    code: [{ ipynb: "PDC0001.py" }], // python script]
    template: [
      { ipynb: "http://203.101.229.172:3838/data-portals/fake_jupyter.html" },
    ],
    portal: [
      { cBioportal: "http://203.101.229.172:3838/data-portals/fake_cbio.html" },
    ],

    linked_data: [
      { PDC0002: "Lattice Light Sheet" },
      { PDC0003: "Spatial Omics Visium" },
    ], // might need to find a way to connect relevant dataset together. Also determine how are they relevant if not specified
  },
  {
    id: "PDC0002",
    name: "Whole-genome landscape of pancreatic neuroendocrine tumours",
    description:
      "The diagnosis of pancreatic neuroendocrine tumours (PanNETs) is increasing owing to more sensitive detection methods, and this increase is creating challenges for clinical management. We performed whole-genome sequencing of 102 primary PanNETs and defined the genomic events that characterize their pathogenesis. Here we describe the mutational signatures they harbour, including a deficiency in G:C > T:A base excision repair due to inactivation of MUTYH, which encodes a DNA glycosylase. Clinically sporadic PanNETs contain a larger-than-expected proportion of germline mutations, including previously unreported mutations in the DNA repair genes MUTYH, CHEK2 and BRCA2. Together with mutations in MEN1 and VHL, these mutations occur in 17% of patients. Somatic mutations, including point mutations and gene fusions, were commonly found in genes involved in four main pathways: chromatin remodelling, DNA damage repair, activation of mTOR signalling (including previously undescribed EWSR1 gene fusions), and telomere maintenance. In addition, our gene expression analyses identified a subgroup of tumours associated with hypoxia and HIF signalling.",
    method: "Lattice Light Sheet",
    file_path: "path/path/path",
    owner: "WEHI",
    code: [{ ipynb: "PDC0002.py" }], // python script]
    template: [
      { ipynb: "http://203.101.229.172:3838/data-portals/fake_jupyter.html" },
    ],
    portal: [
      { cBioportal: "http://203.101.229.172:3838/data-portals/fake_cbio.html" },
    ],
    linked_data: [{ PDC0001: "WGS" }, { PDC0003: "Spatial Omics Visium" }],
  },
  {
    id: "PDC0003",
    name: "Whole-genome landscape of pancreatic neuroendocrine tumours",
    description:
      "Spatial transcriptomics allows for the measurement of RNA abundance at a high spatial resolution, making it possible to systematically link the morphology of cellular neighbourhoods and spatially localized gene expression. Here, we report the development of a deep learning algorithm for the prediction of local gene expression from haematoxylin-and-eosin-stained histopathology images using a new dataset of 30,612 spatially resolved gene expression data matched to histopathology images from 23 patients with breast cancer. We identified over 100 genes, including known breast cancer biomarkers of intratumoral heterogeneity and the co-localization of tumour growth and immune activation, the expression of which can be predicted from the histopathology images at a resolution of 100 µm. We also show that the algorithm generalizes well to The Cancer Genome Atlas and to other breast cancer gene expression datasets without the need for re-training. Predicting the spatially resolved transcriptome of a tissue directly from tissue images may enable image-based screening for molecular biomarkers with spatial variation.",
    method: "Spatial Omics Visium",
    file_path: "path/path/path",
    owner: "WEHI",
    code: [
      { ipynb: "PDC0003.py" }, // jupyternote book
    ], // python script]
    template: [
      { ipynb: "http://203.101.229.172:3838/data-portals/fake_jupyter.html" },
    ],
    portal: [
      { cBioportal: "http://203.101.229.172:3838/data-portals/fake_cbio.html" },
    ],
    linked_data: [{ PDC0001: "WGS" }, { PDC0002: "Lattic Light Sheet" }],
  },
  {
    id: "PDC0004",
    name: "Spatial Omics Human Breast Cancer",
    description:
      "Spatial transcriptomics allows for the measurement of RNA abundance at a high spatial resolution, making it possible to systematically link the morphology of cellular neighbourhoods and spatially localized gene expression. Here, we report the development of a deep learning algorithm for the prediction of local gene expression from haematoxylin-and-eosin-stained histopathology images using a new dataset of 30,612 spatially resolved gene expression data matched to histopathology images from 23 patients with breast cancer. We identified over 100 genes, including known breast cancer biomarkers of intratumoral heterogeneity and the co-localization of tumour growth and immune activation, the expression of which can be predicted from the histopathology images at a resolution of 100 µm. We also show that the algorithm generalizes well to The Cancer Genome Atlas and to other breast cancer gene expression datasets without the need for re-training. Predicting the spatially resolved transcriptome of a tissue directly from tissue images may enable image-based screening for molecular biomarkers with spatial variation.",
    method: "Visium",
    file_path: "path/path/path",
    owner: "WEHI",
    code: [
      { ipynb: "PDC0004.py" }, // jupyternote book
    ], // python script]
    template: [
      { ipynb: "http://203.101.229.172:3838/data-portals/fake_jupyter.html" },
    ],
    portal: [
      { Aquila: "http://203.101.229.172:3838/data-portals/fake_aquila.html" },
    ],
    linked_data: [],
  },
  {
    id: "DDC0001",
    name: "Ischemic Heart Disease in Melbourne",
    description:
      "The Melbourne Ischemic Heart Disease Patients Dataset offers a comprehensive overview of patients diagnosed with ischemic heart disease (IHD) within the Melbourne region. This dataset comprises diverse variables covering demographic, clinical, and therapeutic aspects, catering to the needs of researchers, healthcare practitioners, and policymakers. Key demographic factors such as age, gender, and ethnicity are documented alongside clinical indicators such as cardiac biomarkers, electrocardiogram (ECG) findings, and imaging results like echocardiography and coronary angiography. Additionally, treatment modalities including medication regimens, revascularization procedures (such as angioplasty or bypass surgery), and lifestyle interventions may be included. By providing rich insights into the prevalence, characteristics, and management of ischemic heart disease among Melbourne residents, this dataset supports endeavors aimed at enhancing patient care, refining treatment strategies, and addressing public health challenges related to cardiovascular diseases",
    method: "Other",
    file_path: "N/A",
    owner: "WEHI",
    code: [
      { r: "DDC0001.R" }, // R script
    ], // python script]
    template: [{ r: "http://203.101.229.172:3838/code-template/ddc0001" }],
    portal: [
      {
        "R Shiny": "http://203.101.229.172:3838/redcap-portal/",
      },
      {
        Redcap:
          "https://redcap.wehi.edu.au/redcap_v14.3.9/ProjectSetup/index.php?pid=658",
      },
    ],
    linked_data: [
      { DDC0002: "Diabetes in Melbourne" },
      { DDC0003: "Non-standard dataset" },
    ],
  },
  {
    id: "DDC0002",
    name: "Diabetes in Melbourne",
    description:
      "The Melbourne Diabetes Patients Dataset provides comprehensive insights into patients diagnosed with diabetes in the Melbourne area. This dataset encompasses a range of demographic, clinical, and treatment-related variables, offering valuable information for researchers, healthcare professionals, and policymakers. Included variables cover patient demographics such as age, gender, and ethnicity, as well as clinical indicators like blood glucose levels, HbA1c measurements, and comorbidities. Additionally, treatment modalities such as medication regimens, insulin usage, and lifestyle interventions may be documented. This dataset serves as a valuable resource for understanding the prevalence, characteristics, and management of diabetes within the Melbourne population, facilitating research aimed at improving patient outcomes and healthcare delivery strategies.",
    method: "Other",
    file_path: "N/A",
    owner: "WEHI",
    code: [
      { r: "DDC0002.R" }, // R script
    ],
    template: [{ r: "http://203.101.229.172:3838/code-template/ddc0002" }],
    portal: [
      { "R Shiny": "http://203.101.229.172:3838/redcap-portal/" },
      {
        Redcap:
          "https://redcap.wehi.edu.au/redcap_v14.3.9/ProjectSetup/index.php?pid=656",
      },
    ],
    linked_data: [
      { DDC0001: "Ischemic Heart Disease in Melbourne" },
      { DDC0003: "Non-standard dataset" },
    ],
  },
  {
    id: "DDC0003",
    name: "Non-stardard Database",
    description: "This is discription",
    method: "Other",
    file_path: "N/A",
    owner: "WEHI",
    code: [
      { r: "DDC0003.R" }, // R script
    ],
    template: [{ r: "http://203.101.229.172:3838/code-template/ddc0003" }],
    portal: [
      { "R Shiny": "http://203.101.229.172:3838/redcap-portal/" },
      {
        Redcap:
          "https://redcap.wehi.edu.au/redcap_v14.3.9/ProjectSetup/index.php?pid=657",
      },
    ],
    linked_data: [
      { DDC0001: "Ischemic Heart Disease in Melbourne" },
      { DDC0002: "Diabetes in Melbourne" },
    ],
  },
];

export default datasets;

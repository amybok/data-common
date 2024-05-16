import express from "express";
import fs from "fs";
import path from "path";

const codeApi = express.Router();

// const readScript = (scriptName) => {
//   //   const __dirname = path.dirname(new URL(import.meta.url).pathname);
//   const scriptPath = path.join("../server/code", scriptName);
//   try {
//     const scriptContent = fs.readFileSync(scriptPath, "utf8");
//     return scriptContent;
//   } catch (error) {
//     console.error(`Error reading script ${scriptName}:`, error);
//     return null;
//   }
// };

const readScript = async (scriptName) => {
  //   const __dirname = path.dirname(new URL(import.meta.url).pathname);
  const scriptPath = path.join("../server/code", scriptName);
  try {
    const scriptContent = await fs.promises.readFile(scriptPath, "utf8");
    return scriptContent;
  } catch (error) {
    console.error(`Error reading script ${scriptName}:`, error);
    throw error;
  }
};

// codeApi.get("/:scriptName", (req, res) => {
//   try {
//     const { scriptName } = req.params;
//     const scriptContent = readScript(scriptName);

//     if (scriptContent) {
//       res.send(scriptContent);
//     } else {
//       res.status(404).json({ message: "Script not found" });
//     }
//     // const code = `print("Hello world")`;
//     // res.json({ code });
//   } catch (error) {
//     console.error("Error generating code:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

codeApi.get("/:scriptName", async (req, res) => {
  try {
    const { scriptName } = req.params;
    const scriptContent = await readScript(scriptName);

    if (scriptContent) {
      const extension = path.extname(scriptName);
      let contentType = "text/plain"; // Default content type

      const mimeTypes = {
        ".js": "text/javascript",
        ".py": "text/x-python",
        ".r": "text/x-r-source",
        ".ipynb": "application/json",
      };

      if (mimeTypes.hasOwnProperty(extension)) {
        contentType = mimeTypes[extension];
      }
      res.setHeader("Content-Type", contentType);
      res.send(scriptContent);
    } else {
      res.status(404).json({ message: "Script not found" });
    }
  } catch (error) {
    console.error("Error generating code:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default codeApi;

import React, { useState } from "react";
import "./App.css";
import { ExcelRenderer } from "react-excel-renderer";
import TableRenderer from "./components/TableRenderer";

function App() {
  const [file, setFile] = useState({});
  const [fileUploaded, setFileUploaded] = useState(false);
  const handleFileBrowse = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const excel = e.target.files[0];
      ExcelRenderer(excel, (err, resp) => {
        if (err) return;
        else {
          setFile({
            cols: resp.rows[0],
            rows: resp.rows.slice(1),
          });
          setFileUploaded(true);
        }
      });
    }
  };

  const resetFile = () => {
    setFile({});
    setFileUploaded(false);
  };
  return (
    <div id="root" className="bg-slate-200 justify-center items-center flex">
      {!fileUploaded && (
        <div className="border-dashed border-2 border-cyan-600 p-20 flex items-center justify-center">
          <input
            className=""
            onChange={handleFileBrowse}
            type="file"
            id="myFile"
            name="filename"
            accept=".xlsx,.xls"
          />
        </div>
      )}
      {fileUploaded && <TableRenderer resetFile={resetFile} excelFile={file} />}
    </div>
  );
}

export default App;

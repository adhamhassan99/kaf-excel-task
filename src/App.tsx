/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import "./App.css";
import { ExcelRenderer } from "react-excel-renderer";
import TableRenderer from "./components/TableRenderer";
import { Player } from "@lottiefiles/react-lottie-player";

function App() {
  const UploadRef = useRef<any>(null);
  const [file, setFile] = useState({});
  const [fileUploaded, setFileUploaded] = useState(false);
  const handleFileBrowse = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const excel = e.target.files[0];
      ExcelRenderer(excel, (err: any, resp: any) => {
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

  const handleUploadClick = () => {
    UploadRef.current?.click();
  };

  return (
    <div id="root" className="bg-slate-200 justify-center items-center flex">
      {!fileUploaded && (
        <div
          onClick={handleUploadClick}
          className="border-dashed border-2 border-cyan-600 p-20 flex items-center justify-center hover:cursor-pointer flex-col"
        >
          <Player
            className="w-40"
            loop
            autoplay
            src={
              "https://lottie.host/f805f053-a4bf-4068-a288-0fb0f4c4bf68/ss03uU18qo.json"
            }
          />
          <div className="">Upload your .xls or .xlsx</div>

          <input
            ref={UploadRef}
            className="absolute hidden"
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

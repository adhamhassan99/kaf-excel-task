/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import EmployeeStatistics from "./EmployeeStatistics";

type Props = {
  excelFile: any;
  resetFile: () => void;
};

function TableRenderer({ excelFile, resetFile }: Props) {
  const [selectedEmployee, setSelectedEmployee] = useState<number>(-1);

  const handleClick = (index: number) => {
    if (index === selectedEmployee) setSelectedEmployee(-1);
    else setSelectedEmployee(index);
  };

  return (
    <div className="flex w-full justify-between px-10">
      <div className="grid grid-cols-3  ">
        {excelFile.cols?.map((item: any) => (
          <div className="text-center px-3">{item}</div>
        ))}
        {excelFile.rows?.map((item: any, index: any) => {
          return item.map((item: any) => (
            <div
              onClick={() => handleClick(index)}
              className={` py-2 text-center   ${
                selectedEmployee === index
                  ? "bg-slate-600 text-white"
                  : index % 2 === 0
                  ? "bg-white"
                  : "bg-slate-100"
              } capitalize`}
            >
              {item}
            </div>
          ));
        })}
      </div>
      <div className=" flex flex-col flex-1 justify-center items-center">
        {selectedEmployee !== -1 && (
          <EmployeeStatistics
            percentage={excelFile.rows[selectedEmployee][2]}
            salary={excelFile.rows[selectedEmployee][1]}
          />
        )}
        <div
          onClick={resetFile}
          className=" bg-slate-300 py-2 px-7 rounded-md hover:cursor-pointer transition-transform hover:bg-white hover:translate-x-2 hover:-translate-y-2"
        >
          Upload a new file
        </div>
      </div>
    </div>
  );
}

export default TableRenderer;

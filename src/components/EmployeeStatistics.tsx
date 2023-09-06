import React from "react";

type Props = {
  salary: number;
  percentage: number;
};

function EmployeeStatistics({ percentage, salary }: Props) {
  return (
    <div className="flex-1 flex   items-center">
      {percentage}% from {salary} is {((percentage / 100) * salary).toFixed()}
    </div>
  );
}

export default EmployeeStatistics;

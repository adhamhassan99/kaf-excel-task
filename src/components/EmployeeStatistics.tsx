type Props = {
  salary: number;
  percentage: number;
};

function EmployeeStatistics({ percentage, salary }: Props) {
  return (
    <div className="flex-1 flex justify-center flex-col">
      {percentage}% from {salary} is {((percentage / 100) * salary).toFixed()}
      <div className="text-center my-4 font-bold text-2xl">
        {((percentage / 100) * salary).toFixed()}
      </div>
    </div>
  );
}

export default EmployeeStatistics;

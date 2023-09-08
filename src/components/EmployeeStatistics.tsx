import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import StatisticsDetail from "./StatisticsDetail";

type Props = {
  salary: number;
  percentage: number;
  name: string;
};
ChartJS.register(ArcElement, Tooltip, Legend);

function EmployeeStatistics({ percentage, salary }: Props) {
  const data = {
    labels: ["Salary", "loan"],

    datasets: [
      {
        label: "value",
        data: [salary, ((percentage / 100) * salary).toFixed()],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="flex-1 flex items-center mb-8 ">
      <div className="shadow-xl bg-white py-9 px-7 rounded-2xl flex flex-col items-center">
        <Doughnut data={data} />
        <div className="mt-4 w-full space-y-2">
          {/* <span className="capitalize text-xl">{name}</span>'s base salary is{" "}
          <b>{salary}</b>
          <div className="">
            Allowed loan value is{" "}
            <b>{((percentage / 100) * salary).toFixed()}</b>
          </div>
          <div className="">
            Total money employee will receive is{" "}
            <b>{(salary + (percentage / 100) * salary).toFixed()}</b>
          </div> */}
          <StatisticsDetail
            textColor="hotRed"
            title="Base Salary"
            value={salary}
          />
          <StatisticsDetail
            textColor="hotBlue"
            title={`${percentage}% from salary`}
            value={((percentage / 100) * salary).toFixed()}
          />
          <StatisticsDetail
            textColor="green-600"
            title={`Total money`}
            value={((percentage / 100) * salary + salary).toFixed()}
          />
        </div>
      </div>
    </div>
  );
}

export default EmployeeStatistics;

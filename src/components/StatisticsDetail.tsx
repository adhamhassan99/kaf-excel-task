type Props = {
  title: string;
  value: string | number;
  textColor: string;
};

function StatisticsDetail({ title, value, textColor }: Props) {
  return (
    <div className={`flex justify-between px-1`}>
      {textColor === "hotBlue" && (
        <>
          <div className="text-2xl text-hotBlue">{title}</div>
          <div className="text-2xl text-hotBlue">{value}</div>
        </>
      )}
      {textColor === "hotRed" && (
        <>
          <div className="text-2xl text-hotRed">{title}</div>
          <div className="text-2xl text-hotRed">{value}</div>
        </>
      )}
      {textColor === "green-600" && (
        <>
          <div className="text-2xl text-green-600">{title}</div>
          <div className="text-2xl text-green-600">{value}</div>
        </>
      )}
    </div>
  );
}

export default StatisticsDetail;

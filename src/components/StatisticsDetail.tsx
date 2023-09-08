type Props = {
  title: string;
  value: string | number;
  textColor: string;
};

function StatisticsDetail({ title, value, textColor }: Props) {
  return (
    <div className={`flex justify-between px-1`}>
      <div className={`text-2xl text-${textColor}`}>{title}</div>
      <div className={`text-2xl text-${textColor}`}>{value}</div>
    </div>
  );
}

export default StatisticsDetail;

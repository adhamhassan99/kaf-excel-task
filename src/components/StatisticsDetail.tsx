type Props = {
  title: string;
  value: string | number;
  textColor: string;
};

function StatisticsDetail({ title, value, textColor }: Props) {
  return (
    <div className={`flex justify-between px-1  text-${textColor}`}>
      <div className="text-2xl">{title}</div>
      <div className="text-2xl">{value}</div>
    </div>
  );
}

export default StatisticsDetail;

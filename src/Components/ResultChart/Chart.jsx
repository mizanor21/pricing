import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const Chart = () => {
  const results = [
    {
      semester: "Semester 1",
      sgpa: 3.75,
      cgpa: 3.75,
    },
    {
      semester: "Semester 2",
      sgpa: 3.83,
      cgpa: 2.79,
    },
    {
      semester: "Semester 3",
      sgpa: 3.7,
      cgpa: 3.76,
    },
    {
      semester: "Semester 4",
      sgpa: 3.9,
      cgpa: 3.82,
    },
    {
      semester: "Semester 5",
      sgpa: 3.95,
      cgpa: 3.25,
    },
    {
      semester: "Semester 6",
      sgpa: 2,
      cgpa: 3,
    },
    {
      semester: "Semester 7",
      sgpa: 2.8,
      cgpa: 3.87,
    },
    {
      semester: "Semester 8",
      sgpa: 4,
      cgpa: 3.89,
    },
    {
      semester: "Semester 9",
      sgpa: 3.95,
      cgpa: 3.91,
    },
    {
      semester: "Semester 10",
      sgpa: 3.97,
      cgpa: 3.93,
    },
    {
      semester: "Semester 11",
      sgpa: 3.5,
      cgpa: 3.25,
    },
    {
      semester: "Semester 12",
      sgpa: 3.05,
      cgpa: 3.04,
    },
  ];

  return (
    <div>
      <h1 className="bg-green-700 rounded-md p-5 m-5">Explore Rechart...</h1>
      <LineChart width={600} height={500} data={results}>
        <Line dataKey={"sgpa"} stroke="red"></Line>
        <Line dataKey={"cgpa"} stroke="green"></Line>
        <XAxis dataKey={"semester"}></XAxis>
        <YAxis dataKey={""}></YAxis>
        <CartesianGrid stroke="gray" strokeDasharray={"5 5"}></CartesianGrid>
        <Tooltip></Tooltip>
        <Legend></Legend>
      </LineChart>
    </div>
  );
};

export default Chart;

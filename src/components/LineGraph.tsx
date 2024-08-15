import React from "react";
// import { Line } from "react-chartjs-2";
import { useCovidData } from "../hooks/useCovidData";

const LineGraph: React.FC = () => {
  const { historicalData } = useCovidData();

  if (historicalData.isLoading) return <div>Loading...</div>;
  if (historicalData.isError) return <div>Error loading data</div>;

  //   const chartData = {
  //     labels: Object.keys(historicalData.data.cases),
  //     datasets: [
  //       {
  //         label: "Cases Over Time",
  //         data: Object.values(historicalData.data.cases),
  //         borderColor: "rgba(75,192,192,1)",
  //         fill: false,
  //       },
  //     ],
  //   };

  console.log(historicalData.data);
  return (
    <div>
      <h1>data</h1>
    </div>
  );
};

export default LineGraph;

import React from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { useCovidData } from "../hooks/useCovidData";

// Register Chart.js components
Chart.register(...registerables);

const LineGraph: React.FC = () => {
  const { historicalData } = useCovidData();

  if (historicalData.isLoading) return <div>Loading...</div>;
  if (historicalData.isError) return <div>Error loading data</div>;

  // Ensure historicalData.data is defined
  if (!historicalData.data) return <div>No data available</div>;

  const chartData = {
    labels: Object.keys(historicalData.data.cases),
    datasets: [
      {
        label: "Cases Over Time",
        data: Object.values(historicalData.data.cases),
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
      {
        label: "Deaths Over Time",
        data: Object.values(historicalData.data.deaths),
        borderColor: "rgba(245, 0, 1, 0.8)",
        fill: false,
      },
      {
        label: "Recovered Over Time",
        data: Object.values(historicalData.data.recovered),
        borderColor: "rgba(5, 254, 1, 0.8)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to fill its container
  };

  return (
    <div className="relative h-80 w-full">
      {/* Set height and width with Tailwind */}
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineGraph;

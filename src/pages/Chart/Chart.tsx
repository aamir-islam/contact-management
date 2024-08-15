import React, { useState } from "react";
import CovidMap from "../../components/CovidMap";
import LineGraph from "../../components/LineGraph";

const Chart: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState<"lineGraph" | "covidMap">(
    "lineGraph"
  );

  const handleChartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedChart(event.target.value as "lineGraph" | "covidMap");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mb-4">
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value="lineGraph"
            checked={selectedChart === "lineGraph"}
            onChange={handleChartChange}
            className="mr-2"
          />
          Line Graph
        </label>
        <label className="flex items-center mb-2">
          <input
            type="radio"
            value="covidMap"
            checked={selectedChart === "covidMap"}
            onChange={handleChartChange}
            className="mr-2"
          />
          Covid Map
        </label>
      </div>
      <div className="w-full max-w-4xl p-4">
        {selectedChart === "lineGraph" ? <LineGraph /> : <CovidMap />}
      </div>
    </div>
  );
};

export default Chart;

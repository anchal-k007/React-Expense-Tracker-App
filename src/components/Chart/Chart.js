import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  let totalValue = 0;
  props.dataPoints.forEach(dataPoint => {
    totalValue += dataPoint.value;
  });
  
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.value}
            label={dataPoint.label}
            key={dataPoint.label}
            totalValue={totalValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;

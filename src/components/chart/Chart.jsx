import React from 'react';
import "./chart.css"
import {ResponsiveContainer, LineChart, XAxis, Line, Tooltip, CartesianGrid, Legend} from "recharts";
import {chartData} from "../../dummy"

const Chart = () => {
  return (
    <div className="chart">
      <h3 className="chartTitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={ 4 / 1 }>
        <LineChart
          data={chartData}
        >
          <XAxis dataKey="name" stroke="#555"/>
          <Line type="monotone" dataKey="Active User" stroke="#555" />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
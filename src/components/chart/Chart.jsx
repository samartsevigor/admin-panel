import React from 'react';
import "./chart.css"
import {ResponsiveContainer, LineChart, XAxis, Line, Tooltip, CartesianGrid, Legend} from "recharts";


const Chart = () => {

  const data = [
    {
      name: 'Jan',
      "Active User": 4000
    },
    {
      name: 'Feb',
      "Active User": 1000
    },
    {
      name: 'Mar',
      "Active User": 2000
    },
    {
      name: 'Apr',
      "Active User": 4000
    },
    {
      name: 'May',
      "Active User": 3000
    },
    {
      name: 'Jun',
      "Active User": 1000
    },
    {
      name: 'Jul',
      "Active User": 3000
    },
    {
      name: 'Aug',
      "Active User": 2000
    },
    {
      name: 'Sep',
      "Active User": 2400
    },
    {
      name: 'Oct',
      "Active User": 4000
    },
    {
      name: 'Nov',
      "Active User": 1000
    },
    {
      name: 'Dec',
      "Active User": 4000
    }
  ];


  return (
    <div className="chart">
      <h3 className="chartTitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={ 4 / 1 }>
        <LineChart
          data={data}
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
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import constants from "../../constants";

export default function ChartContainer({ chartData, refinedData }) {
  return (
    <ResponsiveContainer height={300}>
      <BarChart
        data={refinedData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        {chartData.data?.plot?.y.map((item, index) => (
          <Bar dataKey={item} key={index} stackId="a" fill={constants.item[`${item}`]} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

import React from "react";
import { BiCalendar } from "react-icons/bi";
import moment from "moment";
import RoundBox from "../RoundBox";
import Chart from "./Chart";
import useChartData from "../../hooks/useChartData";

export default function ChartContainer() {
  const chartData = useChartData();

  const refinedData =
    chartData.data &&
    Object.keys(chartData?.data?.data).map((xData, index) => {
      return {
        name: moment(xData).format("HH:mm"),
        ...chartData?.data?.data[`${xData}`]
      };
    });

  return (
    <RoundBox>
      <div className="component-chart-calendar">
        <span className="component-chart-calendar-date">Current Date: {moment(chartData?.data?.plot?.x[0]).format("YYYY-MM-DD")}</span> <BiCalendar />
      </div>
      {!chartData.loading && chartData.data ? <Chart chartData={chartData} refinedData={refinedData} /> : <div>loading</div>}
    </RoundBox>
  );
}

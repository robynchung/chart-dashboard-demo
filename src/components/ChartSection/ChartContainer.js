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
    <>
      <h2>Statistics</h2>
      <RoundBox>
        <div className="component-chart-calendar">
          <div className="component-chart-calendar-container">
            <span className="component-chart-calendar-date">Current Date: {moment(chartData?.data?.plot?.x[0]).format("YYYY-MM-DD")}</span>{" "}
            <BiCalendar />
          </div>
        </div>
        {!chartData.loading && chartData.data ? (
          <Chart chartData={chartData} refinedData={refinedData} />
        ) : (
          <div className="loading">&#128640; Loading...</div>
        )}
      </RoundBox>
    </>
  );
}

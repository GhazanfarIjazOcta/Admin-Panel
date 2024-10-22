import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { chartsGridClasses } from "@mui/x-charts/ChartsGrid";
const dataset = [
  {
    london: 450,
    paris: 350,
    newYork: 86,
    seoul: 21,
    month: "Jan",
  },
  {
    london: 390,
    paris: 290,
    month: "Feb",
  },
  {
    london: 320,
    paris: 180,
    month: "Mar",
  },
  {
    london: 420,
    paris: 280,
    month: "Apr",
  },
  {
    london: 470,
    paris: 200,
    month: "May",
  },
  {
    london: 350,
    paris: 280,
    month: "June",
  },
  {
    london: 410,
    paris: 190,
    month: "July",
  },
  {
    london: 420,
    paris: 150,
    month: "Aug",
  },
  {
    london: 420,
    paris: 197,
    month: "Sept",
  },
  {
    london: 400,
    paris: 190,
    month: "Oct",
  },
  {
    london: 405,
    paris: 170,
    month: "Nov",
  },
  {
    london: 415,
    paris: 90,
    month: "Dec",
  },
];

const valueFormatter = (value) => `${value}mm`;

function BarChartCom({ customWidth }) {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[
        {
          scaleType: "band",
          dataKey: "month",
          categoryGapRatio: 0.7,
          barGapRatio: 1,
          colors: ["blue", "red"],
          valueFormatter: (value, context) => `${value}`,
          disableLine: "true",
          disableTicks: "true",
          axisLabelProps: {
            style: {
              fill: "#F38712", // Set the color of the months' text
              fontSize: "20px", // Optional: Adjust the font size
              fontWeight: "bold", // Optional: Make the text bold
            },
          },
        },
      ]}
      slotProps={{ legend: { hidden: true } }}
      margin={{ left: 80, top: 30, bottom: 40, right: 10 }}
      // height={200}
      yAxis={[
        {
          valueFormatter: (value) =>
            value != 0 ? `${value} MPG` : `${value} MPG \n L/100km`,
          disableLine: "true",
          disableTicks: "true",
        },
      ]}
      series={[
        {
          dataKey: "london",
          valueFormatter,
          color: ["#D7DBEC"],
        },
        {
          dataKey: "paris",
          valueFormatter,
          color: ["#F38712"],
        },
      ]}
      bottomAxis={{
        tickLabelStyle: {
          fontSize: "12px",
          color: "#A1A7C4",
          fontWeight: 400,
          fontFamily: "Inter",
        },
        tickLabelPlacement: "middle",
      }}
      width={customWidth}
      borderRadius={50}
      axisLine="line"
      grid={{ horizontal: true }}
      sx={{
        [`& .${axisClasses.left} .${axisClasses.label}`]: {
          transform: "translateX(-10px)",
        },
        [`& .${chartsGridClasses.line}`]: {
          strokeDasharray: "5 3",
          strokeWidth: 2,
        },
      }}
    />
  );
}

export default BarChartCom;

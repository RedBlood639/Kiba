import React from "react";
import {
  ChartLayout,
  PriceText,
  DetailDiv,
  StateText,
  TotalText,
  TimeLayout,
  TimeRangesLayout,
  TimeRange,
} from "./ChartContain.styled";
import { CoinChange } from "ui/elements/CoinChange";
import { AreaChart, XAxis, Tooltip, Area, ResponsiveContainer } from "recharts";

const ChartContain = () => {
  const data = [
    {
      name: "",
      pv: 2400,
      amt: 2400,
    },
    {
      name: "11:30 AM",
      pv: 1398,
      amt: 2210,
    },
    {
      name: "",
      pv: 9800,
      amt: 2290,
    },
    {
      name: "7:30 PM",
      pv: 3908,
      amt: 2000,
    },
    {
      name: "",
      pv: 4800,
      amt: 2181,
    },
    {
      name: "3:30 AM",
      pv: 3800,
      amt: 2500,
    },
    {
      name: "",
      pv: 4300,
      amt: 2100,
    },
    {
      name: "10:35 AM",
      pv: 2300,
      amt: 2100,
    },
  ];
  return (
    <ChartLayout>
      <CoinChange></CoinChange>
      <PriceText>1.0005 USDC</PriceText>
      <DetailDiv>
        <StateText>
          <TotalText>+227.543364 USDC</TotalText>
          <TimeLayout>Past 24 Hours</TimeLayout>
        </StateText>
        <TimeRangesLayout>
          <TimeRange>24H</TimeRange>
          <TimeRange>1W</TimeRange>
          <TimeRange>1M</TimeRange>
        </TimeRangesLayout>
      </DetailDiv>
      <ResponsiveContainer width="100%" height={293.5}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="rgb(83, 243, 195)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="rgb(83, 243, 195)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Tooltip />

          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartLayout>
  );
};
export default ChartContain;

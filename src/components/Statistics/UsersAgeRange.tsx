/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getChartOptions, getChartConfig } from "./charts.config";

import { useAppSelector } from "../../store/hooks";
import { selectStatisticAgeRange } from "../../store/selectors/statisticSelectots";
import { useStatistic } from "../../hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const UsersByPosition: React.FC = () => {
  const { range, total } = useAppSelector(selectStatisticAgeRange);

  const [chartData, setChartData] = useState<any>();

  useEffect(() => {
    if (typeof range[0] !== "number") return;

    setChartData(getChartConfig({ key: "ageRange", data: range }));
  }, [range]);

  const { setAgeRange } = useStatistic();

  useEffect(() => {
    setAgeRange();
  }, []);

  return (
    <div className="statistic__wrapper">
      <div className="stat-header">
        <p>{total} users in total</p>
      </div>
      <div className="statistic__container">
        {chartData && (
          <Bar
            options={getChartOptions({ text: "Users age range" })}
            data={chartData}
            className="chart"
          />
        )}
      </div>
    </div>
  );
};

export default UsersByPosition;

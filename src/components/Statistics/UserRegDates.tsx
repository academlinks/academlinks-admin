/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getChartOptions, getChartConfig } from "./charts.config";

import { useAppSelector } from "../../store/hooks";
import { selectStatisticRegDates } from "../../store/selectors/statisticSelectots";
import { useStatistic } from "../../hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UserRegDates: React.FC = () => {
  const { range, total } = useAppSelector(selectStatisticRegDates);
  const [chartData, setChartData] = useState<any>();

  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    if (typeof range[0] !== "number") return;
    setChartData(getChartConfig({ key: "usersRegDateRange", data: range }));
  }, [range]);

  const { setRegDateRange } = useStatistic();

  useEffect(() => {
    setRegDateRange({ regYear: year });
  }, [year]);

  return (
    <div className="statistic__wrapper">
      <div className="stat-header">
        <div className="reg-date--range__select-field">
          <label>select year</label>
          <select onChange={(e) => setYear(parseInt(e.target.value))}>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <p>{total} users in total</p>
      </div>
      <div className="statistic__container">
        {chartData && (
          <Line
            options={getChartOptions({
              text: `Users registered on ${year} year`,
            })}
            data={chartData}
            className="chart"
          />
        )}
      </div>
    </div>
  );
};

export default UserRegDates;

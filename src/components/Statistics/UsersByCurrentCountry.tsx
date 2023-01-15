/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getChartConfig } from "./charts.config";

import { useAppSelector } from "../../store/hooks";
import { selectStatisticByCurrCountry } from "../../store/selectors/statisticSelectots";
import { useStatistic } from "../../hooks";

ChartJS.register(ArcElement, Tooltip, Legend);

const UsersByCurrentCountry: React.FC = () => {
  const { labels, range, total, countriesTotal } = useAppSelector(
    selectStatisticByCurrCountry
  );
  const [chartData, setChartData] = useState<any>();

  const { setCurrCountryRange } = useStatistic();

  useEffect(() => {
    if (typeof range[0] !== "number") return;

    setChartData(
      getChartConfig({ key: "currCountryRange", data: range, labels })
    );
  }, [range]);

  useEffect(() => {
    setCurrCountryRange();
  }, []);

  return (
    <div className="statistic__wrapper">
      <div className="stat-header">
        <p>{total} users in total</p>
        <p>{countriesTotal} countries in total</p>
      </div>
      <div className="statistic__container radial">
        {chartData && <Pie data={chartData} className="chart" />}
      </div>
    </div>
  );
};
export default UsersByCurrentCountry;

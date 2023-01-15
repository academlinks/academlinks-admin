/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getChartConfig } from "./charts.config";

import { useAppSelector } from "../../store/hooks";
import { selectStatisticByInstitution } from "../../store/selectors/statisticSelectots";
import { useStatistic } from "../../hooks";

ChartJS.register(ArcElement, Tooltip, Legend);

const UsersByInstitution: React.FC = () => {
  const { range, total, institutionsTotal, labels } = useAppSelector(
    selectStatisticByInstitution
  );
  const [chartData, setChartData] = useState<any>();

  useEffect(() => {
    if (typeof range[0] !== "number") return;

    setChartData(
      getChartConfig({ key: "institutionsRange", data: range, labels })
    );
  }, [range]);

  const { setInstitutionRange } = useStatistic();

  useEffect(() => {
    setInstitutionRange();
  }, []);

  return (
    <div className="statistic__wrapper">
      <div className="stat-header">
        <p>{total} users in total</p>
        <p>{institutionsTotal} institutions in total</p>
      </div>
      <div className="statistic__container radial">
        {chartData && <Pie data={chartData} className="chart" />}
      </div>
    </div>
  );
};

export default UsersByInstitution;

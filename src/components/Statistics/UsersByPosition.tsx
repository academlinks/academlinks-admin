/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getChartConfig } from "./charts.config";

import { useAppSelector } from "../../store/hooks";
import { selectStatisticByPosition } from "../../store/selectors/statisticSelectots";
import { useStatistic } from "../../hooks";

ChartJS.register(ArcElement, Tooltip, Legend);

const UsersByPosition: React.FC = () => {
  const {
    range,
    total,
    administrativPersonalCount,
    assistantProfessorsCount,
    associateProfessorsCount,
    phdStudentCount,
    postDocFellowCount,
    professorsCount,
    researcherCount,
  } = useAppSelector(selectStatisticByPosition);

  const [chartData, setChartData] = useState<any>();

  useEffect(() => {
    if (typeof range[0] !== "number") return;

    function generatePosLabels() {
      return [
        `professor ${professorsCount}`,
        `associate professor ${associateProfessorsCount}`,
        `assistant professor ${assistantProfessorsCount}`,
        `researcher ${researcherCount}`,
        `administrative personnel ${administrativPersonalCount}`,
        `phd student ${phdStudentCount}`,
        `post-doc-fellow ${postDocFellowCount}`,
      ];
    }

    setChartData(
      getChartConfig({
        key: "userPositionRange",
        data: range,
        labels: generatePosLabels(),
      })
    );
  }, [range]);

  const { setPositionRange } = useStatistic();

  useEffect(() => {
    setPositionRange();
  }, []);

  return (
    <div className="statistic__wrapper">
      <div className="stat-header">
        <p>{total} users in total</p>
      </div>
      <div className="statistic__container radial">
        {chartData && <Doughnut data={chartData} className="chart" />}
      </div>
    </div>
  );
};

export default UsersByPosition;

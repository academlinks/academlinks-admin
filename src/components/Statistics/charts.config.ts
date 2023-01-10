//SECTION: Getter types

interface GetChartOptionsT {
  text: string;
}

interface GetChartConfigT {
  data: number[];
  key:
    | "ageRange"
    | "usersRegDateRange"
    | "genderRange"
    | "userPositionRange"
    | "currCountryRange"
    | "homelandRange";
  labels?: string[];
  bgColors?: string[];
  borderColors?: string[];
}

//SECTION: Chart Types

interface ConfigsT {
  ageRange: AgeRangeChartDataT;
  usersRegDateRange: UserRegDatesRangeChartDataT;
  userPositionRange: UserByPositionRangeChartDataT;
  genderRange: PieChartDataT;
  currCountryRange: PieChartDataT;
  homelandRange: PieChartDataT;
}

interface PieChartDataT {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string[];
    backgroundColor: string[];
    borderWidth: number;
  }[];
}

interface AgeRangeChartDataT {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}

interface UserRegDatesRangeChartDataT {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

interface UserByPositionRangeChartDataT {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

//SECTION: getter functions

export function getChartOptions({ text }: GetChartOptionsT) {
  return {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text,
      },
    },
  };
}

export function getChartConfig({
  data,
  key,
  labels,
  bgColors,
  borderColors,
}: GetChartConfigT) {
  const configs: ConfigsT = {
    ageRange: {
      labels: ["18_25", "25_35", "35_50", "50_75", "75_100"],
      datasets: [
        {
          data,
          label: "count",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    },
    usersRegDateRange: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "Octomber",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "registered",
          data,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    },
    genderRange: {
      labels: ["male", "female"],
      datasets: [
        {
          label: "count",
          data,
          backgroundColor: [
            "rgba(54, 162, 235, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: ["rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)"],
          borderWidth: 1,
        },
      ],
    },
    userPositionRange: {
      labels: labels || [
        "professor",
        "associate professor",
        "assistant professor",
        "researcher",
        "administrative personnel",
        "phd student",
        "post-doc-fellow",
      ],
      datasets: [
        {
          label: "count",
          data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(64, 255, 128, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(64, 255, 128, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    currCountryRange: {
      labels: labels || ["test1", "test2"],
      datasets: [
        {
          label: "count",
          data,
          backgroundColor: get10Color("fill") || ["rgba(54, 162, 235, 0.2)"],
          borderColor: get10Color("shade") || ["rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    },
    homelandRange: {
      labels: labels || ["test1", "test2"],
      datasets: [
        {
          label: "count",
          data,
          backgroundColor: get10Color("fill") || ["rgba(54, 162, 235, 0.2)"],
          borderColor: get10Color("shade") || ["rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    },
  };

  return configs[key as keyof typeof configs];
}

function get10Color(key: "fill" | "shade") {
  const colors = {
    fill: [
      "rgba(202,169,155,1)",

      "rgba(168,215,159,1)",

      "rgba(103,243,8,1)",

      "rgba(223,234,74,1)",

      "rgba(63,164,251,1)",

      "rgba(136,255,200,1)",

      "rgba(11,193,203,1)",

      "rgba(235,10,57,1)",

      "rgba(68,15,209,1)",

      "rgba(34,94,117,1)",
    ],
    shade: [
      "rgba(202,169,155,0.2)",

      "rgba(168,215,159,0.2)",

      "rgba(103,243,8,0.2)",

      "rgba(223,234,74,0.2)",

      "rgba(63,164,251,0.2)",

      "rgba(136,255,200,0.2)",

      "rgba(11,193,203,0.2)",

      "rgba(235,10,57,0.2)",

      "rgba(68,15,209,0.2)",

      "rgba(34,94,117,0.2)",
    ],
  };

  return colors[key];
}

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { PropertyScreenProps } from "./Property";

type PropertyDataChartProps = Pick<PropertyScreenProps, "route" | "elements">;

export const PropertyDataChart = ({
  elements,
  route: { params },
}: PropertyDataChartProps): JSX.Element => {
  const data = elements.map((element) => ({
    x: element.atomicNumber?.ordinary as number,
    y: element[params.id]?.ordinary as number,
    symbol: element.symbol?.ordinary as string,
    label: element.name?.ordinary as string,
  }));
  const unit = elements[0][params.id]?.unit;

  const options: Highcharts.Options = {
    title: {
      text: undefined,
    },
    chart: {
      type: "scatter",
      zoomType: "x",
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      title: {
        text: "Atomic number",
      },
      type: "category",
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
    },
    yAxis: {
      title: {
        text: unit,
      },
      type: "category",
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        dataLabels: {
          useHTML: true,
          style: {
            fontWeight: "400",
          },
          enabled: true,
          format: "{point.symbol}",
        },
      },
      scatter: {
        marker: {
          radius: 2,
          states: {
            hover: {
              enabled: true,
              lineColor: "rgb(100,100,100)",
            },
          },
        },
        states: {
          hover: {
            enabled: false,
          },
        },
        tooltip: {
          headerFormat: undefined,
          pointFormat: "<span>{point.label}</span><br><span>{point.y}</span>",
        },
      },
    },
    series: [
      {
        data: data,
        type: "scatter",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

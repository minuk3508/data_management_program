import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import styled from "styled-components";
import zoomPlugin from "chartjs-plugin-zoom";
import moment from "moment";
import { dateProps } from "./DashboardPage";

Chart.register(CategoryScale);
Chart.register(zoomPlugin);

function PressureGraph({ date, weatherData }: dateProps) {
  const data = {
    labels: weatherData?.feeds
      ?.filter(
        (feed) => moment(feed.created_at.slice(0, -1)).format("DD") === date
      )
      .map((i) =>
        moment(i.created_at.slice(0, i.created_at.length - 1)).format("HH:mm")
      ),
    datasets: [
      {
        data: weatherData?.feeds
          ?.filter(
            (feed) => moment(feed.created_at.slice(0, -1)).format("DD") === date
          )
          .map((i) => i.field3),
        borderColor: "rgb(128, 230, 107)",
        backgroundColor: "rgba(58, 177, 64, 0.5)",
      },
    ],
  };

  return (
    <Wrapper>
      <h1>Atmospheric Pressure</h1>
      <Line
        data={data}
        options={{
          responsive: true,
          plugins: {
            zoom: {
              pan: { enabled: true, mode: "x" },
              zoom: {
                mode: "x",
                wheel: { enabled: true },
              },
            },
            legend: { display: false },
          },
          scales: {
            xAxes: { grid: { color: "rgba(0, 0, 0, 0)" } },
            yAxes: {
              ticks: {
                maxTicksLimit: 5,
              },
            },
          },
        }}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default PressureGraph;

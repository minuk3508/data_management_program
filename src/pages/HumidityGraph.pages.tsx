import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import * as Zoom from "chartjs-plugin-zoom";
import zoomPlugin from "chartjs-plugin-zoom";
import styled from "styled-components";
import useFetchWeatherData from "hooks/useFetchWeatherData";
import moment from "moment";
import { useMemo } from "react";
Chart.register(CategoryScale);

function HumidityGraph() {
  const weatherData = useFetchWeatherData();
  const defaultDate = useMemo(() => {
    return moment(weatherData?.feeds.slice(-1)[0].created_at).format("DD");
  }, [weatherData]);

  const availableDates = useMemo(() => {
    const result = weatherData?.feeds.map((feed) =>
      moment(feed.created_at).format("DD")
    );
    return [...new Set(result)];
  }, [weatherData]);

  const data = {
    labels: weatherData?.feeds
      ?.filter(
        (feed) =>
          moment(feed.created_at.slice(0, -1)).format("DD") === defaultDate
      )
      .map((i) =>
        moment(i.created_at.slice(0, i.created_at.length - 1)).format("HH:mm")
      ),
    datasets: [
      {
        data: weatherData?.feeds
          ?.filter(
            (feed) => moment(feed.created_at).format("DD") === defaultDate
          )
          .map((i) => i.field2),
        borderColor: "rgb(73, 135, 216)",
        backgroundColor: "rgba(99, 141, 255, 0.5)",
      },
    ],
  };

  return (
    <Wrapper>
      <h1>Humidity</h1>
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

export default HumidityGraph;

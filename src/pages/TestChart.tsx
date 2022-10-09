import styled from "styled-components";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(CategoryScale);
Chart.register(zoomPlugin);

function TestChart() {
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        data: [12, 15, 11, 10, 22, 40, 30, 9, 33, 11],
        borderColor: "rgb(128, 230, 107)",
        backgroundColor: "rgba(58, 177, 64, 0.5)",
      },
    ],
  };

  return (
    <Wrapper>
      <h1>Test</h1>
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
          },
        }}
      />
    </Wrapper>
  );
}

export default TestChart;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

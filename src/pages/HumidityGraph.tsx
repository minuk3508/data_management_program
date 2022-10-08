import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import styled from "styled-components";
Chart.register(CategoryScale);
Chart.register(zoomPlugin);
interface channelProps {
  id: number;
  name: string;
  description: string;
  latitude: string;
  longitude: string;
  field1: string;
  field2: string;
  field3: string;
  created_at: string;
  updated_at: string;
  last_entry_id: number;
}
interface feedProps {
  created_at: string;
  entry_id: number;
  field1: string;
  field2: string;
  field3: string;
}
interface dataProps {
  channelInfo?: channelProps;
  feedData?: feedProps[];
}

export default function HumidityGraph({ channelInfo, feedData }: dataProps) {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "온도",
        data: [10, 20, 30, 10, 11, 18],
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.5,
        pointHoverBackgroundColor: "red",
      },
    ],
  };

  console.log(channelInfo);
  console.log(feedData);
  return (
    <Div>
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
    </Div>
  );
}
const Div = styled.div`
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  width: 50rem;
  height: 30rem;
  border: 1px solid black;
`;

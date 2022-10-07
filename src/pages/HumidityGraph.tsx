import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import styled from "styled-components";
Chart.register(CategoryScale);

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
    labels: feedData?.map((i) => i.created_at),
    datasets: [
      {
        label: channelInfo?.name,
        data: feedData?.map((i) => i.field2),
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
      <Line data={data} />
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

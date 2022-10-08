import { Template } from "Template/Template";
import styled from "styled-components";
import useFetchWeatherData from "hooks/useFetchWeatherData";
import DegreeGraph from "./DegreeGraph.pages";
import HumidityGraph from "./HumidityGraph.pages";
import PressureGraph from "./PressureGraph.pages";
function DashboardPage() {
  const weatherData = useFetchWeatherData();
  return (
    <Template>
      <Container>
        {/* <DegreeGraph /> */}
        {/* <HumidityGraph /> */}
        <PressureGraph />
      </Container>
    </Template>
  );
}
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const TestDiv = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;

export default DashboardPage;

import { Template } from "Template/Template";
import styled from "styled-components";
import useFetchWeatherData from "hooks/useFetchWeatherData";
import DegreeGraph from "./DegreeGraph.pages";
import HumidityGraph from "./HumidityGraph.pages";
import PressureGraph from "./PressureGraph.pages";
import TestChart from "./TestChart";

function DashboardPage() {
  const weatherData = useFetchWeatherData();
  console.log(weatherData);
  return (
    <Template>
      <Container>
        {/* <GraphContainer>
          <TestChart />
        </GraphContainer> */}
        <GraphContainer>
          <DegreeGraph />
        </GraphContainer>
        <GraphContainer>
          <HumidityGraph />
        </GraphContainer>
        <GraphContainer>
          <PressureGraph />
        </GraphContainer>
      </Container>
    </Template>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;
const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
  height: 17rem;
`;

export default DashboardPage;

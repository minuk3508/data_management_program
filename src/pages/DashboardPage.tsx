import { Template } from "Template/Template";
import styled from "styled-components";
import useFetchWeatherData from "hooks/useFetchWeatherData";
import DegreeGraph from "./DegreeGraph.pages";
import HumidityGraph from "./HumidityGraph.pages";
// import HumidityGraph from "./HumidityGraph";
import PressureGraph from "./PressureGraph.pages";
function DashboardPage() {
  const weatherData = useFetchWeatherData();
  return (
    <Template>
      <Container>
        {/* <HumidityGraph /> */}
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
  width: 30rem;
  height: 20rem;
`;

export default DashboardPage;

import { useMemo, useState } from "react";
import { Template } from "Template/Template";
import styled from "styled-components";
import useFetchWeatherData, { dataProps } from "hooks/useFetchWeatherData";
import DegreeGraph from "./DegreeGraph.pages";
import HumidityGraph from "./HumidityGraph.pages";
import PressureGraph from "./PressureGraph.pages";
import CSVExportButton from "./CSVExportButton";
import Calender from "./Calender";
import CalenderButton from "./CalenderButton";
import moment from "moment";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export interface dateProps {
  date: string;
  weatherData: dataProps | undefined;
}
function DashboardPage() {
  const weatherData = useFetchWeatherData();
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date());
  const [button, setbutton] = useState(false);
  const dayData = selectedDay?.toLocaleString("sv") as string;
  const formattedDayData = moment(dayData).format("DD");

  const defaultDate = useMemo(() => {
    return moment(
      weatherData?.feeds.slice(-1)[0].created_at.slice(0, -1)
    ).format("DD");
  }, [weatherData]);

  const availableDates = useMemo(() => {
    const result = weatherData?.feeds.map((feed) =>
      moment(feed.created_at.slice(0, -1)).format("DD")
    );
    return [...new Set(result)];
  }, [weatherData]);

  const date = useMemo(() => {
    return availableDates.includes(formattedDayData)
      ? formattedDayData
      : defaultDate;
  }, [availableDates, formattedDayData, defaultDate]);

  const onDragEnd = (result: any) => {
    console.log(result);
  };
  return (
    <Template>
      <Container>
        {button && (
          <Calender
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            setbutton={setbutton}
          />
        )}
        <TopSectionContainer>
          <CalenderButton dayData={dayData} setbutton={setbutton} date={date} />
          <DateAlert>
            현재 조회 가능한 일수는 <strong>{availableDates.join(",")}</strong>{" "}
            일 입니다.
          </DateAlert>
        </TopSectionContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="1">
            {(props) => (
              <GraphSectionContainer
                {...props.droppableProps}
                ref={props.innerRef}
              >
                <Draggable draggableId="degree" index={0}>
                  {(provided) => (
                    <GraphWrapper
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <DegreeGraph date={date} weatherData={weatherData} />
                    </GraphWrapper>
                  )}
                </Draggable>
                <Draggable draggableId="humidity" index={1}>
                  {(provided) => (
                    <GraphWrapper
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <HumidityGraph date={date} weatherData={weatherData} />
                    </GraphWrapper>
                  )}
                </Draggable>
                <Draggable draggableId="pressure" index={2}>
                  {(provided) => (
                    <GraphWrapper
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <PressureGraph date={date} weatherData={weatherData} />
                    </GraphWrapper>
                  )}
                </Draggable>
                {props.placeholder}
              </GraphSectionContainer>
            )}
          </Droppable>
        </DragDropContext>
        <BottomSectionContainer>
          <CSVExportButton />
        </BottomSectionContainer>
      </Container>
    </Template>
  );
}
const Container = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    height: auto;
  }
  width: 100%;
  height: 100%;
`;
const TopSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.tabletL} {
    height: 5rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15%;
`;

const GraphSectionContainer = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    flex-direction: column;
    height: auto;
    padding-top: 5%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
`;
const GraphWrapper = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    width: 80%;
    height: 60%;
    margin: 3% 0%;
  }
  width: 28%;
  height: 24%;
  min-width: 21rem;
  min-height: 18rem;
  margin: 0% 3%;
  border: 1px solid black;
  padding: 20px;
`;
const BottomSectionContainer = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    height: 5rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15%;
`;
const DateAlert = styled.div`
  strong {
    color: red;
  }
`;
export default DashboardPage;

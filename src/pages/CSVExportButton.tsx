import styled from "styled-components";
import { CSVLink } from "react-csv";
import useFetchWeatherData from "hooks/useFetchWeatherData";

function CSVExportButton() {
  const weatherData = useFetchWeatherData();
  const CSVdata: Array<Object | undefined[] | any> = [
    ["Channer"],
    ["Created at", weatherData?.channel.created_at],
    ["Description", weatherData?.channel.description],
    ["Latitude", weatherData?.channel.latitude],
    ["Longitude", weatherData?.channel.longitude],
    ["Name", weatherData?.channel.name],
    ["Updated at", weatherData?.channel.updated_at],
    [""],
    ["Feeds"],
    ["Created at", "Entry ID", "Temp", "Humidity", "Pressure"],
    ...(weatherData?.feeds.map((i) => {
      const { created_at, entry_id, field1, field2, field3 } = i;
      const arrayData = [created_at, entry_id, field1, field2, field3];
      return arrayData;
    }) || []),
  ];

  return (
    <CSVLink data={CSVdata}>
      <Container>Data Export</Container>
    </CSVLink>
  );
}

export default CSVExportButton;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 5rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 1rem;
  transition: 0.3s all;
  :hover {
    cursor: pointer;
    background-color: #383838;
  }
`;

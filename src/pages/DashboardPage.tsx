import { useEffect, useState } from "react";
import { Template } from "Template/Template";
import styled from "styled-components";
import HumidityGraph from "./HumidityGraph";
import Calender from "./Calender";

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
  channel: channelProps;
  feeds: feedProps[];
}

export function DashboardPage() {
  const [channelInfo, setChannelInfo] = useState<channelProps>();
  const [feedData, setFeedData] = useState<feedProps[]>();
  const API_KEY = "6SKW0U97IPV2QQV9";
  const CHAEENEL_ID = "1348864";
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.thingspeak.com/channels/${CHAEENEL_ID}/feeds.json?api_key=${API_KEY}`
      );
      const json = await res.json();
      setChannelInfo(json.channel);
      setFeedData(json.feeds);
      console.log(json);
    })();
  }, []);
  console.log(channelInfo);
  return (
    <Template>
      <Container>
        {false ? (
          <Calender />
        ) : (
          <HumidityGraph channelInfo={channelInfo} feedData={feedData} />
        )}
      </Container>
    </Template>
  );
}
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

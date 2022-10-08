import moment from "moment";
import { useEffect, useMemo, useState } from "react";

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
const API_KEY = "6SKW0U97IPV2QQV9";
const CHAEENEL_ID = "1348864";

function useFetchWeatherData() {
  const [weatherData, setWeatherData] = useState<dataProps>();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.thingspeak.com/channels/${CHAEENEL_ID}/feeds.json?api_key=${API_KEY}`
      );
      const json = await res.json();
      setWeatherData(json);
    })();
  }, []);

  return weatherData;
}

export default useFetchWeatherData;

import { useState, useEffect } from "react";
import fetchList from "api/fetchList";
import DataType from "types";

const initializeState: { results: DataType[]; loading: boolean } = {
  results: [],
  loading: true,
};

const useFetch = () => {
  const [items, setItems] = useState(initializeState);

  const response = async () => {
    try {
      const data = await fetchList();
      // setItems(({ results }) => ({
      //   results: [...results, ...data],
      //   loading: false,
      // }));
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    response();
  }, []);

  return items;
};

export default useFetch;

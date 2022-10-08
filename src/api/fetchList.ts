import axios from "axios";
import { LIST_URL } from "./utils";

const fetchList = async () => {
  try {
    const { data } = await axios.get(LIST_URL);
    console.log(data);
    if (data) {
      return data;
    }
  } catch (error) {
    return { error: "❌ Api Error" };
  }
};

export default fetchList;

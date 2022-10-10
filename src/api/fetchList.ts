import axios from 'axios';
import { URL } from './utils';

const fetchList = async () => {
  try {
    const { data } = await axios.get(URL);
    if (data) {
      return data;
    }
  } catch (error) {
    return { error: '❌ Api Error' };
  }
};

export default fetchList;

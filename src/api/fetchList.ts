import axios from 'axios';
import { LOCAL } from './utils';

const fetchList = async () => {
  try {
    const { data } = await axios.get(LOCAL);
    if (data) {
      return data;
    }
  } catch (error) {
    return { error: '❌ Api Error' };
  }
};

export default fetchList;

import axios, { AxiosResponse } from 'axios';

export const useServerStatusService = () => {
  const status = async (): Promise<boolean> => {
    const url = process.env.BASEURL + '/products';

    try {
      const response: AxiosResponse = await axios.get(url);
    } catch (error) {
      if (error.message == 'ERR_NETWORK') {
        return false;
      } else {
        return true;
      }
    }
  };

  return { status };
};

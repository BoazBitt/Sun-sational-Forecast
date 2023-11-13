import axios from "axios";
import { WeatherData } from "../interfaces/weather.interface";
import { toast } from "react-toastify";
import { LocationData } from "../interfaces/location.interface";
import geoFindMe from "../functions/geoFindMe";
const defaultLatitude: number = 32.0852999; //Tel Aviv latitude
const defaultLongitude: number = 34.7817676; //Tel Aviv longitude

const API_BASE_URL = process.env.REACT_APP_SERVER;
const API_KEY = process.env.REACT_APP_APIKEY;
const HEADERS = {
  "Content-Type": "application/json",
};

export const getAutoComplete = async (
  location: string
): Promise<LocationData[]> => {
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}locations/v1/cities/autocomplete`,
      {
        headers: { ...HEADERS },
        params: {
          apikey: API_KEY,
          q: location,
          language: "en-us",
        },
      }
    );

    return data;
  } catch (error: any) {
    throw error;
  }
};

export const getCurrentWeather = async (
  key: string,
  details?: boolean
): Promise<WeatherData[]> => {
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}currentconditions/v1/${key}`,
      {
        headers: { ...HEADERS },
        params: {
          apikey: API_KEY,
          language: "en-us",
          details: details,
        },
      }
    );

    return data;
  } catch (error: any) {
    throw error;
  }
};

export const getForecast = async (
  key: string,
  details = false,
  type = false
): Promise<any> => {
  try {
    const weather: WeatherData[] = await getCurrentWeather(key);
    const IsDayTime: boolean = weather[0].IsDayTime;
    const { data } = await axios.get(
      `${API_BASE_URL}forecasts/v1/daily/5day/${key}`,
      {
        headers: { ...HEADERS },
        params: {
          apikey: API_KEY,
          language: "en-us",
          details: details,
          metric: type,
        },
      }
    );
    data.Headline.IsDayTime = IsDayTime;
    return data;
  } catch (error: any) {
    return error;
  }
};

export const getMyLocation = async (
  details = false,
  topLevel = false
): Promise<any> => {
  try {
    const { latitude, longitude } = await geoFindMe();
    const { data } = await axios.get(
      `${API_BASE_URL}locations/v1/cities/geoposition/search`,
      {
        headers: { ...HEADERS },
        params: {
          apikey: API_KEY,
          q: `${latitude},${longitude}`,
          language: "en-us",
          details: details,
          topLevel: topLevel,
        },
      }
    );

    return data;
  } catch (error: any) {
    toast.error("Couldn't get your location for some reason.");
    try {
      const defaultData = await axios.get(
        `${API_BASE_URL}locations/v1/cities/geoposition/search`,
        {
          headers: { ...HEADERS },
          params: {
            apikey: API_KEY,
            q: `${defaultLatitude},${defaultLongitude}`,
            language: "en-us",
            details: details,
            topLevel: topLevel,
          },
        }
      );

      return defaultData.data;
    } catch (error) {}
  }
};

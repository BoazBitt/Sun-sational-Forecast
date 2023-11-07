import axios from "axios";
import { WeatherData } from "../interfaces/weather.interface";
import geoFindMe from '../functions/geoFindMe'
import { toast } from "react-toastify";

export const getAutoComplete = async (city: string): Promise<any[]> => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER}locations/v1/cities/autocomplete`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          apikey: process.env.REACT_APP_APIKEY,
          q: city,
          language: "en-us",
        },
      }
    );

    return data;
  } catch (error: any) {
    return error;
  }
};

export const getCurrentWeather = async (
  key: string,
  details = false
): Promise<WeatherData[]> => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER}currentconditions/v1/${key}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          apikey: process.env.REACT_APP_APIKEY,
          language: "en-us",
          details: details ,
        },
      }
    );

    return data;
  } catch (error: any) {
    return error;
  }
};

export const getForecast = async (
  key: string,
  details = false,
  type = false
): Promise<any> => {
  try {
   const weather:any = await getCurrentWeather(key)
   const IsDayTime:boolean = weather[0].IsDayTime 
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER}forecasts/v1/daily/5day/${key}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          apikey: process.env.REACT_APP_APIKEY,
          language: "en-us",
          details: details,
          metric: type,
        },
      }
    );
    data.Headline.IsDayTime = IsDayTime;
    console.log(data);
    
    return data;
  } catch (error: any) {
    return error;
  }
};

export const getMyLocation = async (
  details = false,
  topLevel= false
): Promise<any> => {
  try {
    const {latitude,longitude} = await geoFindMe()
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER}locations/v1/cities/geoposition/search`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          apikey: process.env.REACT_APP_APIKEY,
          q:`${latitude},${longitude}`,
          language: "en-us",
          details: details,
          topLevel:topLevel
        },
      }
    );
  
    return data;
  } catch (error: any) {
    toast.error("Couldn't get your location for some reason.")
    const defaultLatitude:number = 32.0852999; //Tel Aviv latitude
    const defaultLongitude:number = 34.7817676; //Tel Aviv longitude

    const defaultData = await axios.get(
      `${process.env.REACT_APP_SERVER}locations/v1/cities/geoposition/search`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          apikey: process.env.REACT_APP_APIKEY,
          q: `${defaultLatitude},${defaultLongitude}`,
          language: "en-us",
          details: details,
          topLevel: topLevel,
        },
      }
    );

    return defaultData.data;
  }
};

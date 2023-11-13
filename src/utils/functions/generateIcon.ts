import { iconInterface } from "../interfaces/icon.interface";
import getIcon from "../../assets/icons/Icons";
export interface generateIconArgs {
  WeatherText: string;
  IsDayTime: boolean;
}

export const generateIcon = (
  iconArgs: generateIconArgs
): iconInterface | null => {
  if (iconArgs.WeatherText)
    return getIcon(iconArgs.WeatherText, iconArgs.IsDayTime);
  return null;
};

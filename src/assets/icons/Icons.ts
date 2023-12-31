import { iconInterface } from "../../utils/interfaces/icon.interface";
const Icons: iconInterface[] = [
  {
    id: 1,
    icon: require("./01-s.png"),
    day: true,
    night: false,
    text: "Sunny",
  },
  {
    id: 2,
    icon: require("./02-s.png"),
    day: true,
    night: false,
    text: "Mostly sunny",
  },
  {
    id: 3,
    icon: require("./03-s.png"),
    day: true,
    night: false,
    text: "Partly sunny",
  },
  {
    id: 4,
    icon: require("./04-s.png"),
    day: true,
    night: false,
    text: "Intermittent clouds",
  },
  {
    id: 5,
    icon: require("./05-s.png"),
    day: true,
    night: false,
    text: "Hazy sunshine",
  },
  {
    id: 6,
    icon: require("./06-s.png"),
    day: true,
    night: false,
    text: "Mostly cloudy",
  },
  {
    id: 7,
    icon: require("./07-s.png"),
    day: true,
    night: true,
    text: "Cloudy",
  },
  {
    id: 8,
    icon: require("./08-s.png"),
    day: true,
    night: true,
    text: "Dreary (Overcast)",
  },
  {
    id: 11,
    icon: require("./11-s.png"),
    day: true,
    night: true,
    text: "Fog",
  },
  {
    id: 12,
    icon: require("./12-s.png"),
    day: true,
    night: true,
    text: "Showers",
  },
  {
    id: 13,
    icon: require("./13-s.png"),
    day: true,
    night: false,
    text: "Mostly Cloudy w/ Showers",
  },
  {
    id: 14,
    icon: require("./14-s.png"),
    day: true,
    night: false,
    text: "Partly Sunny w/ Showers",
  },
  {
    id: 15,
    icon: require("./15-s.png"),
    day: true,
    night: true,
    text: "T-Storms",
  },
  {
    id: 16,
    icon: require("./16-s.png"),
    day: true,
    night: false,
    text: "Mostly Cloudy w/ T-Storms",
  },
  {
    id: 17,
    icon: require("./17-s.png"),
    day: true,
    night: false,
    text: "Partly Sunny w/ T-Storms",
  },
  {
    id: 18,
    icon: require("./18-s.png"),
    day: true,
    night: true,
    text: "Rain",
  },
  {
    id: 19,
    icon: require("./19-s.png"),
    day: true,
    night: true,
    text: "Flurries",
  },
  {
    id: 20,
    icon: require("./20-s.png"),
    day: true,
    night: false,
    text: "Mostly Cloudy w/ Flurries",
  },
  {
    id: 21,
    icon: require("./21-s.png"),
    day: true,
    night: false,
    text: "Partly Sunny w/ Flurries",
  },
  {
    id: 22,
    icon: require("./22-s.png"),
    day: true,
    night: true,
    text: "Snow",
  },
  {
    id: 23,
    icon: require("./23-s.png"),
    day: true,
    night: false,
    text: "Mostly Cloudy w/ Snow",
  },
  {
    id: 24,
    icon: require("./24-s.png"),
    day: true,
    night: true,
    text: "Ice",
  },
  {
    id: 25,
    icon: require("./25-s.png"),
    day: true,
    night: true,
    text: "Sleet",
  },
  {
    id: 26,
    icon: require("./26-s.png"),
    day: true,
    night: true,
    text: "Freezing Rain",
  },
  {
    id: 29,
    icon: require("./29-s.png"),
    day: true,
    night: true,
    text: "Rain and Snow",
  },
  { id: 30, icon: require("./30-s.png"), day: true, night: true, text: "Hot" },
  {
    id: 31,
    icon: require("./31-s.png"),
    day: true,
    night: true,
    text: "Cold",
  },
  {
    id: 32,
    icon: require("./32-s.png"),
    day: true,
    night: true,
    text: "Windy",
  },
  {
    id: 33,
    icon: require("./33-s.png"),
    day: false,
    night: true,
    text: "Clear",
  },
  {
    id: 34,
    icon: require("./34-s.png"),
    day: false,
    night: true,
    text: "Mostly Clear",
  },
  {
    id: 35,
    icon: require("./35-s.png"),
    day: false,
    night: true,
    text: "Partly Cloudy",
  },
  {
    id: 36,
    icon: require("./36-s.png"),
    day: false,
    night: true,
    text: "Intermittent Clouds",
  },
  {
    id: 37,
    icon: require("./37-s.png"),
    day: false,
    night: true,
    text: "Hazy Moonlight",
  },
  {
    id: 38,
    icon: require("./38-s.png"),
    day: false,
    night: true,
    text: "Mostly Cloudy",
  },
  {
    id: 39,
    icon: require("./39-s.png"),
    day: false,
    night: true,
    text: "Partly Cloudy w/ Showers",
  },
  {
    id: 40,
    icon: require("./40-s.png"),
    day: false,
    night: true,
    text: "Mostly Cloudy w/ Showers",
  },
  {
    id: 41,
    icon: require("./41-s.png"),
    day: false,
    night: true,
    text: "Partly Cloudy w/ T-Storms",
  },
  {
    id: 42,
    icon: require("./42-s.png"),
    day: false,
    night: true,
    text: "Mostly Cloudy w/ T-Storms",
  },
  {
    id: 43,
    icon: require("./43-s.png"),
    day: false,
    night: true,
    text: "Mostly Cloudy w/ Flurries",
  },
  {
    id: 44,
    icon: require("./44-s.png"),
    day: false,
    night: true,
    text: "Mostly Cloudy w/ Snow",
  },
];

const getIcon = (WeatherText: string, IsDayTime: boolean): iconInterface => {
  const filteredIcons: iconInterface[] = Icons.filter(
    (icon) => icon.text.toLowerCase() === WeatherText.toLowerCase()
  );
  if (filteredIcons.length === 1) return filteredIcons[0];
  return filteredIcons.filter((icon) => icon.day === IsDayTime)[0];
};

export default getIcon;

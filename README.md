# Weather App

## Overview

This web app is a simple, responsive weather application built with React and TypeScript. It allows users to search for weather information in various cities and save their favorite locations. The app integrates with the AccuWeather API to fetch weather data.

## Features

- **Search for Weather**: Users can search for weather information in different cities using the location autocomplete feature.

- **Display Weather**: The app provides current weather information and a 5-day forecast for the searched location.

- **Favorites**: Users can save locations to their favorites, and a default weather display is available for the user's location if its not possible then the default is Tel-Aviv

- **Responsive Design**: The app is designed to provide a seamless experience on various screen sizes. Flexbox and grid layouts are used for responsive design.

- **Error Handling**: The app includes error handling mechanisms, such as toast.

## Bonus Features

- **Default Location**: The app uses the Geolocation API to set the default location.

- **Dark/Light Theme**: Users can switch between dark and light themes using a toggle button in the header.

- **Temperature Units**: The app allows users to toggle between Celsius and Fahrenheit.

## Installation

1. Clone this repository to your local machine.

2. Install the required dependencies:

   `bash
   npm install`
3. Create a .env file in the project root directory with your AccuWeather API key:
   ```bash
   REACT_APP_SERVER=http://dataservice.accuweather.com/
   REACT_APP_API_KEY=YOUR_ACCUWEATHER_API_KEY`
Start the development server:
   ```bash
   npm start`
## Live Demo

You can check out the live demo of the app by visiting [here](https://your-live-demo-link).

## Screenshots

![Screenshot 1](screenshots/screenshot1.png)

![Screenshot 2](screenshots/screenshot2.png)

## Contributing

Contributions and improvements are welcome! Feel free to submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.






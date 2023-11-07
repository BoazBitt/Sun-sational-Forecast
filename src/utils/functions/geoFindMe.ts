function getLocation(): Promise<{ latitude: number; longitude: number }> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (err) => {
          reject(`Unable to retrieve your location: ${err.message}`);
        }
      );
    } else {
      reject("Geolocation is not supported by your browser");
    }
  });
}
export default getLocation;

import { Injectable } from '@nestjs/common';
import axios from 'axios'; // Import Axios library

@Injectable()
export class WeatherService {
  async getWeather(location: string): Promise<any> {
    try {
      // Make a request to the external weather API
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=0669ae3f4c1f4c5eb7a160316232309&q=${location}&aqi=no`
      );

      // Extract and return relevant data from the response
      const { temp_c, humidity,condition, wind_kph} = response.data.current;
      return {
        temperature: temp_c,
        humidity,
        con: condition,
        icon: condition.icon,
        wind_kph,
      };
    } catch (error) {
      // Handle any errors that occur during the API request
      console.error('Error fetching weather data:', error);
      throw error;
    }
  }
}

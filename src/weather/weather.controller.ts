import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('api/weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async getWeather(@Query('location') location: string) {
    const weatherData = await this.weatherService.getWeather(location);
    return weatherData;
  }
}

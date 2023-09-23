import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: 'https://weather-app-frontend-umber.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  await app.listen(8080);
}

bootstrap();

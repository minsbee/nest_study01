import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const maxAttempts = 10;
  let port = 3000;
  let attempt = 1;

  while (attempt <= maxAttempts) {
    try {

      const app = await NestFactory.create(AppModule);
      await app.listen(port);
      console.log(`Server is running on port ${port}`);
      break;

    } catch (error) {
      if (error.code === 'EADDRINUSE') {

        console.log(`Port ${port} is already in use. Trying another port...`);
        port++;
        attempt++;
      } else {

        console.error(error);
        break; // 에러 발생 시 반복문 종료
        
      }
    }
  }

  if (attempt > maxAttempts) {
    console.error(`Exceeded the maximum number of attempts (${maxAttempts}). Could not find an available port.`);
  }
}

bootstrap();
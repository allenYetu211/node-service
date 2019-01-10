import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { someLogger } from './middleware/logger.middleware';
import { HttpExceptionFilter } from './filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(someLogger)
  app.useGlobalFilters(new HttpExceptionFilter())
  return await app.listen(3000);
}
bootstrap();

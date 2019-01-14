import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { someLogger } from './middleware/logger.middleware';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { RolesGuard } from './guards/roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(someLogger)
  // app.useGlobalGuards(new RolesGuard())
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalPipes(new ValidationPipe())
  return await app.listen(3000);
}
bootstrap();

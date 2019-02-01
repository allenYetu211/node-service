import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { someLogger } from './middleware/logger.middleware';
// import { HttpExceptionFilter } from './filter/http-exception.filter';
// import { ValidationPipe } from '@nestjs/common';
// import { RolesGuard } from './guards/roles.guard';
import  {LoggingInterceptor} from './interceptor/logging.interceptor'
import {TransformInterceptor} from './interceptor/transform.interceptor'
import {TimeoutInterceptor} from './interceptor/timeout.interceptor'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(someLogger)
  // app.useGlobalGuards(new RolesGuard())
  // app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new TransformInterceptor(new Reflector()),
    // new TimeoutInterceptor(),
  )
  return await app.listen(3000);
}
bootstrap();

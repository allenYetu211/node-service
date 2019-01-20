/**
 * @file: 
 * @module: app module
 * @author:  Allen OYang https://github.com/allenYetu211
 */

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {CatsModules} from './modules/cats/cats.modules'
import { LoggerMiddleware, someLogger } from './middleware/logger.middleware';
import { CatsController } from './modules/cats/cats.controller';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { APP_FILTER } from '@nestjs/core';

import {DatabaseModule} from 'src/processors/database/database.module'
@Module({
  imports: [
    CatsModules,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter
  }],
})
export class AppModule implements NestModule  {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, someLogger)
    .with('ApplicationModule')
    .forRoutes(CatsController)
  }
}

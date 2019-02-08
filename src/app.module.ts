/**
 * @file: 
 * @module: app module
 * @author:  Allen OYang https://github.com/allenYetu211
 */

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {CatsModules} from './modules/cats/cats.modules'
import {TagModules} from 'src/modules/tag/tag.modules'
import { LoggerMiddleware, someLogger } from './middleware/logger.middleware';
import { CatsController } from './modules/cats/cats.controller';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import {DatabaseModule} from 'src/processors/database/database.module'
import { ArticleModules } from './modules/articles/article.modules';
import { LikeModules } from './modules/likes/like.modules';
import {CommentModules} from './modules/comment/comment.modules'
import {TransformInterceptor} from './interceptor/transform.interceptor'

import {CoreMiddleware} from 'src/middleware/core.middleware'
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ArticleModules,
    CatsModules,
    TagModules,
    LikeModules,
    CommentModules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule  {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CoreMiddleware, LoggerMiddleware, someLogger)
    .with('ApplicationModule')
    .forRoutes('*')
  }
}

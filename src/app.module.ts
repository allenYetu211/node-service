/**
 * @module: app module
 * @author:  Allen OYang https://github.com/allenYetu211
 */

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatsModules } from '@app/modules/cats/cats.modules'
import { TagModules } from '@app/modules/tag/tag.modules'
import { UserModules } from '@app/modules/user/user.modules'
import { LoggerMiddleware, someLogger } from './middleware/logger.middleware';
import { CatsController } from './modules/cats/cats.controller';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from '@app/processors/database/database.module'
import { ArticleModules } from '@app/modules/articles/article.modules';
import { AuthModules } from '@app/modules/auth/auth.modules';
import { LikeModules } from '@app/modules/likes/like.modules';
import { CommentModules } from '@app/modules/comment/comment.modules'
import { TransformInterceptor } from '@app/interceptor/transform.interceptor'

import { CoreMiddleware } from '@app/middleware/core.middleware'
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ArticleModules,
    AuthModules,
    CatsModules,
    TagModules,
    LikeModules,
    CommentModules,
    UserModules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CoreMiddleware, LoggerMiddleware, someLogger)
      .with('ApplicationModule')
      .forRoutes('*')
  }
}

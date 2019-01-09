/**
 * @file: 
 * @module: app module
 * @author:  Allen OYang https://github.com/allenYetu211
 */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {CastModules} from './modules/cats/cats.modules'

@Module({
  imports: [
    CastModules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

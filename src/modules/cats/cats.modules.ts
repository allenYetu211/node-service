/**
 * @file: 
 * @module:  cat modules
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import { Module, Global } from '@nestjs/common'
import { CatsController } from './cats.controller'
import { CatsService } from './cats.service';
import {MongooseModule} from '@nestjs/mongoose';
import {CatSchema} from'./schemas/cat.schema'
import {catsProviders} from './cats.providers'
@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService , catsProviders],
  exports: [CatsService],
})

export class CatsModules {
  // constructor(private readonly catsService: CatsService) {}
}
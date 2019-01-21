/**
 * @file: 
 * @module:  cat modules
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import { Module } from '@nestjs/common'
import { CatsController } from './cats.controller'
import { CatsService } from './cats.service';
import { TypegooseModule } from 'nestjs-typegoose';
import {Cats} from './cats.model'
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './schemas/cat.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cats', schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService ],
  exports: [CatsService],
})

export class CatsModules {
  // constructor(private readonly catsService: CatsService) {}
}
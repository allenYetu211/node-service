/**
 * @file: 
 * @module:  cat modules
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import { Module, Global } from '@nestjs/common'
import { CatsController } from './cats.controller'
import { CatsService } from './cats.service';

@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService]
})

export class CastModules {
  constructor(private readonly catsService: CatsService) {}
}
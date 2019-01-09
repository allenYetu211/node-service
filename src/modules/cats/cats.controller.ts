import { Controller, Get, Req, Post, HttpCode, Body, Res, HttpStatus } from '@nestjs/common'
import { CreateCatDto } from '../../dto/create-cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController{
  constructor(private readonly catsService: CatsService) {}

  @HttpCode(204)
  @Post()
  async create(@Res() res, @Body() createCatDto: CreateCatDto) {
    res.status(HttpStatus.CREATED).send()
    console.log(createCatDto)
    return []
  }


  @Get()
  findAll(@Req() request) {
    return []
  }
}
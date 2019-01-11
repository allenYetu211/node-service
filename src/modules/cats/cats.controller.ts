import { Controller, Get, Req, Post, HttpCode, Body, Res, HttpStatus, HttpException, UseFilters, ValidationPipe, UsePipes } from '@nestjs/common'
import { CreateCatDto } from '../../dto/create-cat.dto';
import { CatsService } from './cats.service';
import { ForbiddenException } from 'src/exception/forbideen.exception';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';

// @UseFilters(HttpExceptionFilter)
@Controller('cats')
export class CatsController{
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createCatDto: CreateCatDto) {
    console.log('post:::')
    this.catsService.create(createCatDto)
  }
  // @HttpCode(204)
  // @Post()
  // async create(@Res() res, @Body() createCatDto: CreateCatDto) {
  //   throw new ForbiddenException()
  //   //  返回字符串错误提示
  //   // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)

  //   // 返回对象错误提示
  //   // throw new HttpException({
  //   //   status: HttpStatus.FORBIDDEN,
  //   //   error: `This is a custom message`,
  //   //   liveServerError: 'Live Server Error 500'
  //   // }, 403)

    
  //   // res.status(HttpStatus.CREATED).send()
  //   // console.log(createCatDto)
  //   // return []
  // }


  @Get()
  findAll(@Req() request) {
    return []
  }
}
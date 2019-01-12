import { Controller, Get, Req, Post, HttpCode, Body, Res, HttpStatus, HttpException, UseFilters, ValidationPipe, UsePipes, UseGuards } from '@nestjs/common'
import { CreateCatDto } from '../../dto/create-cat.dto';
import { CatsService } from './cats.service';
import { ForbiddenException } from 'src/exception/forbideen.exception';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/decorator/roles.decorator';

// @UseFilters(HttpExceptionFilter)
@Controller('cats')
export class CatsController{
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @Roles('admin')
  // @UseGuards(new RolesGuard())
  @UsePipes(new ValidationPipe())
  async create(@Body() createCatDto: CreateCatDto) {
    console.log('post:::')
    this.catsService.create(createCatDto)
    return []
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
import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Body,
  Response,
  Res,
  HttpStatus,
  HttpException,
  UseFilters,
  UsePipes,
  UseGuards,
  UseInterceptors
} from '@nestjs/common'
import {CreateCatDto} from '../../dto/create-cat.dto';
import {CatsService} from './cats.service';
import {ForbiddenException} from 'src/exception/forbideen.exception';
import {HttpExceptionFilter} from 'src/filter/http-exception.filter';
import {RolesGuard} from 'src/guards/roles.guard';
import {Roles} from 'src/decorator/roles.decorator';
import {LoggingInterceptor} from 'src/interceptor/logging.interceptor';
import {TransformInterceptor} from 'src/interceptor/transform.interceptor';
import { ValidationPipe } from 'src/pipes/validation.pipe'

// @UseFilters(HttpExceptionFilter)
@Controller('cats')
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
  
export class CatsController {
  constructor(private readonly catsService : CatsService) {}

  @Post()
  @Roles('admin')
  @UsePipes(new ValidationPipe())
  async create(@Response() res, @Body() createCatDto : CreateCatDto) {
    console.log('createCatDto:::', createCatDto)
    console.log('res:::', res)
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
  findAll(@Req()request) {
    return {"data1": []}
  }
}
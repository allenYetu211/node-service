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
// import {TransformInterceptor} from 'src/interceptor/transform.interceptor';
import { ValidationPipe } from 'src/pipes/validation.pipe'

// @UseFilters(HttpExceptionFilter)
@Controller('cats')
// @UseInterceptors(LoggingInterceptor)
  
export class CatsController {
  constructor(private readonly catsService : CatsService) {}

  @Post()
  @Roles('admin')
  @UsePipes(new ValidationPipe())
  async create(@Body() createCatDto : CreateCatDto) {
    return this.catsService.create(createCatDto)
  }

  @Get()
  findAll(@Req() request) {
    return this.catsService.findAll()
  }
}
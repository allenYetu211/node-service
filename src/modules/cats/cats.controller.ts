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
import {ForbiddenException} from '@app/exception/forbideen.exception';
import {HttpExceptionFilter} from '@app/filter/http-exception.filter';
import {RolesGuard} from '@app/guards/roles.guard';
import {Roles} from '@app/decorator/roles.decorator';
import {LoggingInterceptor} from '@app/interceptor/logging.interceptor';
// import {TransformInterceptor} from '@app/interceptor/transform.interceptor';
import { ValidationPipe } from '@app/pipes/validation.pipe'

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
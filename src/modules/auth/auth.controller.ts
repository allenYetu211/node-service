
import { Controller, Get, UseGuards, Body, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateArticleDto } from './dto/create-auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  // 登录 - 生成token
  @Post('login')
  // @UseGuards(AuthGuard('jwt'))
  async createToken(@Body() body: CreateArticleDto): Promise<any> {
    console.log('body', body)
    return await this.authService.createToken(body)
    // await this.authService.createToken()
  }

}
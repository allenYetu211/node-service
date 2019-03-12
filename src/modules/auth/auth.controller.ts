import { Controller, Post, Body } from "@nestjs/common";
import {CreateArticleDto} from 'src/modules/auth/dto/create-auth';
import {AuthService} from 'src/modules/auth/auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){}

  @Post('createuser')
  public async createUser (@Body() body:CreateArticleDto) {
    console.log('createUser:::', body);
    console.log('authService::::',   this.authService);
  }

  @Post('login')
  public async adminLogin() {
    console.log('login')
  }
}
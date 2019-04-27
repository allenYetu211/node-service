import * as jwt from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import {CreateArticleDto} from './dto/create-auth'
@Injectable()
export class AuthService {
  constructor(
    // private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}


  async validateUser(payload: JwtPayload): Promise<any> {
    // return await this.usersService.findOneByEmail(payload.email);
    return
  }
  
  // 生成token  - 校验账号密码
  async createToken(createArticleDto: CreateArticleDto) {
    const user: JwtPayload = createArticleDto;
    return jwt.sign(user, 'secretKey', { expiresIn: 3600 });
  }

  async validataUser(token: string): Promise<any> { 
    return 'token'
  }
}

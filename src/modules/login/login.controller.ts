import { Controller, Post, Body, Get, Res, Req, Query, HttpStatus, Param, NotFoundException, Put, Delete } from "@nestjs/common";

import {CreateLoginDto} from '@app/modules/login/dto/create-login.dto'
import { LoginService } from "@app/modules/login/login.service";
import { ValidataObjectId } from "@app/pipes/validate-object-id.pipe";

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  // 用户登录
  @Post()
  public async adminLogin(@Body() CreateLoginDto: CreateLoginDto) {
    return await this.loginService.adminLogin(CreateLoginDto)
  }

  // 创建用户
  @Post('create')
  public async createUser(@Body() CreateLoginDto: CreateLoginDto) {
    console.log('create')
    return await this.loginService.createUser(CreateLoginDto)
  }


}
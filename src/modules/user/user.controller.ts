import { Controller, Post, Body, Get, Res, Req, Query, HttpStatus, Param, NotFoundException, Put, Delete } from "@nestjs/common";

import {CreateUserDto} from '@app/modules/user/dto/create-user.dto'
import { UserService } from "@app/modules/user/user.service";
import { ValidataObjectId } from "@app/pipes/validate-object-id.pipe";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  // 用户登录
  @Post()
  public async adminLogin(@Body() ceateUserDto: CreateUserDto) {
    return await this.userService.adminLogin(ceateUserDto)
  }

  // 创建用户
  @Post('create')
  public async createUser(@Body() ceateUserDto: CreateUserDto) {
    console.log('create')
    return await this.userService.createUser(ceateUserDto)
  }


}
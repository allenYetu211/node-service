import { Injectable } from "@nestjs/common";
import {CreateUserDto} from '@app/modules/user/dto/create-user.dto'

import {Model} from 'mongoose';
import { InjectModel} from '@nestjs/mongoose'
import { User } from '@app/modules/user/interfaces/user.interface'

@Injectable()
export class UserService{

  constructor(@InjectModel('user') private readonly userModel: Model<User>) {}

 
  public async adminLogin (createUserDto: CreateUserDto): Promise<User> {
    // return await this.loginModel(createLoginDto).save()
    console.log('createLoginDto:::', createUserDto)
    return
  }

  public async createUser(createUserDto: CreateUserDto): Promise<User> { 
    console.log('createLoginDto22:::', createUserDto)
    return
    // return await this.loginModel(createLoginDto).save()
  }

}
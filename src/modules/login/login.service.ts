import { Injectable } from "@nestjs/common";
import {CreateLoginDto} from 'src/modules/login/dto/create-login.dto'

import {Model} from 'mongoose';
import { InjectModel} from '@nestjs/mongoose'
import { Login } from 'src/modules/login/interfaces/login.interface'

@Injectable()
export class LoginService{

  constructor(@InjectModel('login') private readonly loginModel: Model<Login>) {}

 
  public async adminLogin (createLoginDto: CreateLoginDto): Promise<Login> {
    // return await this.loginModel(createLoginDto).save()
    console.log('createLoginDto:::', createLoginDto)
    return
  }

  public async createUser(createLoginDto: CreateLoginDto): Promise<Login> { 
    console.log('createLoginDto22:::', createLoginDto)
    return
    // return await this.loginModel(createLoginDto).save()
  }

}
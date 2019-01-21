/**
 * @file: 
 * @module: cat service
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import { Model } from 'mongoose';
import { Injectable } from "@nestjs/common";
// import { InjectModel } from "nestjs-typegoose";
import { InjectModel } from '@nestjs/mongoose';
import {Cats} from './cats.model'
import { CreateCatDto } from "src/dto/create-cat.dto";
import { TMongooseModel } from 'src/interface/mongoose.interface';

@Injectable()
export class CatsService {
  // constructor(@InjectModel(Cats)  private readonly catModel: TMongooseModel<Cats>) {}
  constructor(@InjectModel('Cats') private readonly catModel: Model<Cats>) {}
  public async create(createCatDto: CreateCatDto): Promise<Cats> {
     console.log('createCatDto::',createCatDto)
    return await this.catModel(createCatDto).save();
  }


  public async findAll(): Promise<Cats[]> {
    return await this.catModel.find().exec();
  }
}
/**
 * @file: 
 * @module: cat service
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import { Injectable, Inject } from "@nestjs/common";
import {Cat} from '../../interface/cat.interface'
import { Model } from 'mongoose';

console.log('Model', Model)
@Injectable()
export class CatsService {

  // constructor( @Inject('optionModel') private readonly optionModel: Model<Cat>) { }
  
  private readonly cats : Cat[] = [];

  create(cat: Cat){
    this.cats.push(cat)
  }

  findAll():Cat[] {
    return this.cats
  }

  public async saveOption (option: any): Promise<Cat>  {
    console.log('option', option); 
    return 
    // return await this.optionModel(option).save();
  }

  
}
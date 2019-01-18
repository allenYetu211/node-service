import {Injectable, PipeTransform, ArgumentMetadata, BadRequestException} from "@nestjs/common";
import {validate} from 'class-validator'
import {plainToClass} from 'class-transformer'

@Injectable()
export class ValidationPipe implements PipeTransform < any > {
  async transform(value: any, metadata: ArgumentMetadata) {

    console.log('1')

    const { metatype } = metadata
    if (!metatype || !this.toValidate(metatype)) {
      return value
    }

    console.log('2')

    const object = plainToClass(metatype, value)
    const errors = await validate(object)

    console.log('3')

    if (errors.length > 0) {
    console.log('5')
    return value
      throw new BadRequestException('Validation failed')
    }

    console.log('4')

    return value
  }

  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find((type) => metatype === type)
  }

}
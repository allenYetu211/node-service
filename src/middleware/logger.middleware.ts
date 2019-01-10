import { Injectable, NestMiddleware, MiddlewareFunction } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware{
  async resolve(name:string) : Promise<MiddlewareFunction> {
    await someAsyncJob()

    return  async (req, res, next) => {
      const result =  await someAsyncJob();
      console.log(`${result}: [${name}] Request ....`)
      next()
    }
  }
}

const someAsyncJob  = () => {
  return `someAsyncJob`
}

export const someLogger = (req, res, next) => {
  console.log(`middleware function`)
  next();
}
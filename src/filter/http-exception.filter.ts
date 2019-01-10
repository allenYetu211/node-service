import {Catch, HttpException, ExceptionFilter, ArgumentsHost} from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter { catch (exception : HttpException, host : ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getResponse()
    console.log('request::;', request.url)
    response
      .status(exception.getStatus())
      .json({
        statusCode: exception.getStatus(),
        timestamp: new Date().toISOString(),
        path: request.url
      })
  }
}
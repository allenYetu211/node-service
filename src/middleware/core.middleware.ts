/**
 * @module: core 认证模块
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import {Injectable, NestMiddleware, RequestMethod, HttpStatus} from "@nestjs/common";

@Injectable()
export class CoreMiddleware implements NestMiddleware {
  resolve() {
    return async(req, res, next) => {

      const getMethod = method => RequestMethod[method];
      const origin = req.headers.origin || '';
      console.log('origin::::', origin)
      const allowedMethods = [
        RequestMethod.GET,
        RequestMethod.HEAD,
        RequestMethod.PUT,
        RequestMethod.OPTIONS,
        RequestMethod.PATCH,
        RequestMethod.POST,
        RequestMethod.DELETE
      ];
      const allowedHeaders = [
        'Authorization',
        'Origin',
        'No-Cache',
        'Cache-Control',
        'Expires',
        'Content-Type'
      ];

      res.setHeader('Access-Control-Allow-Origin', origin || '*');
      res.header('Access-Control-Allow-Headers', allowedHeaders.join(','));
      res.header('Access-Control-Allow-Methods', allowedMethods.map(getMethod).join(','));
      res.header('Content-Type', 'application/json; charset=utf-8');

      if (req.method === getMethod(RequestMethod.OPTIONS)) {
        return res.sendStatus(HttpStatus.NO_CONTENT);
      } else {
        return next();
      }
      next()
    }
  }
}
import { Express, NextFunction, Request, Response} from 'express';

export function logger(app: Express) {
  app.use((req:Request, res:Response, next:NextFunction) => {
    const method = req.method;
    const url = req.url;
    console.log(`${method} ${url}`);
    next();
  });
}

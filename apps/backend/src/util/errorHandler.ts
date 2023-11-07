import { Express, NextFunction, Request, Response } from 'express';

export function errorHandler(app: Express) {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(`${req.method} ${req.body}`);
    console.error(err.stack);
    res.status(500).send('Something broke!');
    next(err);
  });
}

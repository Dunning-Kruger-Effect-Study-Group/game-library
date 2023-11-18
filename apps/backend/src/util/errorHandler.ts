import { Express, NextFunction, Request, Response } from 'express';

export function errorHandler(app: Express) {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV !== 'test') {
      console.error(JSON.stringify(err, null, 2));
    }
    if (err instanceof ApplicationError) {
      res.status(err['status']);
      return res.json(err.message);
    }
    res.status(500).send('Internal server error');
  });
}

class ApplicationError extends Error {}

export class DuplicateError extends ApplicationError {
  status: number;
  constructor() {
    super('An object already exists with the properties received.');
    this.name = 'DuplicateError';
    this.status = 409;
  }
}

export class UnauthorizedError extends ApplicationError {
  status: number;
  constructor() {
    super('Auth error.');
    this.name = 'UnauthorizedError';
    this.status = 401;
  }
}

export class NotFoundError extends ApplicationError {
  status: number;
  constructor() {
    super('Document or resource not found.');
    this.name = 'NotFoundError';
    this.status = 404;
  }
}

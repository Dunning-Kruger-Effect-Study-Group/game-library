import { Router } from 'express';
import {
  CreatePlatform,
  UpdatePlatform,
  PlatformList,
} from '../controller/platform';
import { IPlatform, IPlatformDoc } from '@game-library/types';
import { NotFoundError } from '../util/errorHandler';

export const PlatformRouter: Router = Router();

PlatformRouter.post('', async (req, res, next) => {
  const platform: IPlatform = req.body as IPlatform;
  try {
    const response = await CreatePlatform(platform);
    res.status(200);
    return res.json({ response });
  } catch (error) {
    return next(error);
  }
});

PlatformRouter.get('/list', async (req, res, next) => {
  try {
    const response = await PlatformList();
    res.status(200);
    return res.json(response);
  } catch (error) {
    return next(error);
  }
});

PlatformRouter.put('', async (req, res, next) => {
  try {
    const document: IPlatformDoc = { ...req.body };
    const response = await UpdatePlatform(document);
    if (response.modifiedCount === 1) {
      res.status(200);
      return res.json(response);
    } else {
      throw new NotFoundError();
    }
  } catch (error) {
    return next(error);
  }
});

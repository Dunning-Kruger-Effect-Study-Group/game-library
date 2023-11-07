import { Router } from 'express';
import { CreatePlatform, UpdatePlatform, PlatformList } from '../controller/platform';
import { IPlatform, IPlatformDoc } from '@game-library/types';

export const PlatformRouter: Router = Router();

PlatformRouter.post('', async (req, res) => {
  const platform: IPlatform = { ...req.body };
  res.json(await CreatePlatform(platform));
});

PlatformRouter.get('/list', async (req, res) => {
  res.status(200).json(await PlatformList());
});

PlatformRouter.put('', async (req, res) => {
  const platform: IPlatformDoc = { ...req.body };
  res.json(await UpdatePlatform(platform));
});

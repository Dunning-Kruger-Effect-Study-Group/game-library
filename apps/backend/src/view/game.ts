import { Router } from 'express';
import { CreateGame, FindGame, GameList } from '../controller/game';
import { IGameData, IGameQuery } from '@game-library/types';

export const GameRouter: Router = Router();
GameRouter.get('', async (req, res) => {
  const query: IGameQuery = { name: "" + req.query.name };
  res.json(await FindGame(query));
});
GameRouter.get('/list', async (req, res) => {
  const query: IGameQuery = { ...req.params };
  res.status(200).json(await GameList(query));
});
GameRouter.post('', async (req, res) => {
  const game: IGameData = { ...req.body };
  res.json(await CreateGame(game));
});

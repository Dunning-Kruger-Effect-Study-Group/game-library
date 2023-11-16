import { IDocument } from './db';

export interface IGameDataDoc extends IGameData, IDocument {}

export interface IGameData {
  coverArt?: string;
  name: string;
  developer?: string;
  publisher?: string;
  releases: Array<IGameRelease>;
}

export interface IGameRelease {
  releaseDate: Date;
  platform: string;
}

export interface IGameQuery {
  name?: string;
  from?: Date;
  to?: Date;
  platform?: string;
}

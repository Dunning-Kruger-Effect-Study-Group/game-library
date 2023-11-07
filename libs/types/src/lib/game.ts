import { ObjectId } from 'mongoose';
import { IDocument } from './db';

export interface IGameDataDoc extends IGameData,IDocument{}

export interface IGameData {
  coverArt?: string;
  name: string;
  developer?: ObjectId
  publisher?: ObjectId
  releases: Array<IGameRelease>;
}

export interface IGameRelease {
  releaseDate: Date;
  platform: ObjectId;
}

export interface IGameQuery {
  name?: string;
  from?: Date;
  to?: Date;
  platform?: string;
}

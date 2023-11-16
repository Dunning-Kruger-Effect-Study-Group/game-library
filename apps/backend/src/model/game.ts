import { IGameData, IGameRelease } from '@game-library/types';
import { ObjectId,Schema } from 'mongoose';
import { Models } from './models';

// SCHEMAS
export function setGameSchema(){
  const releaseSchema = new Schema<IGameRelease>(
    {
      platform: { type: String, required: true },
      releaseDate: { type: Date, required: true },
    },
    { autoIndex: false, versionKey: false }
  );
  
  const gameSchema = new Schema<IGameData>(
    {
      coverArt: { type: String, required: false },
      name: { type: String, required: true },
      developer: {type:String, required:false},
      publisher: {type:String, required:false},
      releases: [releaseSchema],
    },
    { autoIndex: false, versionKey: false, collection: Models.Game }
  );
  return gameSchema
}

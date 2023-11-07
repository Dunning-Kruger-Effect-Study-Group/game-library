import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { IGameData } from '@game-library/types';

// SCHEMAS
export const gameSchema = new Schema<IGameData>(
  {
    coverArt: { type: String, required: false },
    name: { type: String, required: true },
    OS: { type: String, required: false },
    releaseDate: { type: Date, required: false },
  },
  { autoIndex: false }
);

// SET MODELS IN CONNECTION
export function setModels(conn: mongoose.Connection) {
  conn.model(Models.Game, gameSchema);
}

// MODELS ENUM
export const Models = {
  Game: 'game',
  User: 'user',
};

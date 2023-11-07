import mongoose from 'mongoose';
import { setGameSchema } from './game';
import { setPlatformSchema } from './platform';
import { setCompanySchema } from './company';



// SET MODELS IN CONNECTION
export function setModels(conn: mongoose.Connection) {
  conn.model(Models.Game, setGameSchema());
  conn.model(Models.Company, setCompanySchema());
  conn.model(Models.Platform, setPlatformSchema());
}

// MODELS ENUM
export const Models = {
  Game: 'game',
  User: 'user',
  Platform: 'platform',
  Company: 'company',
};

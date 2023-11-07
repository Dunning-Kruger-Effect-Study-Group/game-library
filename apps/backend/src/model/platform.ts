import { IPlatform } from '@game-library/types';
import { Schema } from 'mongoose';
import { Models } from './models';

// SCHEMAS
export function setPlatformSchema() {
  const platformSchema = new Schema<IPlatform>(
    {
      name: { type: String, required: true },
      releaseDate: { type: Date, required: true },
    },
    { autoIndex: false, versionKey: false, collection: Models.Platform }
  );
  return platformSchema;
}

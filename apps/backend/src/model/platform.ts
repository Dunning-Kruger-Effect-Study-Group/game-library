import { IPlatform, IPlatformRelease } from '@game-library/types';
import { Schema } from 'mongoose';
import { Models } from './models';

// SCHEMAS
export function setPlatformSchema() {
  
  const platformReleaseSchema = new Schema<IPlatformRelease>(
    {
      country: { type: String, required: true, minlength: 2 },
      releaseDate: { type: Date, required: true },
    },
    {
      autoIndex: false,
      versionKey: false,
    }
  );
  const platformSchema = new Schema<IPlatform>(
    {
      name: { type: String, required: true, minlength: 1, unique: true },
      releases: { type: [platformReleaseSchema], required: true },
    },
    { autoIndex: false, versionKey: false, collection: Models.Platform }
  );
  return platformSchema;
}

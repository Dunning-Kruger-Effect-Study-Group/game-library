import { GetConnection } from '../db/connection';
import { Models } from '../model/models';
import { IPlatform, IPlatformDoc } from '@game-library/types';
import { Document, Model } from 'mongoose';
import { DuplicateError } from '../util/errorHandler';

export async function CreatePlatform(data: IPlatform) {
  const db = GetConnection();
  const model: Model<IPlatform> = db.model(Models.Platform);
  // Check for duplicate
  const duplicate = await model.find({ name: data.name });
  if (duplicate.length > 0) {
    throw new DuplicateError();
  }
  const document: Document = new model(data);
  return await document.save();
}

export async function PlatformList() {
  const db = GetConnection();
  const model = db.model(Models.Platform);
  return await model.find();
}

export async function UpdatePlatform(data: IPlatformDoc) {
  const db = GetConnection();
  const model: Model<IPlatform> = db.model(Models.Platform);
  // Check for duplicate
  const duplicate = await model.find({ name: data.name });
  if (duplicate.length > 0) {
    throw new DuplicateError();
  }
  return await model.updateOne({ _id: data._id }, data);
}

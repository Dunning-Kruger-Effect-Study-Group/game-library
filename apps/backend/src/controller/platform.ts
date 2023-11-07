import { GetConnection } from '../db/connection';
import { Models } from '../model/models';
import {
  IPlatform, IPlatformDoc,
} from '@game-library/types';
import { Document, Model } from 'mongoose';

export async function CreatePlatform(Platform: IPlatform) {
  const db = GetConnection();
  const model: Model<IPlatform> = db.model(Models.Platform);
  const document: Document = new model(Platform);
  let result;
  try {
    result = await document.save();
  } catch (error) {
    result = error;
  }
  return result;
}

export async function PlatformList() {
  const db = GetConnection();
  const model = db.model(Models.Platform);

  try {
    return await model.find();
  } catch (error) {
    return error;
  }
}

export async function UpdatePlatform(newData: IPlatformDoc) {
  const db = GetConnection();
  const model: Model<IPlatform> = db.model(Models.Platform);

  // Update
  try {
    return await model.updateOne({ _id: newData._id }, newData);
  } catch (error) {
    return error;
  }
}

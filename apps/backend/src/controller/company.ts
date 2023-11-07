import { GetConnection } from '../db/connection';
import { Models } from '../model/models';
import { ICompany, ICompanyDoc } from '@game-library/types';
import { Document, Model } from 'mongoose';

export async function CreateCompany(Company: ICompany) {
  const db = GetConnection();
  const model: Model<ICompany> = db.model(Models.Company);
  const document: Document = new model({
    name: Company.name,
    founded: new Date(Company.founded),
    defunct: new Date(Company.defunct),
  });
  let result;
  try {
    result = await document.save();
  } catch (error) {
    result = error;
  }
  return result;
}

export async function CompanyList() {
  const db = GetConnection();
  const model = db.model(Models.Company);

  try {
    return await model.find();
  } catch (error) {
    return error;
  }
}

export async function UpdateCompany(newData: ICompanyDoc) {
  const db = GetConnection();
  const model: Model<ICompany> = db.model(Models.Company);

  // Update
  try {
    return await model.updateOne({ _id: newData._id }, newData);
  } catch (error) {
    return error;
  }
}

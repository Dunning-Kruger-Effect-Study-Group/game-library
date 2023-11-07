import { ICompany } from '@game-library/types';
import { Schema } from 'mongoose';
import { Models } from './models';

// SCHEMAS
export function setCompanySchema() {
  const companySchema = new Schema<ICompany>(
    {
      name: { type: String, required: true },
      founded: { type: Date, required: false },
      defunct: { type: Date, required: false },
    },
    { autoIndex: false, versionKey: false, collection: Models.Company }
  );
  return companySchema
}

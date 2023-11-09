import { IDocument } from './db';

export interface ICompanyDoc extends ICompany, IDocument {}

export interface ICompany {
  name: string;
  logo?: string;
  founded: Date;
  defunct?: Date;
}

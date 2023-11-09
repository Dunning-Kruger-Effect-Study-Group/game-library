import { IDocument } from './db';

export interface IPlatformDoc extends IPlatform, IDocument {}

export interface IPlatform {
  name: string;
  logo?: string;
  releaseDate: Date;
}

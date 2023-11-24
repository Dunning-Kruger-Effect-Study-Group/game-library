import { IDocument } from './db';

export interface IPlatformDoc extends IPlatform, IDocument {}

export interface IPlatform {
  name: string;
  logo?: string;
  releases: Array<IPlatformRelease>;
}

export interface IPlatformRelease {
  releaseDate: Date;
  country: string;
}

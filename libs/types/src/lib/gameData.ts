import { ObjectId } from "mongoose"

export interface IGameData {
  coverArt?: string
  releaseDate: Date
  name: string
  OS: ObjectId
}
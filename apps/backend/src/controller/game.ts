import {Request, Response} from "express";
import { GetConnection } from "../db/connection";
import { Models } from "../model/models";

export async function CreateGame(req:Request, res:Response) {
    const game = req.body
    const db = GetConnection()
    const model = db.model(Models.Game)
    const document = new model(game)
    const result = await document.save()

    res.json(result)
}
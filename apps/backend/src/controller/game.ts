import { GetConnection } from "../db/connection";
import { Models } from "../model/models";
import { IGameData, IGameDataDoc, IGameQuery } from "@game-library/types";
import { Document, Model } from "mongoose";

export async function CreateGame(game:IGameData) {
    const db = GetConnection()
    const model:Model<IGameData> = db.model(Models.Game)
    const document:Document = new model(game)
    let result
    try {
        result = await document.save()
    } catch (error) {
        result = error
    }
    return result
}

export async function UpdateGame(newData:IGameDataDoc) {
    const db = GetConnection()
    const model:Model<IGameData> = db.model(Models.Game)

    // Update
    try {
        return await model.updateOne({_id:newData._id},newData)
    } catch (error) {
        return error
    }
}

export async function FindGame(query:IGameQuery) {
    console.log(query)
    const db = GetConnection()
    const model = db.model(Models.Game)
    let result
    try {
        result = await model.find({name:query.name})
    } catch (error) {
        result = error
    }
    return result
}

export async function GameList(queryParams:IGameQuery) {
    const db = GetConnection()
    const model = db.model(Models.Game)
    const query = {$and:[]}
    if(queryParams.name !== undefined){
        query.$and = [...query.$and,{name:{"$regex": queryParams.name, "$options": "i"}}]
    }
    if(query.$and.length === 0){
        delete query.$and
    }
    let result
    try {
        result = await model.find(query)
    } catch (error) {
        result = error
    }
    return result
}
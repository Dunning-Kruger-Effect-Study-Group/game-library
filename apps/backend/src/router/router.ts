import {Express} from "express";
import { GameView } from "../view/game";


export function initRoutes(app: Express){
    app.use("/game",GameView)
}

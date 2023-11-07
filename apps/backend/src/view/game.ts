import {Express, Request, Response, Router} from "express";
import { CreateGame } from "../controller/game";


export function GameView(){
    const GameRouter = Router()
    // GameRouter.get("",)
    // GameRouter.get("",)
    // GameRouter.get("",)
    GameRouter.post("",CreateGame)
    return GameRouter    
}

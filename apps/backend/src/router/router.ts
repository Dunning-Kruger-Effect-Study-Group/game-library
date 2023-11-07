import {Express} from "express";
import { GameRouter } from "../view/game";
import { PlatformRouter } from "../view/platform";
import { CompanyRouter } from "../view/company";


export function initRoutes(app: Express){
    app.use("/game",GameRouter)
    app.use("/platform",PlatformRouter)
    app.use("/company",CompanyRouter)
}

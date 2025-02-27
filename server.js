import express from "express";
import dotenv from "dotenv"
import { logger } from "./utils/log.js";


dotenv.config()

const app = express()
const PORT = process.env.PORT


async function server() {
    app.use(express.json())
    
    app.use("/api", (req, res) => {
        res.status(200).json({message: "sucsess"})
    })
    app.listen(PORT, () =>{
        logger.info(`Server is running on port ${PORT}`)
    })
}
server()
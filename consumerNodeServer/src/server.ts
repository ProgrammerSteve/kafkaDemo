import http from "http"
import io from "socket.io"
import apiServer from "./api"


const httpServer= http.createServer(apiServer)
// const socketServer=io(httpServer,{
//     cors: {
//         origin: "*",
//         methods: ["GET", "POST"],
//       },
// })
import http from "http"
import io from "socket.io"
import apiServer from "./api"


const httpServer= http.createServer(apiServer)
const ioServer=new io.Server(httpServer,{
    cors:{},
})
// const socketServer=io(httpServer,{
//     cors: {
//         origin: "*",
//         methods: ["GET", "POST"],
//       },
// })
import http from "http"
import {Server} from "socket.io"
import apiServer from "./api"
import { Kafka } from "kafkajs";

const httpServer= http.createServer(apiServer)
const io=new Server(httpServer,{cors:{},})

const kafka = new Kafka({
    clientId: "my-node-app",
    brokers: ["localhost:9092"],
});
const consumer = kafka.consumer({ groupId: "my-group" });
const runKafkaConsumer = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: "your-topic-name", fromBeginning: false });
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
        const receivedMessage = message.value?.toString();
        console.log(`Received message from Kafka: ${receivedMessage}`);
        io.emit("message", receivedMessage);
        },
    });
};
runKafkaConsumer().catch(console.error);

io.on("connection", async(socket)=>{
    console.log("a user connected");
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
    socket.on("message",async(message)=>{
        io.emit("message", message);
    })
})

const port = process.env.PORT || 3001;
httpServer.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});
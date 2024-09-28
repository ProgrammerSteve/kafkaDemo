import express from "express";
import morgan from "morgan";

const apiServer = express();

apiServer.use(morgan("combined"));
apiServer.use(express.json());
apiServer.get("/", async (req, res) => {
  res.send("node backend is online");
});
export default apiServer;

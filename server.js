import express from "express";
import cors from "cors";
import EmailRoutes from "./src/Servlets/EmailServlet.js";

const port = 5002

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors({
  origin: ["http://localhost:3000"]
}));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.use(express.json());

app.use("/webhook", EmailRoutes);




export default app;

import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

//confugure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use(`${process.env.REACT_APP_API_BASE_URL}/api/v1/auth`, authRoutes);

//rest api
app.get("/", (req, res) => {
	res.send("<h1>Welcome to butterfly interiors</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;
//run listen
app.listen(PORT, (req, res) => {
	console.log(`Server runnimg on ${PORT}`);
});

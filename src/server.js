import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/task.routes.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// connect database
connectDB();

const PORT = process.env.PORT || 3000

// routes
app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})


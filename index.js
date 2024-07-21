import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import studentRouter from "./Routers/student.router.js";
import mentorRouter from "./Routers/mentor.router.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.status(200).send("Welcome to student-mentor API task");
})

app.use('/api/student', studentRouter);
app.use('/api/mentor', mentorRouter);

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
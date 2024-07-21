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
    res.status(200).send(
        `<h1>Welcome to student-mentor API task.  
         <a href="https://documenter.getpostman.com/view/36384038/2sA3kUHhef" traget="_blank"> click here</a> for API documentation</h1>`
    );
})

app.use('/api/student', studentRouter);
app.use('/api/mentor', mentorRouter);

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
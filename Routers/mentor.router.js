import express from "express";
import { assignStudents, createMentor, getAllMentors } from "../Controllers/mentor.controller.js";

const router = express.Router()

router.post('/creatementor', createMentor);
router.get('/getallmentors', getAllMentors);
router.post('/assignstudents/:mentorId',assignStudents);

export default router
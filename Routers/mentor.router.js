import express from "express";
import { assignStudents, createMentor, getAllMentors, getMentorStudents } from "../Controllers/mentor.controller.js";

const router = express.Router()

router.post('/creatementor', createMentor);
router.get('/getallmentors', getAllMentors);
router.post('/assignstudents/:mentorId', assignStudents);
router.get('/getmentorstudents/:mentorId', getMentorStudents);

export default router
import express from "express";
import { assignMentor, createStudent, getAllStudents, getUnassignedStudents } from "../Controllers/student.controller.js";

const router = express.Router();

router.post('/createstudent', createStudent)
router.get('/getallstudents', getAllStudents);
router.get('/getunassignedstudents', getUnassignedStudents)
router.post('/assignmentor/:studentId', assignMentor);

export default router;
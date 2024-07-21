import express from "express";
import { createStudent, getAllStudents, getUnassignedStudents } from "../Controllers/student.controller.js";

const router = express.Router();

router.post('/createstudent', createStudent)
router.get('/getallstudents', getAllStudents);
router.get('/getunassignedstudents',getUnassignedStudents)

export default router;
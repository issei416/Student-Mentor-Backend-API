import Students from "../models/student.schema.js";
import mongoose from "mongoose";

export const createStudent = async (req,res) => {
    try {
        const { name, email } = req.body;
        const student = new Students({
            name,
            email,
            assigned_mentor:[],
            previous_mentors: []
        })
        await student.save();
        res.status(201).send(student);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const getAllStudents = async (req, res) => {
    try {
        const students = await Students.find();
        res.status(200).send(students);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const getUnassignedStudents = async (req, res) => {
    try {
        const students = await Students.find();
        const unassignedStudents = students.filter(student => student.assigned_mentor.length === 0);
        res.status(200).send(unassignedStudents);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}




import Students from "../models/student.schema.js";
import Mentors from "../models/mentor.schema.js";
import mongoose from "mongoose";

export const createStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const student = new Students({
      name,
      email,
      assigned_mentor: [],
      previous_mentors: [],
    });
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Students.find();
    res.status(200).send(students);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getUnassignedStudents = async (req, res) => {
  try {
    const students = await Students.find();
    const unassignedStudents = students.filter(
      (student) => student.assigned_mentor.length === 0
    );
    res.status(200).send(unassignedStudents);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const assignMentor = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const mentorId = req.body.mentorId;
    const student = await Students.findById(studentId);
    const mentor = await Mentors.updateOne({ _id: mentorId },{$push : {assigned_students:studentId}});
    console.log(mentor);
    console.log(`sid:${studentId},mid:${mentorId},student:${student}`);
      if (!student.assigned_mentor.length) {
          const updatedstudent = await Students.findByIdAndUpdate(
              studentId,
              { assigned_mentor: [mentorId] },
              { new: true }
          );
          console.log(updatedstudent);
          res.status(200).send(updatedstudent);
      } else {
          const current_mentorId = student.assigned_mentor[0];
          const newstudent = await Students.findByIdAndUpdate(
              studentId,
              {
                  assigned_mentor: [mentorId],
                  $push: { previous_mentors: current_mentorId }
              },
              { new: true }
          );
          await Mentors.updateOne({ _id: current_mentorId }, { $pull: { assigned_students: studentId } });
          console.log(newstudent);
          res.status(200).json({message: "mentor changed succesfully", newstudent});
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

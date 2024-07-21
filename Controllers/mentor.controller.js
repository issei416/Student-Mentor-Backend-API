import Mentors from "../models/mentor.schema.js";
import Students from "../models/student.schema.js";

export const createMentor = async (req, res) => {
    try {
        const { name, email } = req.body;
        const mentor = new Mentors({
            name,
            email,
            assigned_students: []
        })
        await mentor.save();
        res.status(201).json({ message: "mentor created succesfully", data: mentor });
    } catch (error) {
        console.log(error);
    }
}

export const getAllMentors = async (req, res) => {
    try {
        const mentors = await Mentors.find();
        res.status(200).send(mentors);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const assignStudents = async (req, res) => {
    try {
        const mentorId = req.params.mentorId;
        const students = req.body.studentIds;
        const mentor = await Mentors.findByIdAndUpdate(mentorId, { assigned_students: students }, { new: true });
        console.log(mentor)
        await Students.updateMany({ _id: { $in: students } }, { $push: { assigned_mentor: mentorId } });
        res.status(200).json({ message: "students assigned succesfully", mentor });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}




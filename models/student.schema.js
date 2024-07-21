import mongoose from "mongoose";
import Mentors from "./mentor.schema.js";

const studentSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    assigned_mentor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentors'
    }],
    previous_mentors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Mentors'
        }
    ]
})

const Students = mongoose.model('Students', studentSchema);

export default Students;
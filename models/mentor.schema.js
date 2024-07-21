import mongoose from "mongoose";
import Students from "./student.schema.js";

const mentorSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    assigned_students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Students'
        }
    ]
});

const Mentors = mongoose.model('Mentors', mentorSchema);
export default Mentors;

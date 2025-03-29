import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const studentSchema = new Schema({

    id: {
        type: String,
        required: true
    },

    studentName: {
        type: String,
        required: true
    },
    subjects:{
        type: String,
    },

    attendance: {
        type: String,
    },
    attendanceDate: {
        type: String,
    },
    teacherName :{
        type: String,
        
    },
  
   studentGrade: {
        type: String,
       
    },

    studentSubmissionDate: {
        type: String,
    },
 
});

const student= mongoose.model('Student', studentSchema);

export default student;
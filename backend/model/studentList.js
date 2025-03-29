import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const studentListSchema = new Schema({
    studentName: {
        type: String,
        required: true
    },
    studentEmail: {
        type: String,
     
    },
    studentGrade: {
        type: String,
   
    },
    studentSubject: {
        type: String,
       
   
    },
    studentTeacher: {
        type: String,
       required: true
    },

    studentSubmissionDate: {
        type: String,
   
    },
  

});


const StudentList = mongoose.model('StudentList', studentListSchema);

export default StudentList;
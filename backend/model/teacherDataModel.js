import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const teacherSchema = new Schema({

    id :{
        type: String,
        required: true
    },

    teacherName :{
        type: String,
        required: true
    },
   
    subject:{
        type: String,
    },

    studentName:{
        type: String,
    },

    studentGrade: {
        type: String,
       
    },
    attendance: {
        type: String,
    },
    studentClass : {
        type : String,
    },

    attendanceDate: {
        type: String,
    },

 

});

const TeacherData = mongoose.model('TeacherData', teacherSchema);

export default TeacherData;
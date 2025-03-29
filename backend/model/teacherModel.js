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

    
    studentList:{
        type: Array,
    },

 

});

const Teacher = mongoose.model('Teacher', teacherSchema);

export default Teacher;
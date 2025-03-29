import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
   


    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'student'
    }
});

const Users = mongoose.model('Users', userSchema);

export default Users;
import student from '../model/studentModel.js'
import Teacher from '../model/teacherModel.js'
import Users from '../model/usersModel.js'
import bcrypt from 'bcryptjs'

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        return res.status(200).json({ message: "Login successful", user: user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};



export const register = async (req, res) => {
    const { firstName, lastName, email, password, subject, role } = req.body
    console.log("Iam In " + firstName, lastName, email, password, subject, role)
    try {
        const user = await Users.findOne({ email: email })
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }else {
            const hashedPassword = await bcrypt.hash(password, 10); 
            const newUser = new Users({
                firstName,
                lastName,
                email,
                password : hashedPassword,
                role
            })
            await newUser.save()
            if(role === "student"){
                const newStudent = new student({
                    studentName: firstName + " " + lastName,
                    id: newUser._id
                })
                await newStudent.save()
               
            } else if(role === "teacher" && subject){
                const newTeacher = new Teacher({
                    teacherName: firstName + " " + lastName,
                    id: newUser._id,
                    subject : subject,
                   
                })
                await newTeacher.save()
              
            }
          
            return res.status(201).json({ message: "User created", user: newUser })
        }
    }
    catch (error) {
        console.log(error)
    }
}
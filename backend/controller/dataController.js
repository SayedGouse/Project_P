import StudentList from "../model/studentList.js";
import student from "../model/studentModel.js";
import TeacherData from "../model/teacherDataModel.js";
import Teacher from "../model/teacherModel.js";

export const getAllData = async (req, res) => {
  try {
    const data = await StudentList.find({});
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const getTeachers = async (req, res) => {
  try {
    const data = await Teacher.find({});
    res.status(200).json(data);
  } catch (Errr) {
    console.log(Errr);
  }
};


export const addStudentData = async (req, res) => {
    const {id,subject, studentName, attendance, attendanceDate, teacherName   } = req.body;

    console.log("Body Bidy" + id,subject, studentName, attendance, attendanceDate, teacherName , );
    try {
        const newStudent = new student({
        id : id,
        studentName : studentName,
        attendance : attendance,
        attendanceDate : attendanceDate,
        teacherName : teacherName,
        subject : subject,

        });
        await newStudent.save();

     // Update the teacher's student list by adding the studentName
     const updatedTeacher = await Teacher.findOneAndUpdate(
        { teacherName: teacherName }, 
        { $push: { studentList: studentName } }, 
        { new: true, upsert: true } 
    );

    res.status(201).json({ newStudent, updatedTeacher });
    } catch (error) {
        console.log(error);
    }
}



export const getstudentByIdAlldata = async (req, res) => {
    const { id } = req.params;
    console.log("ID:", id);
    try {
        const data = await student.find({ id: id }); 
        if (data.length === 0) {
            return res.status(404).json({ message: "No records found" });
        }
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};


export const getTeacherById = async (req, res) => {
    const { id } = req.params;
    console.log("ID", id);
    try {
        const data = await Teacher.findOne({ id: id });
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

export const teacherData =async (req, res) =>{
    const {id, teacherName, subject, studentName, studentClass, attendance, studentGrade, attendanceDate} = req.body;
    console.log("Body Bidy" + id, teacherName, subject, attendance, studentName, studentGrade, attendanceDate);
    try {
        const newTeacher = new TeacherData({
            id: id,
            teacherName: teacherName,
            subject: subject,
            studentName: studentName,
            studentGrade: studentGrade,
            studentClass: studentClass,
            attendance : attendance,
            attendanceDate: attendanceDate,
        });
        await newTeacher.save();
        res.status(201).json({message : "success", data : newTeacher});
    } catch (error) {
        console.log(error);
    }
}



export const getTeacherByIdAlldata = async (req, res) => {
    const { id } = req.params;
    console.log("Iam in Backend:", id);

    try {
        const data = await TeacherData.find({ id: id }); 
        if (data.length === 0) {
            return res.status(404).json({ message: "No records found" });
        }
        res.status(200).json(data);
        console.log("Data",data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};

export  const  adminData = async(req, res)=>{
try {
    const data = await TeacherData.find({});
    res.status(200).json(data);
    
} catch (error) {
    console.log(error);
}
}


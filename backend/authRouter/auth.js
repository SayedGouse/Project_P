import express from 'express'
import { login, register } from '../controller/authControl.js'
import { addStudentData, adminData, getAllData, getstudentByIdAlldata, getTeacherById, getTeacherByIdAlldata, getTeachers, teacherData } from '../controller/dataController.js'

const authRouter = express.Router()

authRouter.post('/login',login)
authRouter.post('/register',register)
authRouter.get('/allData', getAllData)
authRouter.get('/allTeacher', getTeachers)
authRouter.post('/addStudentData', addStudentData)
authRouter.get('/getTeacherById:id',getTeacherById )
authRouter.post('/teacherData', teacherData)
authRouter.get('/studentAllData:id', getstudentByIdAlldata)
authRouter.get('/teacherAllData:id', getTeacherByIdAlldata)
authRouter.get('/adminData', adminData)

export default authRouter
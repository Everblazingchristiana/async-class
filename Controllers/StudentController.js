const Student = require('../Models/StudentModel')

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find()
    return res.status(200).json(students)
  
  } catch (error) {
    res.status(500).json(error)
  }

}

const createNewStudent = async (req, res) => {
    if(!req.body.name){
        return res.status(400).json({
            message: "please enter your name"
        })
    }

    if(!req.body.email){
        return res.status(400).json({
            message: "please enter your email"
        })
    }
    if(!req.body.phone){
        return res.status(400).json({
            message: "please enter your phone number"
        })
    }
    if(!req.body.password){
        return res.status(400).json({
            message: "please enter your password"
        })
    }

    try {
        const newStudent = await Student.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
        })
        return res.status(201).json(newStudent)

    } catch (error) {
        return res.status(500).json(error)

    }

    
}

const getOneStudent = async (req, res) => {
    try{
        const singleStudent = await Student.findById(req.params.id)
        return res.status(200).json(singleStudent)
    }catch (error) {
        res.status(500).json(error)
    }
}

const updateStudent = async (req, res) => {
    try{
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body,{new: true})
        if(updatedStudent) {
            return res.status(200).json(updatedStudent)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteStudent = async (req, res) => {
    try{
        const deletedStudent = await Student.findByIdAndDelete(req.params.id)
        if(deletedStudent) {
            return res.status(200).json({message: 'student deleted successfully'})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = {getAllStudents, createNewStudent, getOneStudent, updateStudent, deleteStudent}
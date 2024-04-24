const express = require('express')
const router = express.Router()
const {getAllStudents, createNewStudent, getOneStudent, updateStudent, deleteStudent } = require('../Controllers/StudentController')

router.route('/students').get(getAllStudents).post(createNewStudent)
router.route('/students/:id').get(getOneStudent).put(updateStudent).delete(deleteStudent)


module.exports = router
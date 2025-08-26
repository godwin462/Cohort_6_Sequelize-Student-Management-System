const express = require('express');
const {createStudentGrade,
    getAStudentGrades,
    getAllGrades,
    updateStudentGrade,
    deleteStudentGrade} = require("../controller/gradesController");


const router = express.Router();

router.post('/grade', createStudentGrade);
router.get("/grade/:studentId", getAStudentGrades);
router.get("/grade", getAllGrades);
router.put("/grade/:id", updateStudentGrade);
router.delete("/grade/:id", deleteStudentGrade);

module.exports = router;

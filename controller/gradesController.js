const Student_grade = require("../models/Student_grade");
const Student = require("../models/students");

// get all student grades
exports.getAllGrades = async (req, res) => {
    try {
        const studentGrades = await Student_grade.findAll();
        res.status(200).json({
            message: "All student grades below",
            data: studentGrades,
        });
    } catch(error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

// get a student grades
exports.getAStudentGrades = async (req, res) => {
    try {
        const {studentId: id} = req.params;
        const studentGrades = await Student_grade.findAll({where: {studentId: id}});
        if(studentGrades.length === 0) {
            return res.status(200).json({
                message: "No student grade found",
                data: studentGrades,
            });
        }
        res.status(200).json({
            message: "Student grade below",
            data: studentGrades,
        });
    } catch(error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

// create student grade
exports.createStudentGrade = async (req, res) => {
    try {
        /* id
        week
        punctuality
        assignment
        classwork
        personal_defence
        attendance
        studentId
        references
        total */

        const {studentId, week, punctuality, assignment, classwork, personal_defence, attendance} = req.body;
        const student = await Student.findByPk(studentId);
        if(!student) {
            return res.status(404).json({
                error: "Student not found",
            });
        }

        const total = punctuality + assignment + classwork + personal_defence + attendance;
        const studentGrade = await Student_grade.create({studentId, week, punctuality, assignment, classwork, personal_defence, attendance, total});
        res.status(201).json({
            message: "Student grade created successfully",
            data: studentGrade,
        });
    } catch(error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

// update student grade
exports.updateStudentGrade = async (req, res) => {
    try {
        const {id} = req.params;
        const {studentId, week, punctuality, assignment, classwork, personal_defence, attendance} = req.body;

        const student = await Student.findByPk(studentId);
        if(!student) {
            return res.status(404).json({
                error: "Student not found",
            });
        }

        const studentGrade = await Student_grade.update({week, punctuality, assignment, classwork, personal_defence, attendance}, {where: {id, studentId}});
        res.status(200).json({
            message: "Student grade updated successfully",
            data: studentGrade,
        });
    } catch(error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

// delete student grade
exports.deleteStudentGrade = async (req, res) => {
    try {
        const {id} = req.params;
        const studentGrade = await Student_grade.destroy({where: {id}});
        res.status(200).json({
            message: "Student grade deleted successfully",
            data: studentGrade,
        });
    } catch(error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

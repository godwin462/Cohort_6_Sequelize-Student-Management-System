const student = require("../models/students");
const Student = require("../models/students")
// create student
exports.createStudent = async (req,res) => {
    try {
        const {fullName,stack,gender,centre,email}= req.body;
         const student = await Student.create({fullName,stack,gender,centre,email});
         res.status(201).json({message:`Student created successfully`, data:student})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

// get a student
exports.getAStudent = async (req,res)=>{
    try {
        const {id} = req.params
        const student = await Student.findByPk(id)
        res.status(200).json({
            message: "Student below",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

// get all student
exports.getAllStudent = async(req,res)=>{
    try {
        // const {fullName, email, stack, gender, centre} = req.body
        const student = await Student.findAll()
        res.status(200).json({
            message: "All students found",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

// update student
exports.updateStudent = async (req,res)=>{
    try {
        const {id} = req.params
        const {fullName, email, stack, gender, centre} = req.body
        const student = await Student.update({fullName, email, stack, gender, centre},{where:{id}})
        res.status(200).json({
            message: "Student updated successfully",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

// delete student
exports.deleteStudent = async (req,res)=>{
    try {
        const {id} = req.params
        const student = await Student.destroy({where:{id}})
        res.status(200).json({
            message: "Student deleted successfully",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

import { Request, Response } from 'express';
import { StudentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
    const data = req.body;
    try {
        const result = await StudentService.createStudentIntoDB(data);
        return res.status(200).send({
            success: true,
            message: 'Student created successfully',
            data: result,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error,
            result: null,
        });
    }
};

const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await StudentService.allStudentFromDB();
        return res.status(200).send({
            success: true,
            message: 'Students fetched successfully',
            data: result
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error,
            result: null,
        })
    }
}

const getSingleStudent = async (req: Request, res: Response) => {
    try {
        const result = await StudentService.singleStudentFromDB(req.params.id);
        if (result) {
            return res.status(200).send({
                success: true,
                message: 'Student fetched successfully',
                data: result
            })
        }
        return res.status(404).send({
            success: false,
            message: "Student not found",
            result: null,
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Student not found",
            result: null,
        })
    }
}

export const StudentController = {
    createStudent,
    getAllStudents,
    getSingleStudent
};

import { Student } from './student.interface';
import StudentModel from './student.model';

const createStudentIntoDB = async (student: Student) => {
    const result = await StudentModel.create(student);
    return result;
};

const allStudentFromDB = async () => {
    const result = await StudentModel.find();
    return result;
};

const singleStudentFromDB = async (id: string) => {
    const result = await StudentModel.findOne({ id });
    return result;
}

export const StudentService = {
    createStudentIntoDB,
    allStudentFromDB,
    singleStudentFromDB
};

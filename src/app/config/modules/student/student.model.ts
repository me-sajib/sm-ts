import mongoose, { Schema } from 'mongoose';
import { Guardian, Student, names } from './student.interface';

const namesSchema = new Schema<names>({
  first: { type: String, required: true },
  middle: { type: String },
  last: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  fatherContactNumber: { type: String },
  motherName: { type: String },
  motherOccupation: { type: String },
  motherContactNumber: { type: String },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: namesSchema,
  gender: { type: String },
  dateOfBirth: { type: String },
  email: { type: String, unique: true, required: true },
  contactNumber: { type: String, unique: true, required: true },
  emergencyContactNumber: { type: String },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  image: { type: String },
  active: { type: String },
});

const StudentModel = mongoose.model('Student', studentSchema);

export default StudentModel;

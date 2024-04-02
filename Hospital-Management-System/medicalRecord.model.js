import { Schema,model } from "mongoose";

const medicalRecordSchema = new Schema({

},{timestamps:true})

export const MedicalRecord = model("MedicalRecord",medicalRecordSchema)
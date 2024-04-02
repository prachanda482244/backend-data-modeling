import { Schema,model } from "mongoose";
const worksInHospitalSchema= new Schema({
      hospitalName:{
            type:Schema.Types.ObjectId,
            ref:"Hospital"
      },
      workingHours:{
            type:Number,
            default:0
      }
})
const doctorSchema = new Schema({
      name:{
            type:String,
            required:true
      },
      salary:{
            type:Number,
            required:true
      },
      qualification:{
            type:String,
            required:true
      },
      experienceInYears:{
            type:Number,
            default:0
      },
      worksInHospital:[worksInHospitalSchema]
},{timestamps:true})

export const Doctor = model("Doctor",doctorSchema)
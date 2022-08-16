
import mongoose from 'mongoose';
const usersSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    phone:String,
    dob:String,
    password:String
});

const userdatas = mongoose.model("userdatas",usersSchema);

export default userdatas;
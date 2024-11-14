const mongoose = require('mongoose');
mongoose.set('strictQuery',true);

const local = "mongodb+srv://dathtph53550:LI7x0JUHKRbxVarK@hoangdat.hwvdf.mongodb.net/lab3";
const connect = async () =>{
    try{
        await mongoose.connect(local);
        console.log("connect success");
    }catch(error){
        console.log("connect fail");
        console.log(error);
    }
}
module.exports = {connect};
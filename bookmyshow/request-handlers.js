import bcrypt from "bcrypt";
import userSchema from "./model/user.schema.js";
import fileSchema from "./model/file.schema.js";

export async function register(req, res) {
    try {
        let { username, password,phone,email } = req.body;
        if( username.length < 4 && password.length < 4) {
            return res.json("Invalid username or password");
        }
        let hashedPass = await bcrypt.hash(password, 10);
        let userExist = await userSchema.findOne({ username });
        if(userExist) {
            return res.status(401).send("User already exists");
        }
        let result = await userSchema.create({ username, password: hashedPass ,phone,email});
        return res.status(200).send("Registration successful!");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}



export async function uploadFile(req,res){
    try {
        let {Mname,data,myfile}=req.body
        
        let result=await fileSchema.create({
            Mname,
            data,
            myfile
        })
        if(result){
            return res.json("file upload")
        }
        return res.status(500).send ("error occured")
    } catch (error) {
        console.log(error)
        return res.status(500).send("error occured")
    }
}


export async function  getfile(req,res){
    try {
        let data=await fileSchema.find();
        return res.json(data)
    } catch (error) {
        console.log(error)
        return res.status(500).send("error occured")
    }
}
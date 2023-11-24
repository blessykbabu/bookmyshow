import { Router } from "express";

import * as userHandlers from "./request-handlers.js";
// import multer from 'multer'
// import path from 'path'
// const storage =multer.diskStorage({
//     destination:"./files",
//     filename:(req,file,cb)=>{
//     cb(null,file.originalname);
// }})
// const upload=multer({storage:storage});

const router = Router()

router.route("/register").post(userHandlers.register);
router.route("/upload").post(userHandlers.uploadFile)
router.route("/get-file").get(userHandlers.getfile)
router.route("/get-movie").get(userHandlers.getmovie)
// router.route("/login").post(userHandlers.login);

// router.route("/file").post(upload.single("myfile"),(req,res)=>{
//     console.log(req.file);
//     res.json("file stored")
    
// })//myfile is a input filed name
// router.route("/get-file/:file").get((req,res)=>{
//     let fileName=req.params;
//     res.sendFile(path.resolve(`./files/${fileName.file}`));
// })
export default router;
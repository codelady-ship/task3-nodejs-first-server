import { readFileSync, writeFile } from "fs";
//import users from "../data.js"
const usersGetController = (req,res)=>{
    if(req.method === "GET"){
        /*readFile("./db.json","utf-8",(err,data)=>{
         if(err){
             res.write("xeta oldu")
         }else{
             res.write(data)
         }
        res.end();
       })*/
    const content = readFileSync ("./db.json")
    res.write(content)
    res.end();
      //res.write(JSON.stringify(users))  read file evezine yaza bilerik

      //post hisse
      //1.contenti oxyrq json pars
      //2.push edib sonra stringfy
      //3 writeFile edirik 
    }else if(req.method==="POST"){
        const data ={
            id:5,
            user:"sdfghj"
        }
        const content = JSON.parse( readFileSync ("./db.json"))
        content.users.push(data)
        const DatatoJson = JSON.stringify({"users": content.users},null,2)

        writeFile("db.json", DatatoJson, (err) => { 
            const msj = { status: 201, message: "user added succesfully" };
            res.write(JSON.stringify(msj));
            res.end(); 
        });
    } else {
        res.end();
    }
};

export default usersGetController;
const express = require("express")

const mysql=require("mysql")

var db=mysql.createConnection({
    host     : 'b74l2ilqg8dyheq5tdny-mysql.services.clever-cloud.com',
    user     : 'u7pwz0zs80fl7zyr',
    password : 'XIYUjmu9X3shOw1fpcBH',
    database : 'b74l2ilqg8dyheq5tdny'
})

db.connect((err)=>{
    if(err){
        throw err
    }
    console.log("my sql connected")
})
const app=express()


app.get("/createdb",(req,res)=>{
    let sql="CREATE DATABASE b74l2ilqg8dyheq5tdny"
    db.query(sql,(err,result)=>{
        if(err){
            throw err
        }
        res.send("database created....")
    })
})

app.listen("3000",()=>{
    console.log("server started on port 3000");
})
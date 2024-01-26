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

app.get("/createtable",(req,res)=>{
    let sql='CREATE TABLE post(id int AUTO_INCREMENT PRIMARY KEY, title VARCHAR(100), body VARCHAR(200))'
    db.query(sql,(err,result)=>{
        if(err){
            throw err
        }
        res.send("table  created....")
    })

})

app.get("/createpost",(req,res)=>{
    var post  = {title: 'Post four' ,body:"Hello Node js"};
    let query = db.query('INSERT INTO post SET ?', post, function (error, results, fields) {
      if (error) throw error;
      // Neat!
    });
    console.log(query.sql); 
    res.send("post created")

})
//select post

app.get("/getposts",(req,res)=>{
    let sql='SELECT * FROM post'
    let query = db.query(sql, function (error, results) {
        if (error) throw error;
        // Neat!
  
      console.log(results); 
      res.send("Post fetched")
    });
})

app.get("/getpost/:id",(req,res)=>{
    let sql=`SELECT * FROM post WHERE id=${req.params.id}`
    let query = db.query(sql, function (error, results) {
        if (error) throw error;
        // Neat!
  
      console.log(results[0]); 
      res.send(results[0])
    });
})
app.get("/updatepost/:id",(req,res)=>{
   let newTitle="New update title"
    let sql=`UPDATE post SET  title='${newTitle}' WHERE  id=${req.params.id}`
    let query = db.query(sql, function (error, results) {
        if (error) throw error;
        // Neat!
  
      console.log(results); 
      res.send(results[0])
    });
})
app.listen("3000",()=>{
    console.log("server started on port 3000");
})

import express, { response } from "express";
import mysql from 'mysql2';
import bodyparser from 'body-parser';
import cors from 'cors';
 
const app= express()
let jsonparser=bodyparser.json();
app.use(express.json())
app.use(cors())
const db=mysql.createPool({
    host:'localhost',
    user: 'root',
    password : '',
    database: 'webprog',
}).promise();

app.get('/test',async (req,res)=>{
    console.log("hello there")
})

app.get('/scrap', async (req,res)=>{
    const [rows,fields]= await db.query('SELECT * FROM `lethalitems`')
    res.send(rows)
})

app.post('/scrap',jsonparser, async (req,res)=>{
    try{
        let userdata = [req.body.Type, req.body.Price,req.body.Is5g]
        const insert = await db.query('INSERT INTO lethalitems(ScrapName,MiValue,MaValue,Value,Weight,Conductivity,IsTwoHanded) VALUES (?,?,?,?,?,?,?)',[userdata[0],userdata[1],userdata[2],userdata[3],userdata[4],userdata[5],userdata[6]]);
        res.status(201).send("Sikeres a szkrep felvétele!");
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).send('Szerveroldali hiba');
    }
})

 
 
 
 
app.listen(3000);
 
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app= express()
const port=3000
const routerStudent=require('./routes/student.routes')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api/v1/student',routerStudent)
app.listen(port,()=>{
    console.log(`server is running on http://localhost/${port}`);
})
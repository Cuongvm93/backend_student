const mysql2=require('mysql2')
const pool=mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'student_03'
})
const db=pool.promise()
module.exports=db
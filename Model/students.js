const db=require('../utils/db')
module.exports.getAllStd=(min,max)=>{
    return db.execute(`select * from student order by Age desc limit ${min},${max}`)
}
module.exports.addStudent=(msv,name,age,status)=>{
    let arr=[msv,name,age,status]
    return db.execute('insert into student set msv=?, Name=?, Age=?, Status=?',arr)
}
module.exports.updateStudent=(id,msv,name,age,status)=>{
    return db.execute('update student set msv=?, Name=?, Age=?, Status=? where idstudent=?',[msv,name,age,status,id])
}
module.exports.deleteOne=(id)=>{
    return db.execute(`delete from student where idstudent='${id}'`)
}

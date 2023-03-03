const db=require('../utils/db')
module.exports.search=(name)=>{
    return db.execute('select * from student where Name=?',[name])
}
const getDb = require('../db').getDb;

exports.getStudents = (req, res, next) => {
  const db = getDb();
   
  const sql = 'SELECT * FROM students';
  db.query(sql, (err, result)=> {
    if(err) {
      console.log(err);
    }
    console.log(result);
    res.json(result);
  });
}
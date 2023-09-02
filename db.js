const mysql = require('mysql');

let _db;

const connectDatabase = (cb) => {
  const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '12345',
    database:'school'
  });
  _db = db;
  db.connect((err) => {
    if (err) {
      throw err
    } else {
      console.log('connected');
    }
  });
};

const getDb = () => {
  if(_db) {
    return _db
  } else {
    console.log('database not connect');
  }
};

exports.connectDatabase = connectDatabase;
exports.getDb = getDb;
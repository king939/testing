const express = require('express');
const connectDatabase = require('./db').connectDatabase;
const getDb = require('./db').getDb;
const cors = require('cors');
const studentRouter = require('./routes/studentsRoute');

const app = express();
app.use(cors());
connectDatabase();

app.use(studentRouter);

app.use('/', (req, res) => {
  res.send('Hello world');
});


//const db = getDb();

// let sql = 'CREATE DATABASE school';
// db.query(sql, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('database created');
// });

// let sql = 'CREATE TABLE students(id int AUTO_INCREMENT, name VARCHAR(255), age FLOAT, PRIMARY KEY(id))';
// db.query(sql, (err) => {
//   if(err) {
//     console.log(err);
//   }
//   console.log('table created');
// });

// let sql = `INSERT INTO students(name, age) VALUES('Tim', 25), ('Ming', 20), ('Kyle', 22), ('Jason', 24);`
// db.query(sql, (err) => {
//   if(err) {
//     console.log(err);
//   }
//   console.log('student added');
// });

app.listen(8000);
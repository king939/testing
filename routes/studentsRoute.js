const express = require('express');
const studentsController = require('../controllers/studentController');
const router = express.Router();

router.get('/students', studentsController.getStudents);

module.exports = router;
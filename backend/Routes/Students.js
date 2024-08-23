const express = require('express');
const router = express.Router();
const { createStudent, getAllStudents, uploadProfileImage ,getEnrolledCourses, getStudentById,deleteAccount} = require('../Controllers/Students.js');
const multer = require('multer');
const { storage } = require('../Cloudinary/Cloudinary.js');
const upload = multer({ storage });

router.get('/allstudents', getAllStudents);
router.post('/createstudent', createStudent);
router.post('/:id/upload-image', upload.single('image'), uploadProfileImage);
router.get('/:id', getStudentById);
router.get('/:studentId/enrolledCourses', getEnrolledCourses);
router.delete('/deleteAccount/:studentId', );






module.exports = router;

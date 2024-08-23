const express = require('express');
const router = express.Router();
const {getCourseById,createCourse,getAllCourses,uploadCourseImage} = require('../Controllers/Courses');
const multer = require('multer');
const { storage } = require('../Cloudinary/Cloudinary.js');
const upload = multer({ storage });




router.post('/createCourse', createCourse);
router.get('/getAllCourses', getAllCourses);
router.get('/course/:courseId',getCourseById); 
router.post('/:id/upload-image', upload.single('file'), uploadCourseImage);

module.exports = router;

const Course = require('../DataBase/Models/Courses');
const {cloudinary} = require('../Cloudinary/Cloudinary.js');

async function createCourse(req, res) {
    try {
        const newCourse = await Course.create({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            content: req.body.content,
            note: req.body.note,
            image: req.body.image,
            instructorId: req.body.instructorId 
        });
        res.status(201).json(newCourse);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
}

async function getAllCourses(req, res) {
    try {
        const courses = await Course.findAll();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getCourseById= async(req,res)=>{
    try {
        const course = await Course.findByPk(req.params.courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}


  const uploadCourseImage = async (req, res) => {
    const { id } = req.params;
    try {
        const filePath = req.file.path;
        const result = await cloudinary.uploader.upload(filePath);
        const course = await Course.findByPk(id);
        if (!course) {
            return res.status(404).json({ message: ' not found' });
        }

        course.image = result.secure_url;
        await course.save();

        res.status(200).json({ secure_url: result.secure_url });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
    uploadCourseImage
};

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

cloudinary.config({
  cloud_name: 'dh3m2vb3x',
  api_key: '181472367859474',
  api_secret: 'Em-CVTOvlrLuCyaeahxrSHnN9_I'
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'instructors',  
    allowed_formats: ['jpg', 'jpeg', 'png']
  }
});

module.exports = { cloudinary, storage };

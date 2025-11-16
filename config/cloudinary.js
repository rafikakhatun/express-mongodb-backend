const cloudinary = require('cloudinary').v2
const multer  = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API-KEY,
    api_secret: CLOUDINARY_API_SECRET,
})


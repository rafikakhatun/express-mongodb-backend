const express = require('express');
const router = express.Router();
const {
    createUser,
    getAllUsers,
    deleteUser,
    UpdateUserStatus,
    loginUser,
    verifyOTP,
} = require('../controllers/user.controller');
const upload = require('../config/cloudinary');

// @route GET /api/users/all
router.get('/all', getAllUsers);
// @route POST /api/users/create
router.post('/create',upload.single('profileImage'), createUser);

// @route DELETE /api/users/delete/:id
router.delete('/:id',deleteUser)
// route active and inactive
router.patch('/:id/status',UpdateUserStatus,) //http://localhost:5001/api/users/id/status

router.post('/login', loginUser); // ধাপ ১: ইমেইল পাসওয়ার্ড দিয়ে OTP রিকোয়েস্ট
router.post('/login/verify', verifyOTP); // ধাপ ২: OTP দিয়ে টোকেন রিসিভ






module.exports = router;


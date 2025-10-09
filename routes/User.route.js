const express = require('express');
const router = express.Router();
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
} = require('../controllers/user.controller');

// @route GET /api/users/all
router.get('/all', getAllUsers);
// @route POST /api/users/create
router.post('/create', createUser);

// @route GET /api/users/details/:id
router.put('/update/:id', updateUser);

// @route DELETE /api/users/delete/:id
router.delete('/delete/:id', deleteUser);


module.exports = router;


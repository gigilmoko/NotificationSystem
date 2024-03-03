const express = require('express');
const router = express.Router();
const upload = require("../utils/multer");
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

const { registerUser, loginUser, logout, forgotPassword,
      resetPassword, getUserProfile, updatePassword, updateProfile,
      allUsers, getUserDetails, deleteUser, updateUser, google } = require('../controllers/authController');

router.post('/register', upload.single('avatar'), registerUser);
router.post('/login', loginUser);
// router.post("/google", google);
router.get('/logout', logout);
router.post('/password/forgot', forgotPassword);
router.put('/password/reset/:token', resetPassword);
router.get('/me', isAuthenticatedUser, getUserProfile);
// router.put('/password/update', isAuthenticatedUser, updatePassword);
router.put('/password/update', updatePassword);
router.put('/me/update', isAuthenticatedUser, upload.single("avatar"), updateProfile);
router.get('/admin/users', allUsers);
router.route('/admin/user/:id').get(isAuthenticatedUser, authorizeRoles('admin'), getUserDetails).delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser).put(isAuthenticatedUser, authorizeRoles('admin'), updateUser)

module.exports = router;
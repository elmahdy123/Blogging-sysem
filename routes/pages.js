
const express = require("express");
const authController = require("../controllers/auth");
const logoutController = require("../controllers/logout");
const router = express.Router();
// router.get('/',authController.isLoggedIn, (req, res) => {
//     res.render('main')
// });

router.get('/', (req, res) => {
    res.render('main')
});
router.get('/register', (req, res) => {
    res.render('register')
});
router.get('/login', (req, res) => {
    res.render('login')
});
router.get('/profile', authController.isLoggedIn, (req, res) => {
    if (req.user) {
        res.render('profile')
    } else {
        res.render('login')
    }
})
router.get('/logout', logoutController);

module.exports = router;





// const mysql = require("mysql");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const { promisify } = require("util");
const cookie = require("cookie");


const logout = (req, res) => {
    res.cookie('userSave', 'logout', {
        expires: new Date(Date.now() + 2 * 1000),
        httpOnly: true
    });
    res.status(200).redirect("/profile");

    // res.clearCookie('user loged out')
    // res.redirect("/");
}

module.exports = logout;
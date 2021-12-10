const router = require('express').Router();
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const { a, b } = req.body;
    console.log(a);
    res.json(a)
  })

module.exports = router;
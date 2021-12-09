const router = require('express').Router();
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/')

  .get((req, res) => {
    res.render('authentication');
  })

  .post(async (req, res) => {
    const name = req.body.name;
    const { password } = req.body;
    console.log(req.body);
    let newUser;
    const checkUser = await User.findOne({
      where: {
        [Op.or]: [
          { name },
          { password },
        ],
      },
    });
    console.log(name)
    console.log(checkUser.name)
    if (checkUser.name === name && checkUser.password === password) {
      req.session.user = {
        id: checkUser.id,
        name: checkUser.name,
        email: checkUser.email,
        signedUp: true,
      };
      res.json({ createUser: true })
    } else {
      res.json({ createUser: false, message: 'Такого пользователя не существует' });
    }
  });

module.exports = router;
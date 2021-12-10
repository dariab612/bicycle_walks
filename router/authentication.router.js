const router = require('express').Router();
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/')

  .get((req, res) => {
    res.render('authentication');
  })

  .post(async (req, res) => {
    const { email, password } = req.body;
    // console.log(req.body);
    const checkUser = await User.findOne({
      where: {
         email,
      },
    });
    if (!checkUser) {
      res.status(401).json({
        message: 'Такой пользователь не существует!',
        authUser: false,
      });
      return;
    }
    const isCorrectPassword = await bcrypt.compare(password, checkUser.password);
    if (!isCorrectPassword) {
      res.status(401).json({
        message: 'Пароль введен неправильно!',
        authUser: false,
      })
      return;
    }
        req.session.user = {
        id: checkUser.id,
        name: checkUser.name,
        email: checkUser.email,
        signedUp: true,
      };
      res.json({
        message: 'Авторизация прошла успешна!',
        authUser: true,
      })
  });

module.exports = router;

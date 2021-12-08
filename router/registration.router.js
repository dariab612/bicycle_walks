const router = require('express').Router();
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/')

  .get((req, res) => {
    res.render('registration');
  })

  .post(async (req, res) => {
    const name = req.body.username;
    const { email, password } = req.body;
    console.log(req.body);
    let newUser;
    const checkUser = await User.findOne({
      where: {
        [Op.or]: [
          { name },
          { email },
        ],
      },
    });
    if (!checkUser) {
      const hashPassword = await bcrypt.hash(password, 10);
      newUser = await User.create({
        name,
        email,
        password: hashPassword,
      });
      req.session.user = {
        id: newUser.id,
        name: newUser.name,
        email,
        signedUp: true,
      };
    } else {
      res.json({ createUser: false, message: 'Такой велосипедист уже зарегистрирован' });

    }
    if (newUser) {
      res.json({ createUser: true, message: 'Успешная регистрация' });
    } else {
      res.json({ createUser: false, message: 'Не зарегистрирован!' });
    }
  });

module.exports = router;

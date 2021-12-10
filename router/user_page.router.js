const router = require('express').Router();
const { Route } = require('../db/models');

router.get('/', async (req, res) => {
  console.log(123);
  const id = req.session.user.id
  const route = await Route.findAll({
    where: {
      userID: id
    }

  });
  console.log(route);
  res.render('user_page', { route });
})

module.exports = router;

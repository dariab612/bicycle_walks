const router = require('express').Router();
const { Route } = require('../db/models');

router.get('/', async (req, res) => {
  const id = req.session.user.id

  const route = await Route.findAll({
    where: {
      userID: id
    }

  });
 // ymaps.ready(init(route.coordinates_1, route.coordinates_2))
  res.render('user_page', { route });
})

module.exports = router;

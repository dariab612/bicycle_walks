const router = require('express').Router();
const { Route } = require('../db/models');
router.get('/', async (req, res) => {
  const id = req.session.id
  const route = await Route.findAll({
    where: {
      userId: id
    }
  });
  res.render('user_page', route);
})
module.exports = router;

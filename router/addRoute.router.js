const router = require('express').Router()
const { Route } = require('../db/models')
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
  console.log('Work!!!');

  const id = req.session.user.id;
  const checkRoute = await Route.findOne({ where: { id } });

  res.json({ checkRoute }); 
})


module.exports = router;

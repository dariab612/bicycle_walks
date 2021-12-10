const router = require('express').Router();
const { Route } = require('../db/models');

// router.route('/');

router.delete('/delete/:id', async (req, res, next) => {
  console.log(req.params);
  await Route.destroy({ where: { id: req.params.id } });
  // return res.json({deleted: true});
  // res.send('есть запрос на удаление');
  res.end();
});

module.exports = router;

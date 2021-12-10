const router = require('express').Router();
const { Route } = require('../db/models');



router.route('/')
  .get((req, res) => {
    res.render('changeForm');
  })
  .put(async (req, res) => {

    const routeId = req.params.id;

    const name = req.body.routeName;
    const desc = req.body.routeDesc;
    const cord = req.body.routeCord;

    try {
      await Route.update(
        {
          name,
          desc,
          cord
        },
        {
          where: {
            id: routeId
          }
        }
      )
      res.json({ message: 'All is OK', changeRoute: true });
    }
    catch {
      res.json({ message: 'Route edition failed', changeRoute: false });
    }


  })

module.exports = router;

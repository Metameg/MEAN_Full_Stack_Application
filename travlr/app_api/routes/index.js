var express = require('express');
var router = express.Router();

const tripsController = require('../controllers/trips');
/* GET home page. */
router
    .route('/trips')
    .get(tripsController.tripsList);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);
module.exports = router;
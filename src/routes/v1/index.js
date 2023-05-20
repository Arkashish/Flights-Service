const express = require('express');
const app = express();
const { InfoController } = require('../../controllers')

const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes')
const airportRoutes = require('./airport-routes');
const flightRoutes = require('./flight-routes');

const router = express.Router();

// router.get('/info',(req,res)=>{
//     return res.json({msg:'ok'})
// });

router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityRoutes);
router.use('/airports',airportRoutes);
router.use('/flights',flightRoutes)

router.get('/info', InfoController.info);

module.exports = router;
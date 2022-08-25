// init express
const epxress = require('express');

// controller
const {
  homepageshow,
  aboutpageshow,
  contactpageshow,
  pricepageshow,
  projectpageshow,
  servicepageshow,
  teampageshow,
  testimonialpageshow,
} = require('../controllers/pagecontroler');

// init router
const router = epxress.Router();

// routes
router.get('/', homepageshow);
router.get('/about', aboutpageshow);
router.get('/contact', contactpageshow);
router.get('/price', pricepageshow);
router.get('/project', projectpageshow);
router.get('/service', servicepageshow);
router.get('/team', teampageshow);
router.get('/testimonial', testimonialpageshow);

// export router
module.exports = router;

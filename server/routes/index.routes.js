const router = require('express').Router();

const categoryRoutes = require('./api/categories.routes.js');
const questionRoutes = require('./api/questions.rout.js');

router.use('/categories', categoryRoutes);
router.use('/questions', questionRoutes);

module.exports = router;

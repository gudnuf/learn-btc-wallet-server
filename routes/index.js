const router = require('express').Router();


// const authRoutes = require('./auth');
//  router.use('/auth', authRoutes);

const keyRoutes = require('./keys');
 router.use('/api/keys', keyRoutes);

module.exports = router;
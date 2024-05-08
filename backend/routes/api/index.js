const router = require('express').Router();
const contactUsRouter = require('./contact-us.js');

router.use('/contact-us', contactUsRouter);

// test route
// router.post('/test', function (req, res) {
//     res.json({ requestBody: req.body });
// });

module.exports = router;

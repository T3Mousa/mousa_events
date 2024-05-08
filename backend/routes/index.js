const express = require('express');
const apiRouter = require('./api');

const router = express.Router();

router.use('/api', apiRouter)

// Add a XSRF-TOKEN cookie in development
// if (process.env.NODE_ENV !== 'production') {
//     router.get('/api/csrf/restore', (req, res) => {
//         res.cookie('XSRF-TOKEN', req.csrfToken());
//         return res.json({});
//     });
// }

// test route
// router.get('/hello/world', function (req, res) {
//     res.cookie('XSRF-TOKEN', req.csrfToken());
//     res.send('Hello World!');
// });

module.exports = router;

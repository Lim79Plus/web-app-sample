var express = require('express');
var router = express.Router();

const fs = require('fs');
const tweets = JSON.parse(fs.readFileSync('tweets.json'));

router.get('/msg/max', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({max:tweets.length}));
});

router.get('/msg', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(tweets));
});

router.get('/msg/:from(\\d+)-:to(\\d+)', function (req, res, next) {
    const minIndex = 0;
    const maxIndex = tweets.length;

    let from = parseInt(req.params.from) - 1;
    let to = parseInt(req.params.to);
    from = Math.min(from, maxIndex);
    from = Math.max(from, minIndex);
    to = Math.min(to, maxIndex);
    to = Math.max(to, minIndex);
    from = Math.min(from, to);

    const result = [...tweets].reverse().splice(from, to - from);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
});

module.exports = router;

const express = require('express');
const request = require('request');
const router = express.Router();
const postURI = 'https://jsonplaceholder.typicode.com/comments';

const getData = () => {
    return new Promise((resolve, reject) => {
        request(postURI, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve(JSON.parse(body));
            } else {
                reject(error);
            }
        });
    });
};

// @route   GET api/post-list
// @desc   get all post
// @access   Public
router.get('/post-list', (req, res) => {
    try {
        getData()
            .then((data) => {
                res.json({ count: data.length, data });
            })
            .catch((err) => {
                res.status(500).json({ error: err });
            });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;

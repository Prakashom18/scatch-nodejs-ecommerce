const express = require('express');
const router = express.Router();
const ownerModel = require('../models/ownerModel');

router.get("/", function(req, res) {
    res.send("hey");
});

if (process.env.NODE_ENV === "development") {
    router.post('/create', async (req, res) => {
        // Check request body
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).send("Request body is missing");
        }

        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res.status(503).send('You don\'t have permission');
        }

        let { fullname, email, password } = req.body;
        console.log(req.body);

        // Uncomment to create owner
        // let createdOwner = await ownerModel.create({ fullname, email, password });

        res.status(201).send("We can create a new owner");
    });
}

module.exports = router;

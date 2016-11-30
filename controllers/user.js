// Load required packages
var User = require('../models/user');

// Create endpoint /api/user for POST
exports.postUsers = function(req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(function(err) {
        if (err)
            return res.send(err);

        res.json({ message: 'New User '+req.body.username+' added successfully!' });
    });
};

// Create endpoint /api/user for GET
exports.getAllUsers = function(req, res) {
    User.find(function(err, users) {
        if (err)
            return res.send(err);

        res.json(users);
    });
};
// Create endpoint /api/user/:id for GET
exports.getUserById = function (req, res) {
    User.findOne({_id:req.params.id},function(err, user) {
        if(err)
            res.send(err);
        res.json(user);
    });
}

// Create endpoint /api/user/:id for PUT
exports.putUserById = function (req, res) {
    User.findOne({_id:req.params.id},function(err,user){
        if(err)
            res.send(err);
        for(prop in req.body){
            user[prop]=req.body[prop];
        }
        // save the user
        user.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'User '+req.params.id+' updated!' });
        });
    });
}

// Create endpoint /api/user/:id for DELETE
exports.deleteUserById = function (req, res) {
    User.remove({_id: req.params.id}, function(err, user) {
        if (err)
            res.send(err);

        res.json({ message: 'User '+req.params.id+' Successfully deleted!' });
    });
}
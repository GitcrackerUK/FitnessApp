const router = require('express').Router();  //es5 syntax
const User = require('../models/user.model.js');


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users)
        )
        .catch(err => res.status(400).json('Error:' + err))
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('error:' + err))
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error:' + err))
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => res.json("User deleted"))
})


module.exports = router;
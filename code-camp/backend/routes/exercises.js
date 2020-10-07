const router = require('express').Router(); //es5 syntax
const Exercise = require('../models/exercise.model.js');

router.route('/').get((req, res) => {
    Exercise.find()
        .then((exercises) => {
            
            return res.json(exercises)})
        .catch(err => res.status(400).json('Error:' + err))
});

// This is creation of a object which will be send to database and stored there. 
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error:' + err));
});


router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error:' + err))
});

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(exercise => res.json("Exercise deleted"))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {

            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json('Exercise updated!!'))
                .catch(err => res.status(400).json('Error: ' + err))

        })
        .catch(err => res.status(400).json('Error: ' + err))
});



module.exports = router;
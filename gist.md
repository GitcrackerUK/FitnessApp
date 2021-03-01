# Mongoose

To get all elements from MongoDb collection

```
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users)
        )
        .catch(err => res.status(400).json('Error:' + err))
});
```

To get single element from MongoDb collections

```
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error:' + err))
});
```

To add element to MongoDb collection

```
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('error:' + err))
});
```

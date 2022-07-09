const router = require('express').Router();

const { User } = require('../../models');

// get all users => http://localhost:3001/api/users
router.get('/', function (req, res) {
    console.log(req.session)
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then((dbUserData) => {
            console.log(dbUserData);
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });
});

// get ONE user => http://localhost:3001/api/users/login
router.post('/login', function (req, res) {
    // console.log(req.body)
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then((dbUserData) => {
            console.log(dbUserData);
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this email' });
                return;
            }

            const validPassword = dbUserData.checkPassword(req.body.password);

            if (!validPassword) {
                res.status(400).json({ message: 'Incorrect password!' });
                return;
            }

            req.session.save(() => {
                req.session.userId = dbUserData.id;
                req.session.email = dbUserData.email;
                req.session.loggedIn = true;

                res.json({ user: dbUserData, message: 'You are now logged in!' });
            })

        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

// create one user => http://localhost:3001/api/users
// later will rename to signup/register
router.post('/', function (req, res) {
    // console.log(req.body)
    User.create(req.body)
        .then((dbUserData) => {
            console.log(dbUserData);
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
})

// update user => http://localhost:3001/api/users/:id
router.put('/:id', function (req, res) {
    console.log(req.body);
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then((dbUserData) => {
            console.log(dbUserData);
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
})

// delete user => http://localhost:3001/api/users/:id
router.delete('/:id', function (req, res) {
    // console.log(req.body);
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then((dbUserData) => {
            console.log(dbUserData);
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;
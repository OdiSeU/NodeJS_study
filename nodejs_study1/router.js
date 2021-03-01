const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(`access ${req.url}`);
});

const mongoose = require('mongoose');
const DB_NAME = 'mongodb', DB_PWD = 'dilab';
const URI = `mongodb+srv://odiseu:${DB_PWD}@odiseu.lk7jw.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("Connected to MonoDB");
    })
    .catch((err) => {
        console.log(err);
    });

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    date: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);

const me = new User({
    username: 'Odiseu',
    password: '1234',
});

me.save()
    .then(() => {
        console.log(me);
    })
    .catch((err) => {
        console.log('Error : ' + err);
    });

mongoose.disconnect();


module.exports = router;
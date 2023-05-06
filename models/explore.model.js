const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exploreSchema = new Schema({
    photoUrl: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    imageLink : {
        type: String,
    },
});

const Explore = mongoose.model('Explore', exploreSchema);

module.exports = Explore;

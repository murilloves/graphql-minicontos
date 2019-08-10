const mongoose = require('mongoose');

const TaleSchema = new mongoose.Schema({
    title: String,
    text: String
});

module.exports = mongoose.model('Tale', TaleSchema);

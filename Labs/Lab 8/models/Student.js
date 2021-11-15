const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    firstName: String,
    lastName: String
});

module.exports = mongoose.model("Student", studentSchema)
var mongoose = require("mongoose");

var GuitarSchema = new mongoose.Schema({
    name: String,
    type: String,
    brand: String,
    gebruiker: {type: mongoose.Schema.Types.ObjectId, ref:"Gebruiker"}
});

mongoose.model("Guitar", GuitarSchema);
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: String },
    groups: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "group",
            required: true
        }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model("user", userSchema);

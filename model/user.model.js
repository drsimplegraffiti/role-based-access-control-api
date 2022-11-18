const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20

    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min: 6,
        max: 20
    },
    role: {
        type: String,
        default: "user",
        enum: ["user","supervisor", "admin"]

    },
}, {
    timestamps: true
})
    
module.exports = mongoose.model("User", userSchema)
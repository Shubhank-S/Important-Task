const mongoose = require('require')

// Schema

const TodoSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
})

module.export = mongoose.model('todo', TodoSchema)
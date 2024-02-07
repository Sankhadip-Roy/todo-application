const mongoose = require("mongoose");
// have to use .env to hide this
mongoose.connect("mongodb+srv://sankhadiproy23:nqou7frIgFrXYJ71@cluster0.czznsuk.mongodb.net/?retryWrites=true&w=majority")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})
const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}

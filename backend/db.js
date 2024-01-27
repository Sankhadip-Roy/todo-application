const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sankhadiproy23:nqou7frIgFrXYJ71@cluster0.czznsuk.mongodb.net/?retryWrites=true&w=majority")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}

const Todo = require('../models/Todo')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    add: async (req, res)=>{
        res.render('add.ejs')
    },
    edit: async (req, res) => {
        try {
          const item = await Todo.findById(req.params.id);
          res.render("edit.ejs", { item: item, user: req.user });
        } catch (err) {
          console.log(err);
        }
    },
    update: async (req, res) => {
        try {
          await Todo.findOneAndUpdate(
            { _id: req.params.id }, req.body
          );
          console.log('Updated Backstock Item');
          res.redirect(`/todos`);
        } catch (err) {
          console.log(err);
        }
    },
    createTodo: async (req, res)=>{
        try{
            await Todo.create({
                category: req.body.category, 
                brand: req.body.brand,
                description: req.body.description,
                storageLocation: req.body.storageLocation,
                quantity: req.body.quantity,
                idealQuantity: req.body.idealQuantity,
                size: req.body.size,
                expirationDate: req.body.expirationDate,
                comments: req.body.comments,
                userId: req.user.id})
            console.log('Backstock item has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res) => {
        try {
          // Find item by id
          let post = await Todo.findById({ _id: req.params.id });
          // Delete item from db
          await Todo.remove({ _id: req.params.id });
          console.log("Deleted Backstock item");
          res.redirect("/todos");
        } catch (err) {
          res.redirect("/todos");
        }
    },
};
  
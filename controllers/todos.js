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
    editTodo: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({
                category: req.body.category, 
                brand: req.body.brand,
                description: req.body.description,
                storageLocation: req.body.storageLocation,
                quantity: req.body.quantity,
                idealQuantity: req.body.idealQuantity,
                size: req.body.size,
                expirationDate: req.body.expirationDate,
                comments: req.body.comments,
                userId: req.user.id
            })
            console.log('Marked Complete')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    // edit: async (req, res)=>{
    //     try{
    //         const editItem = await Todo.find({itemId:req.params.id})
    //         res.render('edit.ejs', {
    //             category: req.body.category, 
    //             brand: req.body.brand,
    //             description: req.body.description,
    //             storageLocation: req.body.storageLocation,
    //             quantity: req.body.quantity,
    //             idealQuantity: req.body.idealQuantity,
    //             size: req.body.size,
    //             expirationDate: req.body.expirationDate,
    //             userId: req.user.id})
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
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
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    // deleteTodo: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
    //         console.log('Deleted Todo')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    deleteTodo: async (req, res) => {
        try {
          // Find post by id
          let post = await Todo.findById({ _id: req.params.id });
          await Todo.remove({ _id: req.params.id });
          console.log("Deleted Item");
          res.redirect("/todos");
        } catch (err) {
          res.redirect("/todos");
        }
    },
};
  
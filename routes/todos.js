const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)

router.get('/add', ensureAuth, todosController.add)

router.get('/edit/:id', ensureAuth, todosController.edit)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('edit/:id/deleteTodo', todosController.deleteTodo)

module.exports = router
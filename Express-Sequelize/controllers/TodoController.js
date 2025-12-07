class TodoController {

    static getTodos(req, res) {
        res.send('Page Todos Utama')
    }

    static addTodo(req, res) {
        res.send('Page Todo Add')
    }

}

module.exports = TodoController
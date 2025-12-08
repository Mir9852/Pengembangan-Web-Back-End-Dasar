class TodoController {

    static getTodos(req, res) {
        const arrObjects = [
            {
                id: 1,
                name: 'Laptop'
            },
            {
                id: 2,
                name: 'mouse'
            }
        ]
        res.json(arrObjects)
    }

    static addTodo(req, res) {
        res.json({
            message: 'Page Todos Add'
        })
    }

}

module.exports = TodoController
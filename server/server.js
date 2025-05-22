const app = require('./server-config.js');
const routes = require('./server-routes.js');

const port = process.env.PORT || 5000;

// USER
app.get('/user', routes.getAllUsers);
app.get('/user/:id', routes.getUser);

app.post('/user', routes.postUser);

// TO DO
app.get('/', routes.getAllTodos);
app.get('/:id', routes.getTodo);

app.post('/', routes.postTodo);
app.patch('/:id', routes.patchTodo);

app.delete('/', routes.deleteAllTodos);
app.delete('/:id', routes.deleteTodo);


if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;
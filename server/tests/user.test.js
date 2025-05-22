/*
    Tests taken from the todo-backend spec located at:
    https://github.com/TodoBackend/todo-backend-js-spec/blob/master/js/specs.js
    
    And transcribed from Mocha/Chai to Jest with async/await/promises and other ES6+ features
    for ease of extension of this project (any additional testing).
*/
process.env.NODE_ENV = 'test';
const _ = require("lodash");
const url = require('url');
const request = require('./util/httpRequests.js');

// Relative paths are used for supertest in the util file.
const urlFromTodo = todo => new URL(todo.url)["pathname"];
const getRoot = _ => request.get('/');
const getBody = response => response.body;

describe(`User-Backend API residing at http://localhost:${process.env.PORT}`, () => {
    // create user
    describe("store new user", () => {
        beforeEach(async () => {
            return await request.delete("/");
        });

        it("check the result of created user", async () => {
            const starting = { name: "Person 2" };
            const newTodo = await request.post('/user', starting).then(getBody);
            expect(newTodo).toMatchObject(expect.objectContaining(starting));
        });
    });




})
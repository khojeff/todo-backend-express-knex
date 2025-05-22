
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, title: 'title1', order: 1, completed: false},
        {id: 2, title: 'title2', order: 2, completed: true},
        {id: 3, title: 'title3', order: 3, completed: false},
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Admin'},
        {id: 2, name: 'People 1'},
        {id: 3, name: 'Jeff'},
      ]);
    });
};

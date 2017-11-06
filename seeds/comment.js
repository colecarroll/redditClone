
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1, 
          name: 'Pete',
          content: 'We should have never signed him',
          link_id: 1
        },
        {
          id: 2, 
          name: 'Billy',
          content: 'Gruden is never coming back to Tampa',
          link_id: 2
        },
        {
          id: 3,
          name: 'Joe',
          content: 'I would love Gruden back.',
          link_id: 2
        }
      ]);
    });
};

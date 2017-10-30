
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('comments', (table)=> {
      table.increments().primary
      table.string('name')
      table.text('content')
      table.integer('link_id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('comments')
  ])
};

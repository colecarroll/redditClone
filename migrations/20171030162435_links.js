
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('links', (table) => {
      table.increments().primary
      table.string('linkName')
      table.string('url')
      table.integer('votes')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('links')
  ])
};

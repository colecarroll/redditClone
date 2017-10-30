
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('links').del()
    .then(function () {
      // Inserts seed entries
      return knex('links').insert([
        {
          id: 1, 
          linkName: 'Packers TE situation uncertain',
          url: 'https://cheeseheadtv.com/blog/packers-once-again-facing-uncertainty-at-te-position-745',
          votes: 0
        },
        {
          id: 2, 
          linkName: 'Bucs Fans Want Jon Gruden',
          url: 'http://profootballtalk.nbcsports.com/2017/10/30/bucs-fans-begin-to-clamor-for-jon-gruden/',
          votes: 1
        }
      ]);
    });
};

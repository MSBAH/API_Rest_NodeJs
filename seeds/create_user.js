
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      const user = [{
          name: 'bah',
          email: 'bah@gmail.fr',
          password: 'bah',
          create_at: new Date()
      }, {
          name: 'beh',
          email: 'beh@gmail.fr',
          password: 'beh',
          create_at: new Date()
      }];
      return knex('users').insert(user)
          .then(function(){
              console.log('données inserées dans la table users')
          });
    });
};

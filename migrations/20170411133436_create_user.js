const userSchema = require('../schema/users')
exports.up = function(knex, Promise) {
    //return Promise.all([
       return knex.schema.createTable('users',userSchema)
          .then(function () {
              console.log('la table users est creée!');
          })
    //]);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users',userSchema)
      .then(function () {
          console.log('la table users est supprimée!');
      });
};

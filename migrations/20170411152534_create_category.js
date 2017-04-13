const categorySchema = require('../schema/categories');
exports.up = function(knex, Promise) {
    return knex.schema.createTable('categories',categorySchema)
        .then(function () {
            console.log('la table categories est creée!');
        })
};


exports.down = function(knex, Promise) {
    return knex.schema.dropTable('categories',categorySchema)
        .then(function () {
            console.log('la table categories est supprimée!');
        })
};

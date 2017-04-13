const tagSchema = require('../schema/tag');
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tags',tagSchema)
        .then(function () {
            console.log('la table tag est creée!');
        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tags',tagSchema)
        .then(function () {
            console.log('la table tag est supprimée!');
        })
};

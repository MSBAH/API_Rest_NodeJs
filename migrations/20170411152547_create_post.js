const postSchema = require('../schema/post');
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts',postSchema)
        .then(function () {
            console.log('la table post est creée!');
        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('post',postSchema)
        .then(function () {
            console.log('la table post est supprimée!');
        })
};
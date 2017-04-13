const postTagSchema = require('../schema/post_tag');
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts_tags',postTagSchema)
        .then(function () {
            console.log('la table posts_tags est creée!');
        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts_tags',postTagSchema)
        .then(function () {
            console.log('la table posts_tags est supprimée!');
        })
};
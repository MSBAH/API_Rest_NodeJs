var postTagSchema = function (t) {
    t.increments().primary().notNull();
    t.integer('tag_id')
        .unsigned()
        .references('id')
        .inTable('tags');
    t.integer('post_id')
        .unsigned()
        .references('id')
        .inTable('posts');
};
module.exports=postTagSchema;
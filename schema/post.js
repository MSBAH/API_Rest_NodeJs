var postSchema = function (t) {
    t.increments().primary().notNull();
    t.string('titre');
    t.string('slug');
    t.text('html');
    t.dateTime('create_at').notNull();
    t.dateTime('update_at').nullable();
    t.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users');
    t.integer('categorie_id')
        .unsigned()
        .references('id')
        .inTable('categories');
};
module.exports=postSchema;
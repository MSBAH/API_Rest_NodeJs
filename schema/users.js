var userSchema = function (t) {
    t.increments().unsigned().primary();
    t.string('name',100).notNull();
    t.string('email', 128).notNull();
    t.string('role',50).defaultTo('admin').notNull();
    t.string('password',50).notNull();
    t.dateTime('create_at').notNull();
    t.dateTime('update_at').nullable();
    //t.timestamps();
    /*t.increments().primary();
    t.string('title');
    t.integer('year');
    t.integer('director_id').references('directors.id');
    t.timestamps();*/
};
module.exports=userSchema;
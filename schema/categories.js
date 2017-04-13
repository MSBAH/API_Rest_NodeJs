var categorySchema = function (t) {
    t.increments().primary();
    t.string('name',125).notNull();
    t.dateTime('create_at').notNull();
    t.dateTime('update_at').nullable();
};
module.exports=categorySchema;
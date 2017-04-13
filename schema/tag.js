var tagSchema = function (t) {
    t.increments().primary();
    t.string('slug',125).notNull();
    t.string('name',125).notNull();
};
module.exports=tagSchema;
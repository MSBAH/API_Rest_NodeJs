const knex = require('../db/db_connect');
const userModel = {
    getAllUsers: function(){
       return knex('users')
            .select();
    },
    getUserById: function(id){
        return knex('users')
            .where('id',id);
    },
    valideUser:function(user){
       return typeof user.name=='string' &&
               user.email.trim()==''&&
               typeof user.email=='string';
    },
    addUser:function(user){
        const utilisateur = {
            name:user.name,
            email:user.email,
            password:user.password,
            create_at: new Date()
        };
        return knex('users').insert(utilisateur);
    },
    updateUsers:function(id,user){
        const utilisateur = {
            name:user.name,
            email:user.email,
            password:user.password,
            create_at: new Date()
        };
        return knex('users')
            .where('id',id)
            .update(utilisateur);
    },
    delleteUser: function(id){
        return knex('users')
            .where('id',id)
            .del();
    },

};
module.exports = userModel;
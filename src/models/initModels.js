const Users = require('./users.models')
const RecoveryPasswords = require('./recoveryPasswords.models')
const Conversations = require('./conversations.models')
const Messages = require('./messages.models')
const Participants = require('./participants.models')

const initModels = () => {
    
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)
       //? Un usuario tiene o envia muchos mensajes
       Users.hasMany(Messages)
       Messages.belongsTo(Users)
       //? Un usuario tiene muchas conversaciones
       Users.hasMany(Conversations)
       Conversations.belongsTo(Users)
       //? Un participantes solo tiene un usuario
       Users.hasOne(Participants)
       Participants.belongsTo(Users)
       //? Una conversacion tiene muchos participantes
       Conversations.hasMany(Participants)
       Participants.belongsTo(Conversations)
       //? Una conversacion tiene muchos mensajes
       Conversations.hasMany(Messages)
       Messages.belongsTo(Conversations)
}

module.exports = initModels
const CrudRepository = require('./crud-repositories')
const { Airplane } = require('../models')

class AirplaneRepositry extends CrudRepository {
    constructor() {
        super(Airplane);
    }
    
}

module.exports = AirplaneRepositry;
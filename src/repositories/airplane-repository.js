const CrudRepository = require('./crud-repository')
const { Airplane } = require('../models')

class AirplaneRepositry extends CrudRepository {
    constructor() {
        super(Airplane);
    }
    
}

module.exports = AirplaneRepositry;
const { Logger } = require("../config")

class CrudRepository {
    constructor(model) {
        this.model = model
    }
    async create(data) {
        //cleaner implementation
        const response = await this.model.create(data);
        return response

        // basic implementation
        // try {
        //     const response = await this.model.create(data);
        //     return response
        // } catch (error) {
        //     Logger.error("Something went wrong in the crud repo")
        //     throw error
        // }
    }

    async destroy(data) {
        const response = await this.model.destroy({
            where: {
                id: data
            }
        });
        return response
        // try {
        //     const response = await this.model.destroy({
        //         where: {
        //             id: data
        //         }
        //     });
        //     return response
        // } catch (error) {
        //     Logger.error("Something went wrong in the crud repo")
        //     throw error
        // }
    }

    async get(data) {
        const response = await this.model.findByPk(data);
        return response
        // try {
        //     const response = await this.model.findByPk(data);
        //     return response
        // } catch (error) {
        //     Logger.error("Something went wrong in the crud repo")
        //     throw error
        // }
    }

    async getAll(data) {
        const response = await this.model.findAll();
        return response
        // try {
        //     const response = await this.model.findAll();
        //     return response
        // } catch (error) {
        //     Logger.error("Something went wrong in the crud repo")
        //     throw error
        // }
    }

    async update(id, data) { //data -> {col: val ...}
        const response = await this.model.update(data, {
            where: {
                id: id
            }
        });
        return response
        // try {
        //     const response = await this.model.update(data, {
        //         where: {
        //             id: id
        //         }
        //     });
        //     return response
        // } catch (error) {
        //     Logger.error("Something went wrong in the crud repo")
        //     throw error
        // }
    }
}

module.exports = CrudRepository;
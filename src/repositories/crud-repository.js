const { Logger } = require("../config");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require('http-status-codes')
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
        if (!response) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
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
        //rectified this line -> was giving error
        if (!response) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
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
        if (!response[0]) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
        }
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
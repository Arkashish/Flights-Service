const { StatusCodes } = require('http-status-codes')
const { statusCode } = require('../utils/errors/app-error')

const { AirplaneService } = require('../services');
const { response } = require('express');
const { SuccessResponse, ErrorResponse } = require('../utils/common')
async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })
        SuccessResponse.data = airplane
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
        // .json({
        //     success: true,
        //     message: 'Successfully create an airplane',
        //     data: airplane,
        //     error: {}
        // })
    } catch (error) {
        ErrorResponse.error = error;
        return res
            // .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .status(error.statusCode)
            .json(ErrorResponse)
        // .json({
        //     success: false,
        //     message: 'Something went wrong while creating an airplane',
        //     data: {},
        //     error: error
        // })
    }
}

async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res
            // .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

async function getAirplane(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function destroyAirplane(req, res) {
    try {
        const airplanes = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

// async function updateAirplane(req, res) {
//     try {
//         const airplane = await AirplaneService.updateAirplane({
//             capacity: req.body.capacity
//         },
//             req.params.id
//         )
//         SuccessResponse.data = airplane
//         return res
//             .status(StatusCodes.OK)
//             .json(SuccessResponse)
//     } catch (error) {
//         ErrorResponse.error = error;
//         return res
//             .status(error.statusCode)
//             .json(ErrorResponse)
//     }
// }
async function updateAirplane(req, res) {
    try {
        const airplanes = await AirplaneService.updateAirplane(
            {
                capacity: req.body.capacity
            },
            req.params.id
        );
        SuccessResponse.data = airplanes;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {

        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}
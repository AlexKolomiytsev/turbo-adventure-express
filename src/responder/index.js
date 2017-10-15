/**
 * Module imports
 */
import express          from 'express'
import _                from 'lodash'

/**
 * Project imports
 */
import constants        from '../util/constants'

/**
 * used to define response code according to the request method and payload.
 * @param method
 * @param payload
 * @returns {number}
 */
const getResponseCode = (method, payload) => {
    let responseCode = constants.HTTP200;
    if (method === 'POST') responseCode = constants.HTTP201;

    if (!payload && !payload.length && method !== 'GET') responseCode = constants.HTTP204;

    return responseCode
};

/**
 * Responder
 */
class Responder {
    constructor() {
        this.messageText = null
    }

    static reply(data = []) {
        return data.isBoom || _.isError(data) ? this.replyWithError(data) : this.replySuccessfully(data)
    }

    static replyWithError(error) {
        if (error.isBoom) {
            return this.status(error.output.statusCode).json({
                error: error.output.payload.error,
                data: error.data,
                messages: [
                    error.output.payload.message || this.messageText
                ]
            })
        }
        else {
            const isCustom = error.message.split(' ')[0] === `${constants.HTTP400}`;
            const message = isCustom ? _.rest(error.message.split(' '), 1).join(' ') : error.message;

            const statusCode = isCustom ? constants.HTTP400 : constants.HTTP500;

            return this.status(statusCode).json({
                error: isCustom ? 'BadRequest' : error.name,
                data: error.toString(),
                messages: [
                    message || this.messageText
                ]
            })
        }
    }

    static replySuccessfully(data) {
        if (!this.messageText) this.messageText = 'ok';

        const status = getResponseCode(this.req.method, data);

        return this.status(status).json({ data, messages: [ this.messageText ] })
    }

    static message(message) {
        this.messageText = message;

        return this
    }
}

const expressResponse = express.response;

expressResponse.reply = Responder.reply;
expressResponse.replyWithError = Responder.replyWithError;
expressResponse.replySuccessfully = Responder.replySuccessfully;
expressResponse.message = Responder.message;

export default expressResponse
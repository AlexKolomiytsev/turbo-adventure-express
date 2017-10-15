/**
 * System imports
 */
import Boom from 'boom';

/**
 * Route class handler
 */
class TestGetHandler {
    constructor() {

    }

    /**
     * Public
     * GET test
     * @param req
     * @param res
     * @returns {*}
     */
    route(req, res) {
        return res.reply(Boom.badRequest('Wrong request', {dataError: 'some error data'}));
    }

}

export default new TestGetHandler();

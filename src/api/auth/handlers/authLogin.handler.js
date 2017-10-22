/**
 * Route class handler
 */
class AuthLoginHandler {
    constructor() {

    }

    /**
     * Public
     * POST login
     * @param req
     * @param res
     */
    route(req, res) {
        return res.reply({test: 'test'});
    }
}

export default new AuthLoginHandler();
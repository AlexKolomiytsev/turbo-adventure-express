/**
 * Project imports
 */
import config           from "../config";
import { Database }     from "./database";
import { Mongo }        from "./mongo";

/**
 * Helpers
 */
const _getConnectionInstance = () => {
    return {
        'mongodb': new Mongo()
    }
};

/**
 * Db Factory
 */
export default class Db {
    static connect() {
        const connection = config.get('/database').connection;

        const db = new Database(
            _getConnectionInstance()[connection]
        );

        db.connect();
    }
}
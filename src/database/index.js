/**
 * Project imports
 */
import config           from "../config";
import { Database }     from "./database";
import { Mongo }        from "./mongo";

/**
 * Db Factory
 */
export default class Db {
    connect() {
        const connection = config.get('/database').connection;

        const db = new Database(
            this.getConnectionInstance()[connection]
        );

        db.connect();
    }

    getConnectionInstance() {
        return {
            'mongodb': new Mongo()
        }
    }
}
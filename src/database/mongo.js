/**
 * System imports
 */
import Mongoose from 'mongoose';
import Bluebird from 'bluebird';

/**
 * Project imports
 */
import config from '../config';

/**
 * Mongo connection class
 */
export class Mongo {
    constructor() {
        this.mongoose = Mongoose;
        this.mongoose.Promise = Bluebird;

        this.connection = config.get('/database/mongo/connection');
        this.host = config.get('/database/mongo/host');
        this.port = config.get('/database/mongo/port');
        this.dbName = config.get('/database/mongo/dbName');
    }

    URL() {
        return `${this.connection}://${this.host}:${this.port}/${this.dbName}`
    }

    connect() {
        this.mongoose.connect(this.URL());
    }
}
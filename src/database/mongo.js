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

        this.connection = config.get('/database/connection');
        this.host = config.get('/database/host');
        this.port = config.get('/database/port');
        this.dbName = config.get('/database/dbName');
    }

    URL() {
        return `${this.connection}://${this.host}:${this.port}/${this.dbName}`
    }

    connect() {

        console.log(this.URL());

        this.mongoose.connect(this.URL());
    }
}
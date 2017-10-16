/**
 * System imports
 */
import Confidence           from 'confidence';

/**
 * Project imports
 */
import server               from './server';
import auth                 from './auth';
import database             from './database';
import node                 from './node';

/**
 * Setup
 */
const criteria = {
    env: process.env.NODE_ENV
};

/**
 * Config
 */
const config = {
    server,
    auth,
    database,
    node
};

const store = new Confidence.Store(config);

export default {
    get: (key) => store.get(key, criteria)
}

/**
 * System imports
 */
import Confidence           from 'confidence';

/**
 * Project imports
 */
import auth                 from './auth'
import database             from './database'

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
    auth,
    database
};

const store = new Confidence.Store(config);

export default {
    get: (key) => store.get(key, criteria)
}

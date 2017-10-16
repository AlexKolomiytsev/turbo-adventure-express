/**
 * System imports
 */
import dotenv from 'dotenv'

/**
 * Project imports
 */
import constants from '../util/constants'

/**
 * Load variables from .env file to process.env
 */
dotenv.load();

/**
 * Node environment config
 */
const node = {};

node.nodeEnv = {
  $filter: 'env',
  'development': constants.ENV_TYPES.DEV,
  'production': constants.ENV_TYPES.PROD,
  $default: constants.ENV_TYPES.DEV
}

export default node

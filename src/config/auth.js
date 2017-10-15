/**
 * System imports
 */
import dotenv from 'dotenv'

/**
 * Load variables from .env file to process.env
 */
dotenv.load();

/**
 * Auth configurations
 */
export default {
    jwtSecret: process.env.JWT_SECRET
}
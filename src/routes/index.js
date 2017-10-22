/**
 * System imports
 */
import express from 'express';

/**
 * Setup
 */
const router = express.Router();

/**
 * Features handlers
 */
import Test from '../api/test';
import Auth from '../api/auth';

/**
 * Application routing configuration
 */
router.use('/auth', Auth);
router.use('/test', Test);

export default router;
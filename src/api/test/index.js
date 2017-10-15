/**
 * System imports
 */
import express from 'express';

/**
 * Handlers
 */
import TestGetHandler from './handlers/testGet.handler';

/**
 * Setup
 */
const router = express.Router();

/**
 * Routes
 */
router.get('/test-route', TestGetHandler.route);
router.get('/test-route2', TestGetHandler.route);

/**
 * Export module of routes so the main app can use it entirely
 */
export default router;
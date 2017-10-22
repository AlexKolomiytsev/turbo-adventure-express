/**
 * System imports
 */
 import express from 'express';

/**
 * Handlers
 */
import AuthLoginHandler from './handlers/authLogin.handler';

/**
 * Setup
 */
const router = express.Router();

/**
 * Router
 */
router.post('/login', AuthLoginHandler.route);

/**
 * Export module of routes so the main app can use it entirely
 */
export default router;

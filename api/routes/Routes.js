import express from 'express';
const router = new express.Router();
  
import redirect from './Redirect/redirect.js';
router.post('/wp/redirections');

export default router;

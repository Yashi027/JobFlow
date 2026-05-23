import express from 'express';

const router = express.Router();

import {sendBulkEmails} from '../controllers/emailController.js';

router.post('/send', sendBulkEmails);

export default router;
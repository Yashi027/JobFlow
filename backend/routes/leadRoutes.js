import express from 'express';

const router = express.Router();

import {
    searchLeads,
    exportCSV
} from '../controllers/leadController.js';

router.post('/search', searchLeads);
router.get('/export', exportCSV);

export default router;
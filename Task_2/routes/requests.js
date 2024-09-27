const express = require('express');
const {
    addRequest,
    getAllRequests,
    getRequestById,
    updateRequest,
    deleteRequest,
    completeRequest,
} = require('../controllers/requestController');

const router = express.Router();

router.post('/', addRequest);
router.get('/', getAllRequests);
router.get('/:id', getRequestById);
router.put('/:id', updateRequest);
router.delete('/:id', deleteRequest);
router.post('/:id/complete', completeRequest);

module.exports = router;

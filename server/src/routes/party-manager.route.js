const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const party_manager_controller = require('../controllers/party-manager.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', party_manager_controller.test);

router.post('/newPartyManager', party_manager_controller.newPartyManager);

router.get('/:id', party_manager_controller.findPartyManagerById);

module.exports = router;
const express = require('express');
const router = express.Router();
const party_manager_controller = require('../controllers/party-manager.controller');


router.post('/newPartyManager', party_manager_controller.newPartyManager);

router.get('/getAllPartyManagers', party_manager_controller.getAllPartyManagers);

router.get('/:id', party_manager_controller.findPartyManagerById);

router.delete('/:id', party_manager_controller.deletePartyManagerById);

router.put('/:id', party_manager_controller.editPartyManager);

// Export the party manager routes
module.exports = router;
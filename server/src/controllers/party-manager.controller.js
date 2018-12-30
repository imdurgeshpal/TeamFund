
const PartyManager = require('../models/party-manager');

exports.newPartyManager = (req, res) => {
    const partyManager = new PartyManager({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    partyManager.save((err) => {
        if (err) {
            return next(err);
        }
        res.send('PartyManager Created successfully')
    })
};

exports.findPartyManagerById = (req, res) => {
    PartyManager.findById(req.params.id, (err, partyManager) => {
        if (err) return next(err);
        res.send(partyManager);
    })
};

exports.deletePartyManagerById = (req, res) => {
    PartyManager.findByIdAndRemove(req.params.id, (err) => {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.editPartyManager = (req, res) => {
    PartyManager.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, partyManager) => {
        if (err) return next(err);
        res.send('PartyManager udpated.');
    })
};
exports.getAllPartyManagers = (req, res) => {
    PartyManager.find((err, partyManagers) => {
        if (err) return next(err);
        res.send(partyManagers);
    })
};
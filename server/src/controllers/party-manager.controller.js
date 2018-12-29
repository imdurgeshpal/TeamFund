const PartyManager = require('../models/party-manager');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

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
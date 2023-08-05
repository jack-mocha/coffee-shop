const express = require('express');
const config = require('config');
const router = express.Router();
const HOST = config.get('host');
const CAPPUCCINO = 'cappuccino';

router.post('/make', (req, res) => {
    //Validate the request
    const { type } = req.body;
    if (!type || type.toLowerCase() != CAPPUCCINO) {
      res.status(400).send(`(${HOST}) No coffe for you.`);
      return;
    }
  
    //Make coffee
    const coffee = MakeCappuccino();

    //Serve coffee
    res.send(`(${HOST}) Here's your ${coffee}. Enjoy!`);
});

function MakeCappuccino() {
    return CAPPUCCINO;
}

module.exports = router;
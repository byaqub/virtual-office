const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Story = mongoose.model('story');


module.exports = app => {
  app.post('/api/story', async (req, res) => {
    const { emails } = req.body;
    console.log(req.body)
    return;
    try {
      const story = await new Story({
        emails,
        _user: req.user.id
      }).save();
      const user = await req.user.save();
      res.send(user);
    } catch(err) {
      res.status(422).send(err);
    }
  });
};
const express = require('express');
require('dotenv').config();

const { PORT = 8000 } = process.env;

module.exports.getUser = (req, res, next) => {
  User.findById(req.params.userId)
    .orFail(new NotFoundError(ERROR_MESSAGES.USER_BY_ID_NOT_FOUND))
    .then((user) => res.send(user))
    .catch((err) => {
      if (err instanceof mongoose.Error.CastError) {
        return next(new BadRequestError(ERROR_MESSAGES.INCORRECT_ID));
      }
      return next(err);
    });
};

const app = express();

app.use(express.json());

app.use('/send-call', require('./routes/send-call'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

const express = require('express');
require('dotenv').config();
const cors = require('./middlewares/CORS');

const { PORT = 8000 } = process.env;

const app = express();
app.use(cors);

app.use(express.json());

app.use('/send-call', require('./routes/send-call'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
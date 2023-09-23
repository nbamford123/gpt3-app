const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { Apps } = require('@material-ui/icons');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
app.use('/openai', require('./router'));
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// q: how do I add Access-Control-Allow-Origin to the header?

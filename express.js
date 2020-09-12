const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const { config } = require('./src/config');
const router = express.Router();
const app = express();
const port = config.express.port;

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const clipboardy = require('clipboardy');
const robotJS = require('robotjs');

router.post('/copyPasta', (request, response) => {
  clipboardy.writeSync(request.body.text);
  robotJS.keyTap(config.robotjs.paste.first, config.robotjs.paste.second);

  // autoformat in vs-code, on windows
  if (config.robotjs.cleanup) {
    robotJS.keyTap(config.robotjs.cleanup.first, config.robotjs.cleanup.second);
  }

  response.status(200).end();
});

// add router in the Express app.
app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

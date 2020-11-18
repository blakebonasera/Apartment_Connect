require("dotenv").config();
const express = require('express'),
    cookieParser = require("cookie-parser"),
    cors = require("cors")
const cors = require('cors');

require("./config/mongoose.config")(process.env.appartmentConnect)
const app = express();

app.use(cookieParser());
app.use(cors({credentials: true, origin:"http://localhost:3000" }));
app.use(express.json());

require('./routes/tenant.routes.js')(app);
// require('./routes/resources.routes.js')(app);

app.listen(process.env.appartmentConnect, () =>
  console.log(`Listening on port ${process.env.appartmentConnect}`)
);

const app = require("./app");
const dotenv = require("dotenv");

const path = require("./config/.env");
//config
dotenv.config({
  path,
});
//connext to DB

const connectDB = require("./config/database");
connectDB();

const PORT = process.env || 8000;

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

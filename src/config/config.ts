import { config as conf } from "dotenv";
conf();
const _config = {
  port: process.env.PORT,
  dbUrl: process.env.MONGO_CONNECTION_STRING,
  env: process.env.NODE_ENV,
};

// object.freeze does not allow your object to be manipulated, your object is readonly
export const config = Object.freeze(_config);

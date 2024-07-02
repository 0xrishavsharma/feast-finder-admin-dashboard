// import "dotenv/config";
import { cleanEnv, str } from "envalid";

const env = cleanEnv(import.meta.env, {
  VITE_BACKEND_API_URL: str(),
});

export default env;

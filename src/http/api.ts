// Creating this file to organize all the api endpoints in one file. Better for maintainability

import { Credentials } from "../types";
import { api } from "./client";

// Auth service
export const login = (credentials: Credentials) =>
  api.post("/auth/login", credentials);

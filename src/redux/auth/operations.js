import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newUser);
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk("auth/login", async (creds, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", creds);
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const logout = createAsyncThunk("auth/logout", async () => {});
export const refreshUser = createAsyncThunk("auth/refresh", async () => {});

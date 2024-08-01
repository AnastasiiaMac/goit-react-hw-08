import { combineSlices } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";
import filtersReducer from "./filters/slice";
import authReducer from "./auth/slice";
export const rootReducer = combineSlices({
  contacts: contactsReducer,
  filters: filtersReducer,
  auth: authReducer,
});

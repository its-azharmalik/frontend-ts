import { createApiSlice } from ".";
import { getDataThunk } from "./api";

// we will make all the slices here
export const myCustomSlice = createApiSlice('myCustomSlice', getDataThunk)
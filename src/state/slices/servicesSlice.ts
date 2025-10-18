import { getServices } from "@/api/servicesApi";
import type { Service } from "@/utils/service";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchServices = createAsyncThunk("services/fetch", async () => {
  return await getServices();
});

type State = {
  items: Service[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null;
};

const initialState: State = { items: [], status: "idle", error: null };

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed";
      });
  },
});

export default servicesSlice.reducer;

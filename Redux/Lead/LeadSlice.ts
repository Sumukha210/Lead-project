import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import EndPointRoute from "../../utils/EndpointRoute";

export const fetchAllLead = createAsyncThunk(
  "lead/getAllLead",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${EndPointRoute}/api/lead`);
      console.log("res data", res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const leadSlice = createSlice({
  name: "leadSlice",
  initialState: {
    data: [] as any,
  },
  reducers: {
    deleteSliceById: (state, action) => {
      state.data = state.data.filter((item: any) => item.id != action.payload);
    },
  },
  extraReducers: {
    [fetchAllLead.fulfilled.toString()]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { deleteSliceById } = leadSlice.actions;
export default leadSlice.reducer;

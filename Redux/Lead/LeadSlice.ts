import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import EndPointRoute from "../../utils/EndpointRoute";

export const fetchAllLead = createAsyncThunk(
  "lead/getAllLead",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${EndPointRoute}/api/lead`);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const saveLead = createAsyncThunk(
  "lead/saveLead",
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${EndPointRoute}/api/lead`, data);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteLead = createAsyncThunk(
  "lead/deleteLead",
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`${EndPointRoute}/api/lead/${data}`);
      console.log("delete data", res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

interface IUpdateLead {
  id: string;
  data: any;
}

export const updateLead = createAsyncThunk(
  "lead/updateLead",
  async (arg: IUpdateLead, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`${EndPointRoute}/api/lead/${arg.id}`, {
        communication: arg.data,
      });
      console.log("udpate data", res.data);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const leadSlice = createSlice({
  name: "leadSlice",
  initialState: {
    data: null as any,
  },
  reducers: {
    deleteSliceById: (state, action) => {
      state.data = state.data.filter((item: any) => item._id != action.payload);
    },
  },
  extraReducers: {
    [fetchAllLead.fulfilled.toString()]: (state, action) => {
      state.data = action.payload;
    },

    [saveLead.fulfilled.toString()]: (state, action) => {
      state.data.push(action.payload);
    },

    [deleteLead.fulfilled.toString()]: (state, action) => {},

    [updateLead.fulfilled.toString()]: (state, action) => {
      const newData = state.data.filter(
        (item: any) => item._id != action.payload._id
      );

      state.data = [...newData, action.payload];
    },
  },
});

export const { deleteSliceById } = leadSlice.actions;
export default leadSlice.reducer;

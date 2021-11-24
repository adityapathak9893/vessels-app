import { createAsyncThunk } from "@reduxjs/toolkit";
import { mockApiCall } from "../../data-services";
import { UPDATE_DATA, VesselData } from "../../models";

export const getAllVesselData = createAsyncThunk<VesselData[]>(
  UPDATE_DATA,
  async () => {
    return await mockApiCall();
  }
);

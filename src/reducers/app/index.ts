import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { getAllVesselData } from "../../actions/app";
import { VesselData, AppState } from "../../models";
import { initializedAppState } from "../../models/initializations";

const AppReducer = createReducer(initializedAppState, (app) => {
  app
    .addCase(
      getAllVesselData.pending,
      (state: AppState): AppState => ({ ...state })
    )
    .addCase(
      getAllVesselData.rejected,
      (state: AppState): AppState => ({ ...state })
    )
    .addCase(
      getAllVesselData.fulfilled,
      (
        state: AppState,
        { payload }: PayloadAction<VesselData[]>
      ): AppState => ({ ...state, allVesselsData: payload })
    );
});

export default AppReducer;

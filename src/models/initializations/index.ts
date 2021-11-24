import { VesselData, AppState } from "..";

export const initializedAllVesselsData: VesselData = {
  ID: null,
  Name: "",
  ChristianName: "",
  Details: { Type: "", IMONumber: null },
};

export const initializedAppState: AppState = {
  allVesselsData: [],
};

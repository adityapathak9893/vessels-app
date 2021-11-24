import { mockData, VesselData } from "../models";

export const mockApiCall = async (): Promise<VesselData[]> => {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(mockData), 3000);
  });
};

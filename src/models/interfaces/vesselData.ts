export interface VesselData {
  ID: number | null;
  Name: string;
  ChristianName: string;
  Details: { Type: string; IMONumber: number | null };
}

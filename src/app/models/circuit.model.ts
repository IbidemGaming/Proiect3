import { ILocationModel } from "./location.model";
export interface ICircuitModel {
  Location: ILocationModel,
  circuitId: string,
  circuitName: string,
  url: string,
}

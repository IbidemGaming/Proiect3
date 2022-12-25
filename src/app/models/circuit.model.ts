import { ILocationModel } from "./location.model";
export interface ICircuitModel {
  location: ILocationModel,
  id: string,
  name: string,
  url: string,
}

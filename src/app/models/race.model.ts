import {ICircuitModel} from "./circuit.model";

export interface IRace {
  Circuit: ICircuitModel,
  date: string,
  time: string,
  name: string,
  round: string,
  season: string,
  url: string,
}

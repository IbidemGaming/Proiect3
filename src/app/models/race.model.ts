import {ICircuitModel} from "./circuit.model";
import {LapTimeModel} from "./lapTime.model";

export interface IRace {
  Circuit: ICircuitModel,
  Qualifying: LapTimeModel,
  FirstPractice: LapTimeModel,
  SecondPractice: LapTimeModel,
  ThirdPractice: LapTimeModel

  date: string,
  time: string,
  raceName: string,
  round: string,
  season: string,
  url: string,
}

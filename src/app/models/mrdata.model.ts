import { IRace } from "./race.model";
export interface IMRDataModel {
  RaceTable: {season?: string, Races: IRace[]},
  limit: string,
  offset: string,
  series: string,
  total: string,
  url: string,
  xmlns: string,
}

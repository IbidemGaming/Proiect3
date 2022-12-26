import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IMRDataModel} from "../models/mrdata.model";


interface MRData {
  MRData: IMRDataModel;
}
@Injectable({
  providedIn: 'root',
})
export class  Formula1Service {

  constructor(private http: HttpClient) { }

  getF1() {
    return this.http.get<MRData>('https://ergast.com/api/f1.json');
  }

  getSeason(year: string) {
    return this.http.get<MRData>(`https://ergast.com/api/f1/${year}.json`);
  }

  getCircuit(circuitName: string) {
    return this.http.get<any>(`http://ergast.com/api/f1/circuits/${circuitName}`)
  }

  getConstructorInfo(constructorName: string) {
    return this.http.get<any>(`http://ergast.com/api/f1/constructors/${constructorName}`)
  }

  getDriverInfo(driverName: string) {
    return this.http.get<any>(`http://ergast.com/api/f1/drivers/${driverName}`)
  }

  getGridInfo(gridName: string) {
    return this.http.get<any>(`http://ergast.com/api/f1/grid/${gridName}`)
  }

  getLapTime(season: string, round: string, lap?: string){
    if (lap)
      return this.http.get<any>(`https://ergast.com/api/f1/${season}/${round}/laps/${lap}`);
    return this.http.get<any>(`https://ergast.com/api/f1/${season}/${round}/laps`);
  }

}

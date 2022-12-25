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

  getSeason(year: number) {
    return this.http.get<MRData>(`https://ergast.com/api/f1/${year}.json`);
  }

}

import { Component, OnInit } from '@angular/core';
import { Formula1Service } from "./services/formula1.service";
import { IMRDataModel } from "./models/mrdata.model";
import { IRace } from "./models/race.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mobileMedia: any = window.matchMedia("(max-width: 520px)");
  Curse: string[] = ['Angular', ' JavaScript', 'Php', 'Jquery', 'HTML', 'Java']

  constructor(private formula1Service: Formula1Service) {
    if (this.mobileMedia.matches) {
      this.Curse.splice(-3,3)
    }
  }

  tableEntries: IRace[] = [];
  ngOnInit(): void {

    this.formula1Service.getF1().subscribe(response => {
      this.tableEntries = response.MRData.RaceTable.Races;
      console.log(response)
    })
  }

  selectedSeason(year: number) {
    this.formula1Service.getSeason(year).subscribe(response => {
      this.tableEntries = response.MRData.RaceTable.Races;
      console.log(response)
    })
  }
}

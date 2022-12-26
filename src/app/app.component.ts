import { Component, OnInit } from '@angular/core';
import { Formula1Service } from "./services/formula1.service";
import { IMRDataModel } from "./models/mrdata.model";
import { IRace } from "./models/race.model";
import * as moment from "moment";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";
import {SeasonModel} from "./models/season.model";
import * as events from "events";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mobileMedia: any = window.matchMedia("(max-width: 520px)");
  Curse: string[] = ['Angular', ' JavaScript', 'Php', 'Jquery', 'HTML', 'Java']
  searchInput: string = '';

  seasons: SeasonModel[] = [];

  constructor(private formula1Service: Formula1Service) {
    if (this.mobileMedia.matches) {
      this.Curse.splice(-3,3)
    }
  }

  raceTable: IRace[] = [];
  year: string | undefined = moment().format('YYYY');
  ngOnInit(): void {
    this.getSeasonList();
    this.getSelectedSeason('current');
  }

  getSelectedSeason(year: string) {
    this.formula1Service.getSeason(year).subscribe(response => {
      this.raceTable = response.MRData.RaceTable.Races;
      this.year = response.MRData.RaceTable.season;
    })
  }

  getSeasonList() {
    let currentYear = parseInt(moment().format('YYYY'));
    while (currentYear >= 1950) {
      let seasonYear: SeasonModel = {
        id: `${currentYear}`,
        name: `Season ${currentYear}`
      }
      this.seasons.push(seasonYear)
      currentYear--;
    }
  }

  getSelectedCircuit(event: {index: number}) {
    // console.log(event.index)
    // this.formula1Service.getCircuit(this.raceTable[event.index].Circuit.circuitId).subscribe(response => {
    //   console.log(response)
    // })
  }


}



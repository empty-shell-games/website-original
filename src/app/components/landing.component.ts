import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'

interface Countdown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

@Component({
  selector: 'txg-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class TXGLandingComponent implements OnInit {
    countdown!: Countdown
    constructor() { }

    ngOnInit() {
      var time = new Date("2021-12-17T18:00").getTime() - new Date().getTime()
      console.log(Math.floor(time/86400))
      this.countdown = {days: 1, hours: 1, minutes: 1, seconds: 1}
    }
}

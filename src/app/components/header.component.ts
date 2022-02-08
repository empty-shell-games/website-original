import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

import {MatDialog} from '@angular/material/dialog';
import {TXGRoadmapComponent} from './roadmap.component'

const TWITTER_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><rect width="36" height="36" rx="10" fill="#55acee"></rect><path d="M29.15 11.13a9.18 9.18 0 0 1-2.61.72 4.6 4.6 0 0 0 2-2.52 9.28 9.28 0 0 1-2.89 1.11 4.54 4.54 0 0 0-7.74 4.14 12.9 12.9 0 0 1-9.37-4.75A4.55 4.55 0 0 0 10 15.9a4.59 4.59 0 0 1-2.06-.57 4.54 4.54 0 0 0 3.65 4.51 4.45 4.45 0 0 1-2.06.08 4.56 4.56 0 0 0 4.25 3.16A9.19 9.19 0 0 1 7 25a12.92 12.92 0 0 0 19.88-11.52 9.22 9.22 0 0 0 2.27-2.35z" fill="#fff"></path></svg>`;
const DISCORD_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><rect width="36" height="36" rx="10" fill="#8c9fff"></rect><path d="M9.59 10.49A20 20 0 0 1 14.49 9h.08a2.14 2.14 0 0 0 2 1.08 19.85 19.85 0 0 1 2.78 0 2.14 2.14 0 0 0 2-1.07h.08a20.25 20.25 0 0 1 4.91 1.49h0A19.63 19.63 0 0 1 29.9 24a.09.09 0 0 1 0 .06 20.29 20.29 0 0 1-6 3 .1.1 0 0 1-.09 0 14.66 14.66 0 0 1-1.23-2 .08.08 0 0 1 0-.11 13.4 13.4 0 0 0 1.87-.95.08.08 0 0 0 0-.13l-.37-.29a.11.11 0 0 0-.08 0 14.5 14.5 0 0 1-12.12 0 .08.08 0 0 0-.08 0l-.37.29a.08.08 0 0 0 0 .13 12.93 12.93 0 0 0 1.89.87.08.08 0 0 1 0 .11 16.53 16.53 0 0 1-1.23 2 .1.1 0 0 1-.09 0 20.22 20.22 0 0 1-6-3A.09.09 0 0 1 6 24a19.47 19.47 0 0 1 3.56-13.48zm12.35 10.79a2.29 2.29 0 0 0 2.17-2.38 2.18 2.18 0 1 0-4.34 0 2.28 2.28 0 0 0 2.17 2.38zm-8 0a2.29 2.29 0 0 0 2.16-2.38 2.28 2.28 0 0 0-2.17-2.38 2.26 2.26 0 0 0-2.17 2.38 2.27 2.27 0 0 0 2.17 2.38z" fill="#fff"></path></svg>`;

@Component({
  selector: 'txg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class TXGHeaderComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public dialog: MatDialog) {
    iconRegistry.addSvgIconLiteral('twitter', sanitizer.bypassSecurityTrustHtml(TWITTER_ICON));
    iconRegistry.addSvgIconLiteral('discord', sanitizer.bypassSecurityTrustHtml(DISCORD_ICON));
  }

  openRoadmap() {
    const dialogRef = this.dialog.open(TXGRoadmapComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

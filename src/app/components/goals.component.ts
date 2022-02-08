import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TXGRoadmapComponent} from './roadmap.component';
@Component({
  selector: 'txg-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class TXGGoalsComponent {
  constructor(public dialog: MatDialog) { }

    openRoadmap() {
      const dialogRef = this.dialog.open(TXGRoadmapComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
}

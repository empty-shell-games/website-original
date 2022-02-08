import { Component } from '@angular/core';

@Component({
  selector: 'txg-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class TXGRoadmapComponent {
    events = [
        {date: 'Late November 2021', name: 'Scout Expedition', description: `An advance team of 1000 scouts was sent out in search of new worlds to colonize.
        250 of those scouts have lost their way in the expanse of space and need assistance to find their way again.`},
        {date: 'Late December 2021', name: 'Early Colonists', description: `Scout Bees report back to their Queens, and an initial wave of workers is sent to the newly founded colonies.`},
        {date: 'Late December 2021', name: 'Early Access Game', description: `The game will be available for early access with nectar collection.`},
        {date: 'Early Q1 2022', name: 'Mass Migration', description: `Progress reports sent home show promise. Honey reserves are building, and the existing colonies begin their long migration `},
        {date: 'Q1 - Q2 2022', name: 'Smart Contracts', description: `Queens, larvae, and baby bees will begin to appear as locked assets in wallets and decentralization will be accomplished.`}
    ];
}

import { Component, Input, OnInit } from '@angular/core';

import { Size } from '../../ui/ui.model';

@Component({
	selector: 'club-logo',
	templateUrl: './club-logo.component.html',
	styleUrls: ['./club-logo.component.scss']
})
export class ClubLogoComponent implements OnInit {
	@Input() id: number;
	@Input() size: Size;

	dimension: number;

	ngOnInit() {
		switch (this.size) {
			case 'S':
				this.dimension = 32;
				break;
			case 'M':
				this.dimension = 64;
				break;
			case 'L':
				this.dimension = 128;
				break;
			case 'XL':
				this.dimension = 192;
				break;
			default:
				this.dimension = 32;
		}
	}
}

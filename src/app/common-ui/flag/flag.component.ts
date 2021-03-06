import { Component, Input, OnInit } from '@angular/core';

import { Size } from '../../ui/ui.model';
import { COUNTRIES } from './flag.model';

@Component({
	selector: 'flag',
	templateUrl: './flag.component.html',
	styleUrls: ['./flag.component.scss']
})
export class FlagComponent implements OnInit {
	@Input() id?: string;
	@Input() iconName?: string;
	@Input() size: Size;

	dimension: number;
	value: string;

	ngOnInit() {
		if (this.iconName) {
			this.value = this.iconName;
		}

		if (this.id) {
			this.value = COUNTRIES[this.id];
		}

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


import { Component, Input, OnInit } from '@angular/core';
import { Size } from 'src/app/ui/ui.model';

@Component({
	selector: 'rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
	@Input() name: string;
	@Input() value: number;
	@Input() alt?: boolean;
	@Input() size: Size;

	percent: number;
	tooltip: string;
	ngOnInit() {

		this.percent = Math.round(this.value / 2.5) * 2.5;
		if (this.value <= 5) {
			this.tooltip = 'disastrous';
		} else if (this.value > 5 && this.value <= 10) {
			this.tooltip = 'wretched';
		} else if (this.value > 10 && this.value <= 15) {
			this.tooltip = 'poor';
		} else if (this.value > 15 && this.value <= 20) {
			this.tooltip = 'weak';
		} else if (this.value > 20 && this.value <= 25) {
			this.tooltip = 'inadequate';
		} else if (this.value > 25 && this.value <= 30) {
			this.tooltip = 'passable';
		} else if (this.value > 30 && this.value <= 35) {
			this.tooltip = 'solid';
		} else if (this.value > 35 && this.value <= 40) {
			this.tooltip = 'excellent';
		}
	}
}


import { Component, Input, OnInit, } from '@angular/core';

import { Size } from '../../ui/ui.model';

@Component({
	selector: 'circle-progress',
	templateUrl: './circle-progress.component.html'
})
export class CircleProgressComponent implements OnInit {
	@Input() percent: number;
	@Input() size?: Size;
	@Input() color?: 'green' | 'yellow' | 'orange' | 'red';

	ngOnInit() {
		if (this.percent < 0 && this.percent > 100) {
			console.warn('invalid percentile');
		}
	}
}
